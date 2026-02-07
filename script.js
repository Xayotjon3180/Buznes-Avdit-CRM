// Translation Dictionary
// Analytics & Visitor Tracking
let stats = JSON.parse(localStorage.getItem('elite_audit_stats')) || {
    visitors: 0,
    audits: 0,
    contacts: 0,
    daily: {}
};

function trackVisit() {
    const today = new Date().toISOString().split('T')[0];
    if (!localStorage.getItem('visited_today')) {
        stats.visitors++;
        stats.daily[today] = (stats.daily[today] || 0) + 1;
        localStorage.setItem('visited_today', 'true');
    }
    saveStats();
    updateAdminUI();
}

function trackContact(type) {
    stats.contacts++;
    saveStats();
    updateAdminUI();
    if (type === 'tg') window.open('https://t.me/Xayotjon_1996', '_blank');
}

function saveStats() {
    localStorage.setItem('elite_audit_stats', JSON.stringify(stats));
}

function updateAdminUI() {
    const adminPanel = document.getElementById('admin-stats');
    if (adminPanel) {
        adminPanel.innerHTML = `
            <div class="stat">Visitors: ${stats.visitors}</div>
            <div class="stat">Audits: ${stats.audits}</div>
            <div class="stat">Contacts: ${stats.contacts}</div>
        `;
    }
    const visitorDisplay = document.getElementById('visitor-count');
    if (visitorDisplay) {
        visitorDisplay.innerText = stats.visitors + 120; // Simulated active + base
    }
}

function toggleAdmin() {
    const panel = document.getElementById('admin-panel');
    panel.classList.toggle('active');
}

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
        'footer_about': 'Biznesingizni raqamlar va aniq tahlillar asosida boshqarishingizga yordam beramiz.',
        'founder_role': '🚀 Marketing va IT Ekspert',
        'founder_desc': '"Ali Invest MChJ" rahbari. Elite Audit tizimi asoschisi. Biznesingizni raqamlashtirish, marketing strategiyasini qurish va sotuvlarni avtomatlashtirish bo\'yicha 5+ yillik tajribaga ega mutaxassis.'
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
        'footer_about': 'Помогаем управлять бизнесом на основе цифр и точного анализа.',
        'founder_role': '🚀 Маркетолог и IT Эксперт',
        'founder_desc': 'Руководитель "Ali Invest MChJ". Основатель системы Elite Audit. Эксперт с 5-летним опытом в цифровизации бизнеса и автоматизации продаж.'
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
        'footer_about': 'We help you manage your business based on numbers and precise analysis.',
        'founder_role': '🚀 Marketing & IT Expert',
        'founder_desc': 'CEO of "Ali Invest MChJ". Founder of Elite Audit. Specialist with 5+ years of experience in business digitalization and sales automation.'
    }
};

let currentLang = 'UZ';

function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-selector span').forEach(s => {
        s.classList.toggle('active', s.innerText === lang);
    });

    document.querySelectorAll('[data-tr]').forEach(el => {
        const key = el.getAttribute('data-tr');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    if (currentStep === 0) renderWelcome();
    else if (currentStep > 0 && currentStep <= questions.length) renderQuestion();
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    document.getElementById('themeBtn').innerText = isLight ? '☀️' : '🌙';
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
        },
        values: ["owner", "manager", "marketing", "sales"]
    },
    {
        id: "crm",
        questions: { 'UZ': "CRM tizimidan foydalanasizmi?", 'RU': "Используете ли вы CRM?", 'EN': "Do you use a CRM system?" },
        type: "options",
        options: {
            'UZ': ["Ha, foydalanamiz", "Yo'q, hali o'rnatmaganmiz"],
            'RU': ["Да, используем", "Нет, еще не установили"],
            'EN': ["Yes, we use one", "No, not yet"]
        },
        values: ["yes", "no"]
    },
    {
        id: "salesTeam",
        questions: { 'UZ': "Alohida sotuv bo'limi bormi?", 'RU': "Есть ли отдельный отдел продаж?", 'EN': "Is there a dedicated sales department?" },
        type: "options",
        options: {
            'UZ': ["Ha, bor", "Yo'q, o'zim sotaman"],
            'RU': ["Да, есть", "Нет, продаю сам"],
            'EN': ["Yes, we have one", "No, I sell myself"]
        },
        values: ["yes", "no"]
    },
    {
        id: "targetProfit",
        questions: { 'UZ': "Maqsadingiz - oylik sof foyda ($)?", 'RU': "Ваша цель - чистая прибыль в месяц ($)?", 'EN': "Your goal - monthly net profit ($)?" },
        type: "number",
        placeholder: "10000"
    },
    {
        id: "avgCheck",
        questions: { 'UZ': "Mahsulotning o'rtacha cheki ($)?", 'RU': "Средний чек продукта ($)?", 'EN': "Average product check ($)?" },
        type: "number",
        placeholder: "50"
    },
    {
        id: "conversion",
        questions: { 'UZ': "Sotuv konversiyasi (%)?", 'RU': "Конверсия продаж (%)?", 'EN': "Sales conversion (%)?" },
        type: "number",
        placeholder: "20"
    },
    {
        id: "adPlatform",
        questions: { 'UZ': "Asosiy reklama platformangiz?", 'RU': "Основная рекламная платформа?", 'EN': "Main advertising platform?" },
        type: "select",
        options: ["Instagram / Facebook", "Telegram", "Google Ads", "TikTok", "YouTube"]
    },
    {
        id: "adBudget",
        questions: { 'UZ': "Hozirgi oylik reklama byudjeti ($)?", 'RU': "Текущий месячный рекламный бюджет ($)?", 'EN': "Current monthly ad budget ($)?" },
        type: "number",
        placeholder: "1000"
    },
    {
        id: "leadCost",
        questions: { 'UZ': "Bitta lid (so'rov) narxi qancha ($)?", 'RU': "Сколько стоит один лид ($)?", 'EN': "How much does one lead cost ($)?" },
        type: "number",
        placeholder: "1.5"
    },
    {
        id: "marketingStrategy",
        questions: { 'UZ': "Marketing strategiyangiz bormi?", 'RU': "Есть ли маркетинговая стратегия?", 'EN': "Do you have a marketing strategy?" },
        type: "options",
        options: {
            'UZ': ["Ha, 1 yillik reja bor", "Faqat reklamaga pul tikamiz"],
            'RU': ["Да, есть план на год", "Только вкладываем в рекламу"],
            'EN': ["Yes, 1-year plan", "We just spend on ads"]
        },
        values: ["yes", "no"]
    },
    {
        id: "automation",
        questions: { 'UZ': "Biznes jarayonlar avtomatlashganmi?", 'RU': "Автоматизированы ли процессы?", 'EN': "Are processes automated?" },
        type: "options",
        options: {
            'UZ': ["Ha, deyarli hammasi", "Hamma narsa qo'lda qilinadi"],
            'RU': ["Да, почти все", "Все делается вручную"],
            'EN': ["Yes, almost everything", "Everything is manual"]
        },
        values: ["yes", "no"]
    },
    {
        id: "future",
        questions: { 'UZ': "6 oydan keyin qayerda bo'lmoqchisiz?", 'RU': "Где вы хотите быть через 6 месяцев?", 'EN': "Where do you want to be in 6 months?" },
        type: "options",
        options: {
            'UZ': ["Bozorni egallash", "Foydani 3 barobar oshirish", "Shunchaki barqarorlik"],
            'RU': ["Захватить рынок", "Увеличить доход в 3 раза", "Просто стабильность"],
            'EN': ["Dominate market", "3x more profit", "Just stability"]
        },
        values: ["dominate", "3x", "stability"]
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
    const welcomeTitle = "ELITE AUDIT"; // Branded title as requested
    const welcomeDesc = currentLang === 'UZ' ? 'Biznesingizni tahlil qilish va SSRM tizimini joriy etishni boshlaymiz.' : (currentLang === 'RU' ? 'Начнем анализ бизнеса и внедрение системы SSRM.' : 'Let\'s start business analysis and SSRM implementation.');
    const label = currentLang === 'UZ' ? 'Ismingiz va Biznesingiz nomi' : (currentLang === 'RU' ? 'Ваше имя и название бизнеса' : 'Your name and business name');
    const btn = currentLang === 'UZ' ? 'Auditni Boshlash →' : (currentLang === 'RU' ? 'Начать Аудит →' : 'Start Audit →');

    formContainer.innerHTML = `
        <div class="step active">
            <h2 class="glow-text main-title">${welcomeTitle}</h2>
            <p class="subtitle" style="margin-bottom: 30px; font-size: 1.2rem;">${welcomeDesc}</p>
            <div class="input-group">
                <label>${label}</label>
                <input type="text" id="userName" placeholder="Alisher, Elite Audit" autocomplete="off">
            </div>
            <button class="btn-primary large" onclick="nextStep()">${btn}</button>
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
            ${currentOptions.map((opt, idx) => `
                <div class="option-card ${prevValue === question.values[idx] ? 'selected' : ''}" 
                     onclick="selectOption(this, '${question.values[idx]}')">
                    ${opt}
                </div>`).join('')}
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
    const radarCtx = document.getElementById('radarChart')?.getContext('2d');
    if (!radarCtx) return;

    const labels = {
        'UZ': ['CRM', 'Sotuv Bo\'limi', 'Marketing', 'Konversiya', 'Daromad'],
        'RU': ['CRM', 'Отдел продаж', 'Маркетинг', 'Конверсия', 'Доход'],
        'EN': ['CRM', 'Sales Dept', 'Marketing', 'Conversion', 'Profit']
    };

    const datasetsLabels = {
        'UZ': 'Sizning Ko\'rsatkichingiz',
        'RU': 'Ваш показатель',
        'EN': 'Your Metrics'
    };

    // Calculate health scores
    const scores = [
        answers.crm === "yes" ? 95 : 30,
        answers.salesTeam === "yes" ? 90 : 40,
        answers.marketingStrategy === "yes" ? 95 : 50,
        (parseFloat(answers.conversion) > 15) ? 85 : 45,
        answers.automation === "yes" ? 95 : 35
    ];

    new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: labels[currentLang],
            datasets: [{
                label: datasetsLabels[currentLang],
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
                    pointLabels: { color: '#94A3B8', font: { size: 11 } },
                    ticks: { display: false, stepSize: 20 },
                    max: 100,
                    min: 0
                }
            }
        }
    });

    // 2. Bar Chart (Financial Forecast)
    const barLabels = {
        'UZ': ['Kerakli Lidlar', 'Loyiq Byudjet ($)', 'Kutilayotgan Sotuv'],
        'RU': ['Нужные Лиды', 'Оптим. Бюджет ($)', 'Ожид. Продажи'],
        'EN': ['Required Leads', 'Optimal Budget ($)', 'Expected Sales']
    };

    const barCtx = document.getElementById('auditChart')?.getContext('2d');
    if (!barCtx) return;

    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: barLabels[currentLang],
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

    let cpl = parseFloat(answers.leadCost) || 1.5;

    let penalty = 1.0;
    let riskPoints = 0;

    if (answers.crm === "no") { penalty += 0.25; riskPoints += 40; }
    if (answers.salesTeam === "no") { penalty += 0.2; riskPoints += 30; }
    if (answers.automation === "no") { penalty += 0.15; riskPoints += 20; }
    if (answers.marketingStrategy === "no") { penalty += 0.2; riskPoints += 25; }

    const optimalBudget = (neededLeads * cpl) * penalty;

    let riskLevel = "Low";
    if (riskPoints > 40) riskLevel = "Medium";
    if (riskPoints > 70) riskLevel = "High";

    const riskMap = {
        'UZ': { 'Low': 'Past', 'Medium': 'O\'rtacha', 'High': 'Yuqori' },
        'RU': { 'Low': 'Низкий', 'Medium': 'Средний', 'High': 'Высокий' },
        'EN': { 'Low': 'Low', 'Medium': 'Medium', 'High': 'High' }
    };

    // Increment Stats
    stats.audits++;
    saveStats();
    updateAdminUI();

    return {
        neededLeads,
        neededSales: Math.ceil(neededSales),
        optimalBudget,
        riskLevel: riskMap[currentLang][riskLevel],
        penalty: (penalty - 1) * 100
    };
}

function renderRecommendations(res) {
    const list = document.getElementById('recommendationList');
    const benefitSection = document.getElementById('benefit-content');
    if (!list) return;
    list.innerHTML = "";

    const recs = {
        'UZ': [
            "<strong>CRM:</strong> Sotuv jarayonini 100% nazoratga olish va mijoz yo'qotishni to'xtatish.",
            "<strong>Sotuv Bo'limi:</strong> Menejerlar uchun aniq KPI va tizimli scriptlar joriy etish.",
            "<strong>Marketing:</strong> Lidlar narxini optimal darajaga tushirish va lid oqimini barqaror qilish."
        ],
        'RU': [
            "<strong>CRM:</strong> 100% контроль воронки продаж и остановка потери клиентов.",
            "<strong>Отдел продаж:</strong> Внедрение четких KPI и скриптов для менеджеров.",
            "<strong>Маркетинг:</strong> Оптимизация цены лида и обеспечение регулярного потока."
        ],
        'EN': [
            "<strong>CRM:</strong> 100% sales funnel control and stopping lead leakage.",
            "<strong>Sales Dept:</strong> Implementing clear KPIs and scripts for managers.",
            "<strong>Marketing:</strong> Lead cost optimization and stable traffic flow."
        ]
    };

    const benefits = {
        'UZ': `
            <div class="benefit-card">
                <h5>🏆 Nima yutasiz?</h5>
                <p>Biznesingizda tartib va tizim o'rnatiladi. SSRM tizimi orqali har bir so'm reklama pullari nazorat qilinadi. Sof foydangiz kamida 2-3 barobar o'sishi uchun poydevor yaratiladi.</p>
            </div>
        `,
        'RU': `
            <div class="benefit-card">
                <h5>🏆 Что вы получите?</h5>
                <p>В бизнесе будет наведен полный порядок. Через систему SSRM каждый сум рекламного бюджета будет под контролем. Создастся фундамент для роста прибыли в 2-3 раза.</p>
            </div>
        `,
        'EN': `
            <div class="benefit-card">
                <h5>🏆 What will you gain?</h5>
                <p>Full order and system in your business. Every cent of ad spend will be tracked via SSRM. A foundation for 2-3x profit growth will be established.</p>
            </div>
        `
    };

    recs[currentLang].forEach(r => {
        const li = document.createElement('li');
        li.innerHTML = r;
        list.appendChild(li);
    });

    if (benefitSection) {
        benefitSection.innerHTML = benefits[currentLang];
    }
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
