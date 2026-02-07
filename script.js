// Analytics & Visitor Tracking
let stats = JSON.parse(localStorage.getItem('elite_audit_stats')) || {
    visitors: 0,
    audits: 0,
    contacts: 0,
    daily: {}
};

function trackVisit() {
    const today = new Date().toISOString().split('T')[0];
    stats.visitors++;
    stats.daily[today] = (stats.daily[today] || 0) + 1;
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
        visitorDisplay.innerText = stats.visitors + 120;
    }
}

function toggleAdmin() {
    const panel = document.getElementById('admin-panel');
    panel?.classList.toggle('active');
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
let currentStep = 0;
const answers = {};

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
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) themeBtn.innerText = isLight ? '☀️' : '🌙';
}

function startAudit() {
    const section = document.getElementById('audit-section');
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });
    }
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
            'UZ': ["Ha, 1 yillik reja bor", "Yo'q, faqat reklama"],
            'RU': ["Да, есть план на год", "Нет, только реклама"],
            'EN': ["Yes, 1-year plan", "No, just ads"]
        },
        values: ["yes", "no"]
    },
    {
        id: "automation",
        questions: { 'UZ': "Biznes jarayonlar avtomatlashganmi?", 'RU': "Автоматизированы ли процессы?", 'EN': "Are processes automated?" },
        type: "options",
        options: {
            'UZ': ["Ha, deyarli hammasi", "Yo'q, qo'lda"],
            'RU': ["Да, почти все", "Нет, вручную"],
            'EN': ["Yes, almost everything", "No, manually"]
        },
        values: ["yes", "no"]
    }
];

function renderWelcome() {
    const formContainer = document.getElementById('step-form');
    if (!formContainer) return;

    const welcomeTitle = "ELITE AUDIT TIZIMI";
    const welcomeDesc = currentLang === 'UZ' ? 'Biznesingizni raqamli tahlil qilish uchun ma\'lumotlarni kiriting.' : (currentLang === 'RU' ? 'Введите данные для цифрового анализа вашего бизнеса.' : 'Enter your details for digital business analysis.');

    const labels = {
        'UZ': ['Ismingiz', 'Biznesingiz nomi', 'Faoliyat turi'],
        'RU': ['Ваше имя', 'Название бизнеса', 'Вид деятельности'],
        'EN': ['Your name', 'Business name', 'Activity type']
    };

    const btn = currentLang === 'UZ' ? 'Auditni Boshlash →' : (currentLang === 'RU' ? 'Начать Аудит →' : 'Start Audit →');

    formContainer.innerHTML = `
        <div class="step active welcome-step">
            <h1 class="main-title">${welcomeTitle}</h1>
            <p class="subtitle">${welcomeDesc}</p>
            
            <div class="registration-form">
                <div class="input-group">
                    <label>${labels[currentLang][0]}</label>
                    <input type="text" id="userName" placeholder="Alisher" value="${answers.userName || ''}">
                </div>
                <div class="input-group">
                    <label>${labels[currentLang][1]}</label>
                    <input type="text" id="businessName" placeholder="Elite Marketing" value="${answers.businessName || ''}">
                </div>
                <div class="input-group">
                    <label>${labels[currentLang][2]}</label>
                    <select id="businessType">
                        <option value="service">Xizmat ko'rsatish</option>
                        <option value="trade">Savdo / Sotuv</option>
                        <option value="production">Ishlab chiqarish</option>
                        <option value="education">Ta'lim / Kurslar</option>
                    </select>
                </div>
            </div>
            
            <button class="btn-primary large" onclick="nextStep()">${btn}</button>
        </div>
    `;
}

function nextStep() {
    if (currentStep === 0) {
        const uName = document.getElementById('userName')?.value.trim();
        const bName = document.getElementById('businessName')?.value.trim();
        const bType = document.getElementById('businessType')?.value;

        if (!uName || !bName) {
            alert("Iltimos, barcha maydonlarni to'ldiring.");
            return;
        }

        answers.userName = uName;
        answers.name = uName;
        answers.businessName = bName;
        answers.businessType = bType;
    } else {
        const question = questions[currentStep - 1];
        const value = getInputValue(question);

        if (!value) {
            alert("Iltimos, javobni tanlang yoki kiriting.");
            return;
        }

        answers[question.id] = value;
    }

    currentStep++;

    if (currentStep <= questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
    updateProgress();
}

function prevStep() {
    currentStep--;
    if (currentStep < 0) currentStep = 0;

    if (currentStep === 0) {
        renderWelcome();
    } else {
        renderQuestion();
    }
    updateProgress();
}

function renderQuestion() {
    const question = questions[currentStep - 1];
    const formContainer = document.getElementById('step-form');
    if (!formContainer || !question) return;

    let prevValue = answers[question.id] || '';
    const questionText = question.questions[currentLang] || question.questions['UZ'];
    const backBtnText = currentLang === 'UZ' ? 'Orqaga' : (currentLang === 'RU' ? 'Назад' : 'Back');
    const nextBtnText = currentStep === questions.length ? 'Natijalarni ko\'rish' : 'Keyingisi';

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
    parent?.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
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

    formSection?.classList.add('hidden');
    resultsSection?.classList.remove('hidden');
    progressWrap?.classList.add('hidden');

    const res = calculateAudit();

    const clientSummary = document.getElementById('clientSummary');
    if (clientSummary) clientSummary.innerText = `${answers.name}, biznesingiz tahlil qilindi.`;

    const resTarget = document.getElementById('resTargetProfit');
    if (resTarget) resTarget.innerText = `$${Number(answers.targetProfit).toLocaleString()}`;

    document.getElementById('resLeads').innerText = res.neededLeads.toLocaleString();
    document.getElementById('resBudget').innerText = `$${Math.round(res.optimalBudget).toLocaleString()}`;
    document.getElementById('resRisk').innerText = res.riskLevel;

    renderCharts(res);
    renderRecommendations(res);
}

function calculateAudit() {
    const target = parseFloat(answers.targetProfit) || 0;
    const avgCheck = parseFloat(answers.avgCheck) || 1;
    const conv = (parseFloat(answers.conversion) || 1) / 100;

    const neededSales = target / avgCheck;
    const neededLeads = Math.ceil(neededSales / conv);
    const cpl = parseFloat(answers.leadCost) || 1.5;

    let penalty = 1.0;
    let riskPoints = 0;

    if (answers.crm === "no") { penalty += 0.25; riskPoints += 40; }
    if (answers.salesTeam === "no") { penalty += 0.2; riskPoints += 30; }
    if (answers.marketingStrategy === "no") { penalty += 0.2; riskPoints += 25; }
    if (answers.automation === "no") { penalty += 0.15; riskPoints += 20; }

    const optimalBudget = (neededLeads * cpl) * penalty;

    let riskLevel = "Low";
    if (riskPoints > 40) riskLevel = "Medium";
    if (riskPoints > 70) riskLevel = "High";

    const riskMap = {
        'UZ': { 'Low': 'Past', 'Medium': 'O\'rtacha', 'High': 'Yuqori' },
        'RU': { 'Low': 'Низкий', 'Medium': 'Средний', 'High': 'Высокий' },
        'EN': { 'Low': 'Low', 'Medium': 'Medium', 'High': 'High' }
    };

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

function renderCharts(res) {
    const radarCtx = document.getElementById('radarChart')?.getContext('2d');
    if (radarCtx) {
        new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['CRM', 'Sotuv', 'Marketing', 'Konversiya', 'Avtomat'],
                datasets: [{
                    label: 'Health Score',
                    data: [
                        answers.crm === "yes" ? 95 : 30,
                        answers.salesTeam === "yes" ? 90 : 40,
                        answers.marketingStrategy === "yes" ? 95 : 45,
                        (parseFloat(answers.conversion) > 15) ? 90 : 50,
                        answers.automation === "yes" ? 95 : 35
                    ],
                    backgroundColor: 'rgba(255, 193, 7, 0.2)',
                    borderColor: '#FFC107',
                    borderWidth: 2
                }]
            },
            options: { scales: { r: { ticks: { display: false }, max: 100, min: 0 } } }
        });
    }

    const barCtx = document.getElementById('auditChart')?.getContext('2d');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Lidlar', 'Byudjet', 'Sotuv'],
                datasets: [{
                    data: [res.neededLeads, res.optimalBudget, res.neededSales],
                    backgroundColor: ['#FFC107', '#FFA000', '#FFD54F']
                }]
            },
            options: { plugins: { legend: { display: false } } }
        });
    }
}

function renderRecommendations(res) {
    const list = document.getElementById('recommendationList');
    const benefitSection = document.getElementById('benefit-content');
    if (!list) return;

    list.innerHTML = `
        <li><strong>CRM:</strong> Sotuv jarayonini 100% nazoratga oling.</li>
        <li><strong>Sotuv:</strong> Menejerlar uchun aniq KPI o'rnating.</li>
        <li><strong>Marketing:</strong> Lidlar narxini optimal darajaga tushiring.</li>
    `;

    if (benefitSection) {
        benefitSection.innerHTML = `
            <div class="benefit-card">
                <h5>🏆 Nima yutasiz?</h5>
                <p>Biznesingizda tartib o'rnatiladi va foydangiz 2-3 barobargacha o'sadi.</p>
            </div>
        `;
    }
}

function restart() {
    location.reload();
}

window.onload = () => {
    trackVisit();
    setLang('UZ');
    renderWelcome();

    if (!localStorage.getItem('audit_auto_started')) {
        setTimeout(() => {
            startAudit();
            localStorage.setItem('audit_auto_started', 'true');
        }, 2000);
    }
};
