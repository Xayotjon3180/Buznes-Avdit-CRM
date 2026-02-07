// Translation Dictionary
const translations = {
    'UZ': {
        'nav_home': 'Bosh sahifa', 'nav_audit': 'Audit', 'nav_how': 'Qanday ishlaydi?', 'nav_systems': 'Tizimlar', 'nav_contact': 'Bog\'lanish',
        'hero_badge': '💎 Premium Biznes Analitika', 'hero_title': 'Biznesingizning <span class="highlight">Yashirin</span> Potensialini Oching',
        'hero_desc': 'Bizning 3D tahlil tizimimiz orqali marketing, sotuv va moliya jarayonlarini professional darajada audit qiling.',
        'btn_start': 'Auditni Boshlash →', 'btn_details': 'Batafsil ko\'rish',
        'stat_audits': 'Muvaffaqiyatli Audit', 'stat_growth': 'O\'rtacha o\'sish',
        'sys_title': 'Biznes Strukturasi va Tizimlari', 'sys_desc': 'Audit natijasida biz quyidagi tizimlarni biznesingizga joriy qilamiz:',
        'sys_1_t': 'CRM Integratsiyasi', 'sys_1_d': 'Mijozlar bazasini 100% nazorat qilish va sotuv konversiyasini oshirish.',
        'sys_2_t': 'Sotuv Bo\'limi', 'sys_2_d': 'Professional menejerlar va scriptlar asosida ishlaydigan bo\'lim qurish.',
        'sys_3_t': 'Marketing Strategiyasi', 'sys_3_d': 'Target, kontekst va SMM orqali lidlar oqimini barqaror qilish.',
        'footer_about': 'Biznesingizni raqamlar va aniq tahlillar asosida boshqarishingizga yordam beramiz.'
    },
    'RU': {
        'nav_home': 'Главная', 'nav_audit': 'Аудит', 'nav_how': 'Как это работает?', 'nav_systems': 'Системы', 'nav_contact': 'Контакты',
        'hero_badge': '💎 Премиум Бизнес Аналитика', 'hero_title': 'Раскройте <span class="highlight">Скрытый</span> Потенциал Бизнеса',
        'hero_desc': 'Профессиональный аудит маркетинга, продаж и финансов через нашу 3D систему анализа.',
        'btn_start': 'Начать Аудит →', 'btn_details': 'Подробнее',
        'stat_audits': 'Успешных Аудитов', 'stat_growth': 'Средний рост',
        'sys_title': 'Структура и Системы Бизнеса', 'sys_desc': 'По результатам аудита мы внедрим следующие системы:',
        'sys_1_t': 'CRM Интеграция', 'sys_1_d': '100% контроль клиентской базы и рост конверсии продаж.',
        'sys_2_t': 'Отдел Продаж', 'sys_2_d': 'Создание отдела на основе профессиональных менеджеров и скриптов.',
        'sys_3_t': 'Маркетинговая Стратегия', 'sys_3_d': 'Стабильный поток лидов через таргет, контекст и SMM.',
        'footer_about': 'Помогаем управлять бизнесом на основе цифр и точного анализа.'
    },
    'EN': {
        'nav_home': 'Home', 'nav_audit': 'Audit', 'nav_how': 'How it Works?', 'nav_systems': 'Systems', 'nav_contact': 'Contact',
        'hero_badge': '💎 Premium Business Analytics', 'hero_title': 'Unlock Your Business <span class="highlight">Hidden</span> Potential',
        'hero_desc': 'Professional audit of marketing, sales, and finances through our 3D analysis system.',
        'btn_start': 'Start Audit →', 'btn_details': 'View Details',
        'stat_audits': 'Successful Audits', 'stat_growth': 'Average Growth',
        'sys_title': 'Business Structure & Systems', 'sys_desc': 'Based on the audit, we implement the following systems:',
        'sys_1_t': 'CRM Integration', 'sys_1_d': '100% customer base control and sales conversion growth.',
        'sys_2_t': 'Sales Department', 'sys_2_d': 'Building a department based on professional managers and scripts.',
        'sys_3_t': 'Marketing Strategy', 'sys_3_d': 'Stable lead flow through targeting, PPC, and SMM.',
        'footer_about': 'We help you manage your business based on numbers and precise analysis.'
    }
};

let currentLang = 'UZ';

function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-selector span').forEach(s => {
        s.classList.toggle('active', s.innerText === lang);
    });

    // Update all elements with data-tr attribute
    document.querySelectorAll('[data-tr]').forEach(el => {
        const key = el.getAttribute('data-tr');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update questions based on language (this requires questions to be objects with lang versions)
    // For now, we update static parts
}

// PDF Export Mockup
document.querySelector('.btn-pdf')?.addEventListener('click', () => {
    alert("PDF Hisoboti tayyorlanmoqda... \nTez orada yuklab olish havolasi Telegram orqali yuboriladi.");
});

function startAudit() {
    const section = document.getElementById('audit-section');
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
}

const questions = [
    {
        id: "role",
        questions: { 'UZ': "Siz biznesda qanday rolga egasiz?", 'RU': "Какую роль вы занимаете в бизнесе?", 'EN': "What is your role in the business?" },
        type: "options",
        options: {
            'UZ': ["Biznes egasi", "Direktor / Rahbar", "Marketing menejeri", "Sotuv menejeri"],
            'RU': ["Владелец", "Директор / Руководитель", "Маркетолог", "Менеджер по продажам"],
            'EN': ["Business Owner", "Director / Manager", "Marketing Manager", "Sales Manager"]
        }
    },
    {
        id: "crm",
        questions: { 'UZ': "CRM tizimidan foydalanasizmi?", 'RU': "Используете ли вы CRM?", 'EN': "Do you use a CRM system?" },
        type: "options",
        options: {
            'UZ': ["Ha, foydalanamiz", "Yo'q, hali o'rnatmaganmiz"],
            'RU': ["Да, используем", "Нет, еще не установили"],
            'EN': ["Yes, we use one", "No, not yet"]
        }
    },
    {
        id: "salesTeam",
        questions: { 'UZ': "Alohida sotuv bo'limi bormi?", 'RU': "Есть ли отдельный отдел продаж?", 'EN': "Is there a dedicated sales department?" },
        type: "options",
        options: {
            'UZ': ["Ha, bor", "Yo'q, o'zim sotaman"],
            'RU': ["Да, есть", "Нет, продаю сам"],
            'EN': ["Yes, we have one", "No, I sell myself"]
        }
    },
    {
        id: "targetProfit",
        questions: { 'UZ': "Maqsadingiz - oylik sof foyda ($)?", 'RU': "Ваша цель - чистая прибыль в месяц ($)?", 'EN': "Your goal - monthly net profit ($)?" },
        type: "number",
        placeholder: "Masalan: 10000"
    },
    {
        id: "avgCheck",
        questions: { 'UZ': "Mahsulotning o'rtacha cheki ($)?", 'RU': "Средний чек продукта ($)?", 'EN': "Average product check ($)?" },
        type: "number",
        placeholder: "Masalan: 50"
    },
    {
        id: "conversion",
        questions: { 'UZ': "Sotuv konversiyasi (%)?", 'RU': "Конверсия продаж (%)?", 'EN': "Sales conversion (%)?" },
        type: "number",
        placeholder: "Masalan: 20"
    },
    {
        id: "adPlatform",
        questions: { 'UZ': "Asosiy reklama platformangiz?", 'RU': "Основная рекламная платформа?", 'EN': "Main advertising platform?" },
        type: "select",
        options: ["Instagram / Facebook", "Telegram", "Google Ads", "TikTok", "YouTube"]
    }
];

let currentStep = 0;
const answers = {};

// Hero Chart Initialization
function initHeroChart() {
    const canvas = document.getElementById('heroVisualChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Growth',
                data: [15, 40, 35, 75, 98],
                borderColor: '#FFC107',
                backgroundColor: 'rgba(255, 193, 7, 0.15)',
                fill: true,
                tension: 0.5,
                pointRadius: 6,
                pointBackgroundColor: '#FFC107',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94A3B8' } },
                y: { display: false }
            }
        }
    });
}

window.onload = () => {
    initHeroChart();
    setLang('UZ'); // Init UI titles
    renderWelcome();
};

function renderWelcome() {
    const formContainer = document.getElementById('step-form');
    const welcomeTitle = currentLang === 'UZ' ? 'Marhaban!' : (currentLang === 'RU' ? 'Добро пожаловать!' : 'Welcome!');
    const welcomeDesc = currentLang === 'UZ' ? 'Biznesingizni yangi bosqichga olib chiqish uchun auditni boshlaymiz.' : (currentLang === 'RU' ? 'Начнем аудит, чтобы вывести ваш бизнес на новый уровень.' : 'Let\'s start the audit to take your business to the next level.');
    const label = currentLang === 'UZ' ? 'Ismingiz va Biznesingiz nomi' : (currentLang === 'RU' ? 'Ваше имя и название бизнеса' : 'Your name and business name');
    const btn = currentLang === 'UZ' ? 'Boshlash' : (currentLang === 'RU' ? 'Начать' : 'Start');

    formContainer.innerHTML = `
        <div class="step active">
            <h2 class="glow-text">${welcomeTitle}</h2>
            <p class="subtitle" style="margin-bottom: 20px;">${welcomeDesc}</p>
            <div class="input-group">
                <label>${label}</label>
                <input type="text" id="userName" placeholder="Alisher, Elite Audit" autocomplete="off">
            </div>
            <button class="btn-primary" onclick="nextStep()">${btn} <span class="arrow">→</span></button>
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
    const question = questions[currentStep - 1];
    const formContainer = document.getElementById('step-form');
    let prevValue = answers[question.id] || '';

    const questionText = question.questions[currentLang] || question.questions['UZ'];
    const backBtnText = currentLang === 'UZ' ? 'Orqaga' : (currentLang === 'RU' ? 'Назад' : 'Back');
    const nextBtnText = currentStep === questions.length ?
        (currentLang === 'UZ' ? 'Natijalarni ko\'rish' : (currentLang === 'RU' ? 'Посмотреть результаты' : 'View Results')) :
        (currentLang === 'UZ' ? 'Keyingisi' : (currentLang === 'RU' ? 'Далее' : 'Next'));

    let inputHtml = '';
    if (question.type === 'options') {
        const currentOptions = question.options[currentLang] || question.options['UZ'];
        inputHtml = `<div class="options-grid">
            ${currentOptions.map(opt => `<div class="option-card ${prevValue === opt ? 'selected' : ''}" onclick="selectOption(this, '${opt}')">${opt}</div>`).join('')}
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
            <h2 class="glow-text">${questionText}</h2>
            ${inputHtml}
            <div class="button-group">
                <button class="btn-back" onclick="prevStep()">${backBtnText}</button>
                <button class="btn-primary" onclick="nextStep()">${nextBtnText} <span class="arrow">→</span></button>
            </div>
        </div>
    `;
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
