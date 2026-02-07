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

// Hero Chart Initialization
window.onload = () => {
    const ctx = document.getElementById('heroVisualChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Yan', 'Fev', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'O\'sish',
                data: [20, 35, 45, 60, 95],
                borderColor: '#FFC107',
                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#FFC107'
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94A3B8' } },
                y: { display: false }
            }
        }
    });

    // Load initial welcome step
    renderWelcome();
};

function startAudit() {
    const section = document.getElementById('audit-section');
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
}

function renderWelcome() {
    const formContainer = document.getElementById('step-form');
    formContainer.innerHTML = `
        <div class="step active" id="step1">
            <h2 class="glow-text">Marhaban!</h2>
            <p class="subtitle" style="margin-bottom: 20px;">Biznesingizni yangi bosqichga olib chiqish uchun auditni boshlaymiz.</p>
            
            <div class="input-group">
                <label for="userName">Ismingiz va Biznesingiz nomi</label>
                <input type="text" id="userName" placeholder="Masalan: Alisher, 'Tez Ish Top' MCHJ" autocomplete="off">
            </div>
            
            <button class="btn-primary" onclick="nextStep()">Boshlash <span class="arrow">→</span></button>
        </div>
    `;
}

function nextStep() {
    if (currentStep === 0) {
        const nameInput = document.getElementById('userName');
        if (!nameInput || !nameInput.value.trim()) {
            alert("Iltimos, ismingizni kiriting.");
            return;
        }
        answers.name = nameInput.value;
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
        currentStep = 0;
        renderWelcome();
    } else {
        currentStep -= 2;
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
    const total = questions.length;
    const current = currentStep === 0 ? 0 : currentStep;
    const percent = Math.round((current / total) * 100);

    const progressBar = document.getElementById('progressBar');
    const percentText = document.getElementById('percentText');
    const progressText = document.getElementById('progressText');

    if (progressBar) progressBar.style.width = `${percent}%`;
    if (percentText) percentText.innerText = `${percent}%`;
    if (progressText) progressText.innerText = currentStep === 0 ? "Boshlash" : `Savol ${currentStep} / ${total}`;
}

function showResults() {
    const resultsSection = document.getElementById('results');
    const formSection = document.getElementById('step-form');
    const progressWrap = document.getElementById('progressContainer');

    if (formSection) formSection.classList.add('hidden');
    if (resultsSection) resultsSection.classList.remove('hidden');
    if (progressWrap) progressWrap.classList.add('hidden');

    const res = calculateAudit();

    document.getElementById('clientSummary').innerText = `${answers.name}, biznesingiz tahlil qilindi.`;
    document.getElementById('resTargetProfit').innerText = `$${Number(answers.targetProfit).toLocaleString()}`;
    document.getElementById('resLeads').innerText = res.neededLeads.toLocaleString();
    document.getElementById('resBudget').innerText = `$${Math.round(res.optimalBudget).toLocaleString()}`;
    document.getElementById('resRisk').innerText = res.riskLevel;

    renderCharts(res);
    renderRecommendations(res);
}

function renderCharts(res) {
    // 1. Radar Chart (Business Health Score)
    const radarCtx = document.getElementById('radarChart').getContext('2d');

    // Calculate health scores (dummy logic based on answers)
    const scores = [
        answers.crm.includes("Ha") ? 90 : 30, // CRM
        (answers.salesTeam.includes("Ha")) ? 85 : 40, // Sales Team
        (answers.socialMedia === "A'lo") ? 95 : (answers.socialMedia === "Yaxshi" ? 70 : 40), // Marketing
        (parseFloat(answers.conversion) > 20) ? 80 : 50, // Conversion
        (parseFloat(answers.avgCheck) > 100) ? 90 : 60 // Profitability
    ];

    new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: ['CRM', 'Sotuv Bo\'limi', 'Marketing', 'Konversiya', 'Daromad'],
            datasets: [{
                label: 'Sizning Ko\'rsatkichingiz',
                data: scores,
                backgroundColor: 'rgba(255, 193, 7, 0.2)',
                borderColor: '#FFC107',
                pointBackgroundColor: '#FFC107',
                borderWidth: 2
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                r: {
                    angleLines: { color: 'rgba(255,255,255,0.1)' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    pointLabels: { color: '#94A3B8', font: { size: 10 } },
                    ticks: { display: false, stepSize: 20 },
                    max: 100,
                    min: 0
                }
            }
        }
    });

    // 2. Bar Chart (Financial Forecast)
    const barCtx = document.getElementById('auditChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Kerakli Lidlar', 'Loyiq Byudjet ($)', 'Kutilayotgan Sotuv'],
            datasets: [{
                data: [res.neededLeads, res.optimalBudget, res.neededSales],
                backgroundColor: ['#FFC107', '#FFA000', '#FFD54F'],
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8' } },
                x: { grid: { display: false }, ticks: { color: '#94A3B8' } }
            }
        }
    });
}

function calculateAudit() {
    const target = parseFloat(answers.targetProfit) || 0;
    const avgCheck = parseFloat(answers.avgCheck) || 1;
    const conv = (parseFloat(answers.conversion) || 1) / 100;

    const neededSales = target / avgCheck;
    const neededLeads = Math.ceil(neededSales / conv);

    let cpl = 1.5;
    if (answers.adPlatform === "Telegram") cpl = 0.8;
    else if (answers.adPlatform === "Google Ads") cpl = 2.5;
    else if (answers.adPlatform === "Instagram / Facebook") cpl = 1.2;

    let penalty = 1.0;
    let riskPoints = 0;

    if (answers.crm.includes("Yo'q")) { penalty += 0.2; riskPoints += 40; }
    if (answers.salesTeam.includes("Yo'q") || answers.salesTeam.includes("O'zim")) { penalty += 0.2; riskPoints += 30; }
    if (answers.socialMedia === "Yomon / Yo'q") { penalty += 0.15; riskPoints += 20; }

    const optimalBudget = (neededLeads * cpl) * penalty;

    let riskLevel = "Past";
    if (riskPoints > 30) riskLevel = "O'rtacha";
    if (riskPoints > 60) riskLevel = "Yuqori";

    return {
        neededLeads,
        neededSales: Math.ceil(neededSales),
        optimalBudget,
        riskLevel,
        penalty: (penalty - 1) * 100
    };
}

function renderRecommendations(res) {
    const list = document.getElementById('recommendationList');
    if (!list) return;
    list.innerHTML = "";

    const recs = [];
    if (answers.crm.includes("Yo'q")) recs.push("<strong>CRM:</strong> Biznesni avtomatlashtirish orqali yo'qotishlarni 20% ga kamaytiring.");
    if (answers.salesTeam.includes("Yo'q")) recs.push("<strong>Sotuv:</strong> Konversiyani oshirish uchun professional menejerlar yollang.");
    if (res.penalty > 0) recs.push(`<strong>Byudjet:</strong> Tizim yo'qligi sababli $${Math.round(res.optimalBudget * 0.2)} ortiqcha sarflanmoqda.`);
    recs.push("<strong>Strategiya:</strong> Haftalik hisobot tizimini yo'lga qo'ying.");

    recs.forEach(r => {
        const li = document.createElement('li');
        li.innerHTML = r;
        list.appendChild(li);
    });
}

function restart() {
    location.reload();
}

function selectOption(el, val) {
    const parent = el.parentElement;
    parent.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
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

function renderQuestion() {
    const question = questions[currentStep - 1]; // currentStep starts at 1 here
    const formContainer = document.getElementById('step-form');
    if (!formContainer) return;

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
                <button class="btn-primary" onclick="nextStep()">${currentStep === questions.length ? 'Natijalarni ko\'rish' : 'Keyingisi'} <span class="arrow">→</span></button>
            </div>
        </div>
    `;
}
