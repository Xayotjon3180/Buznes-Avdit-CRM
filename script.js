const questions = [
    {
        id: "role",
        question: "Siz biznesda qanday rolga egasiz?",
        type: "options",
        options: ["Biznes egasi", "Direktor / Rahbar", "Marketing menejeri", "Sotuv menejeri"]
    },
    {
        id: "niche",
        question: "Biznesingiz qaysi sohada faoliyat yuritadi?",
        type: "select",
        options: ["Elektron tijorat / Savdo", "Ta'lim / Kurslar", "Xizmat ko'rsatish", "Ishlab chiqarish", "IT / Dasturlash", "Boshqa"]
    },
    {
        id: "crm",
        question: "CRM tizimidan foydalanasizmi? (AmoCRM, Bitrix24 va h.k.)",
        type: "options",
        options: ["Ha, foydalanamiz", "Yo'q, hali o'rnatmaganmiz"]
    },
    {
        id: "salesTeam",
        question: "Alohida sotuv bo'limi yoki menejerlaringiz bormi?",
        type: "options",
        options: ["Ha, bor", "Yo'q, o'zim sotaman", "Endi shakllantirmoqchimiz"]
    },
    {
        id: "socialMedia",
        question: "Ijtimoiy tarmoqlaringiz (Upakovka) holati qanday?",
        type: "options",
        options: ["A'lo (Professional)", "Yaxshi", "O'rtacha", "Yomon / Yo'q"]
    },
    {
        id: "currentProfit",
        question: "Hozirgi oylik sof foydangiz qancha ($)?",
        type: "number",
        placeholder: "Masalan: 2000"
    },
    {
        id: "targetProfit",
        question: "Maqsadingiz - oylik daromadni qanchaga yetkazmoqchisiz ($)?",
        type: "number",
        placeholder: "Masalan: 10000"
    },
    {
        id: "avgCheck",
        question: "Mahsulot/Xizmatning o'rtacha cheki qancha ($)?",
        type: "number",
        placeholder: "Masalan: 50"
    },
    {
        id: "conversion",
        question: "Sotuv konversiyasi necha foiz? (Lid -> Xaridor)",
        type: "number",
        placeholder: "Masalan: 20"
    },
    {
        id: "adPlatform",
        question: "Asosiy reklama platformangiz qaysi?",
        type: "select",
        options: ["Instagram / Facebook", "Telegram", "Google Ads", "YouTube", "TikTok", "Barchasi"]
    },
    {
        id: "currentBudget",
        question: "Reklama uchun ajratishga tayyor bo'lgan oylik byudjetingiz ($)?",
        type: "number",
        placeholder: "Masalan: 500"
    },
    {
        id: "leadCost",
        question: "Hozirgi bitta lid (so'rov) narxi qancha ($)?",
        type: "number",
        placeholder: "Bilmasangiz 0 qoldiring"
    }
];

let currentStep = 0;
const answers = {};
const stepHistory = [];
const userNameInput = document.getElementById('userName');

function nextStep() {
    if (currentStep === 0) {
        const name = document.getElementById('userName').value;
        if (!name.trim()) {
            alert("Iltimos, ismingizni kiriting.");
            return;
        }
        answers.name = name;
        renderQuestion();
    } else if (currentStep <= questions.length) {
        const question = questions[currentStep - 1];
        const value = getInputValue(question);

        if (value === null || value === "") {
            alert("Iltimos, javobni kiriting yoki tanlang.");
            return;
        }

        answers[question.id] = value;

        if (currentStep < questions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }

    currentStep++;
    updateProgress();
}

function prevStep() {
    if (currentStep <= 1) {
        // Back to welcome screen
        currentStep = 0;
        document.getElementById('step-form').innerHTML = `
            <div class="step active" id="step1">
                <h1 class="glow-text">Marhaban!</h1>
                <p class="subtitle">Biznesingizni yangi bosqichga olib chiqish uchun auditni boshlaymiz.</p>
                
                <div class="input-group">
                    <label for="userName">Ismingiz va Biznesingiz nomi</label>
                    <input type="text" id="userName" value="${answers.name || ''}" placeholder="Masalan: Alisher, 'Tez Ish Top' MCHJ" autocomplete="off">
                </div>
                
                <button class="btn-primary" onclick="nextStep()">Boshlash <span class="arrow">→</span></button>
            </div>
        `;
    } else {
        currentStep -= 2; // Go back two steps because nextStep increments
        renderQuestion();
        currentStep++;
    }
    updateProgress();
}

function renderQuestion() {
    const question = questions[currentStep];
    const formContainer = document.getElementById('step-form');
    let prevValue = answers[question.id] || '';

    let inputHtml = '';
    if (question.type === 'options') {
        inputHtml = `<div class="options-grid">
            ${question.options.map(opt => `<div class="option-card ${prevValue === opt ? 'selected' : ''}" onclick="selectOption(this, '${opt}')">${opt}</div>`).join('')}
        </div>`;
    } else if (question.type === 'select') {
        inputHtml = `<div class="input-group">
            <select id="q-${question.id}">
                ${question.options.map(opt => `<option value="${opt}" ${prevValue === opt ? 'selected' : ''}>${opt}</option>`).join('')}
            </select>
        </div>`;
    } else if (question.type === 'number') {
        inputHtml = `<div class="input-group">
            <input type="number" id="q-${question.id}" value="${prevValue}" placeholder="${question.placeholder}">
        </div>`;
    }

    formContainer.innerHTML = `
        <div class="step active">
            <h2 class="glow-text">${question.question}</h2>
            ${inputHtml}
            <div class="button-group">
                <button class="btn-back" onclick="prevStep()">Orqaga</button>
                <button class="btn-primary" onclick="nextStep()">${currentStep === questions.length - 1 ? 'Natijalarni ko\'rish' : 'Keyingisi'} <span class="arrow">→</span></button>
            </div>
        </div>
    `;
}

function selectOption(el, val) {
    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    el.dataset.value = val;
}

function getInputValue(question) {
    if (question.type === 'options') {
        const selected = document.querySelector('.option-card.selected');
        return selected ? selected.dataset.value : null;
    } else {
        const input = document.getElementById(`q-${question.id}`);
        return input ? input.value : null;
    }
}

function updateProgress() {
    const total = questions.length + 1;
    const percent = (currentStep / total) * 100;
    document.getElementById('progressBar').style.width = `${percent}%`;
    document.getElementById('progressText').innerText = `Savol ${currentStep} / ${total}`;
}

function showResults() {
    document.getElementById('step-form').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('progressContainer').classList.add('hidden');

    const res = calculateAudit();

    document.getElementById('clientSummary').innerText = `${answers.name}, sizning biznesingiz uchun professional audit tayyor.`;
    document.getElementById('resTargetProfit').innerText = `$${Number(answers.targetProfit).toLocaleString()}`;
    document.getElementById('resLeads').innerText = res.neededLeads;
    document.getElementById('resBudget').innerText = `$${Math.round(res.optimalBudget).toLocaleString()}`;
    document.getElementById('resRisk').innerText = res.riskLevel;

    renderChart(res);
    renderRecommendations(res);
}

function calculateAudit() {
    const target = parseFloat(answers.targetProfit);
    const avgCheck = parseFloat(answers.avgCheck);
    const conv = parseFloat(answers.conversion) / 100;

    const neededSales = target / avgCheck;
    const neededLeads = Math.ceil(neededSales / conv);

    // Benchmarks
    let cpl = 1.5; // Default CPL
    if (answers.adPlatform === "Telegram") cpl = 0.8;
    if (answers.adPlatform === "Google Ads") cpl = 2.5;
    if (answers.adPlatform === "Instagram / Facebook") cpl = 1.2;

    let penalty = 1.0;
    let riskPoints = 0;

    if (answers.crm.includes("Yo'q")) {
        penalty += 0.2;
        riskPoints += 40;
    }
    if (answers.salesTeam.includes("Yo'q") || answers.salesTeam.includes("O'zim")) {
        penalty += 0.2;
        riskPoints += 30;
    }
    if (answers.socialMedia === "Yomon / Yo'q" || answers.socialMedia === "O'rtacha") {
        penalty += 0.15;
        riskPoints += 20;
    }

    const minBudget = neededLeads * cpl;
    const optimalBudget = minBudget * penalty;

    let riskLevel = "Past";
    if (riskPoints > 30) riskLevel = "O'rtacha";
    if (riskPoints > 60) riskLevel = "Yuqori";

    return {
        neededLeads,
        neededSales: Math.ceil(neededSales),
        optimalBudget,
        minBudget,
        riskLevel,
        penalty: (penalty - 1) * 100
    };
}

function renderChart(res) {
    const ctx = document.getElementById('auditChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Kerakli Lidlar', 'Loyiq Byudjet ($)', 'Kutilayotgan Sotuv'],
            datasets: [{
                label: 'Audit Ko\'rsatkichlari',
                data: [res.neededLeads, res.optimalBudget, res.neededSales],
                backgroundColor: ['#6366f1', '#a855f7', '#22d3ee'],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { display: false }
            }
        }
    });
}

function renderRecommendations(res) {
    const list = document.getElementById('recommendationList');
    list.innerHTML = "";

    const recs = [];
    if (answers.crm.includes("Yo'q")) {
        recs.push("<strong>CRM tizimi:</strong> AmoCRM yoki Bitrix24 o'rnating. Bu byudjetni 20% tejaydi.");
    }
    if (answers.salesTeam.includes("Yo'q") || answers.salesTeam.includes("O'zim")) {
        recs.push("<strong>Sotuv Menejeri:</strong> Lidlar 'kuyib' ketmasligi uchun alohida sotuvchi yollang.");
    }
    if (res.penalty > 0) {
        recs.push(`<strong>Samaradorlik:</strong> Tizim yo'qligi sababli byudjetingiz ${res.penalty.toFixed(0)}% ga qimmatroq tushmoqda.`);
    }
    recs.push(`<strong>Test:</strong> Reklamani $${(res.optimalBudget * 0.2).toFixed(0)} bilan boshlab, CPL ni aniqlang.`);
    recs.push("<strong>LTV:</strong> Doimiy mijozlar bilan ishlash tizimini yo'lga qo'ying.");

    recs.forEach(r => {
        const li = document.createElement('li');
        li.innerHTML = r;
        list.appendChild(li);
    });
}

function restart() {
    location.reload();
}
