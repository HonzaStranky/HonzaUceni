// ============================================
// APP CONTROLLER - Unified navigation for all subjects
// ============================================

let isTeacher = false;
let currentSubject = '';   // 'math','czech','en','civics','nature','geography','history'
let currentGrade = '';
let teacherQuestions = [{q: '', a: '', h: 'Přelož:'}];
let pendingQuestions = [];
let pendingSubject = '';
let pendingTopic = '';

// ===== SCREEN MANAGEMENT =====
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
    const screen = document.getElementById(id);
    if (screen) {
        screen.classList.add('active-screen');
        screen.style.animation = 'none';
        screen.offsetHeight;
        screen.style.animation = '';
    }
    Audio.click();
    
    if (id === 'stats-screen') Stats.renderStats();
    if (id === 'achievements-screen') Achievements.renderFull('achievements-full');
    if (id === 'main-menu') {
        Stats.updateTopBar();
        Stats.renderRecentActivity();
        Achievements.renderMini('achievements-mini');
    }
}

function goHome() {
    clearInterval(Game.getState().timerInterval);
    clearInterval(Game.getState().speedInterval);
    showScreen('main-menu');
}

// ===== TOAST =====
function showToast(text) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = text;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ===== DARK MODE =====
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('honza_dark', isDark ? 'on' : 'off');
    const icon = document.querySelector('#dark-mode-toggle i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    if (document.getElementById('stats-screen').classList.contains('active-screen')) {
        Stats.renderAccuracyChart();
        Stats.renderSubjectChart();
    }
}

function initDarkMode() {
    if (localStorage.getItem('honza_dark') === 'on') {
        document.body.classList.add('dark');
        const icon = document.querySelector('#dark-mode-toggle i');
        if (icon) icon.className = 'fas fa-sun';
    }
}

// ===== SOUND =====
function toggleSound() { Audio.toggle(); }

// ===== LOGIN =====
function login() {
    const name = document.getElementById('login-name').value;
    const pass = document.getElementById('login-pass').value;
    if (name === 'Honza' && pass === 'Honza98') {
        isTeacher = true;
        document.getElementById('login-msg').textContent = 'Vítej, pane učiteli! ✅';
        document.getElementById('login-msg').className = 'message win';
        Audio.correct();
        setTimeout(() => showScreen('main-menu'), 1000);
    } else {
        document.getElementById('login-msg').textContent = 'Chybné údaje ❌';
        document.getElementById('login-msg').className = 'message error';
        Audio.wrong();
    }
}

// ===== UNIFIED SUBJECT → GRADE NAVIGATION =====
function selectSubject(subjectKey) {
    currentSubject = subjectKey;
    
    // Build grade cards dynamically
    const gradesGrid = document.getElementById('grades-grid');
    gradesGrid.innerHTML = '';
    
    const subjectInfo = SUBJECTS[subjectKey];
    const gradeTopics = GRADE_TOPICS[subjectKey];
    
    if (!gradeTopics) {
        showToast('⚠️ Předmět ještě nemá data!');
        return;
    }
    
    // Update header
    document.getElementById('grades-title').textContent = `${subjectInfo.name} – Vyber třídu 🎒`;
    
    const grades = Object.keys(gradeTopics).sort((a, b) => parseInt(a) - parseInt(b));
    
    grades.forEach(g => {
        const btn = document.createElement('button');
        btn.className = 'card grade-card';
        btn.style.borderColor = subjectInfo.color;
        btn.style.setProperty('--card-accent', subjectInfo.color);
        
        // Count completed topics for this grade
        const topics = gradeTopics[g] || [];
        const history = Stats.getHistory();
        const completedCount = topics.filter(t => 
            history.some(h => h.topic === t && h.accuracy >= 70)
        ).length;
        
        btn.innerHTML = `
            <div class="card-icon" style="color:${subjectInfo.color}">${g}</div>
            <div class="card-label">${g}. Třída</div>
            <div class="grade-progress-text">${completedCount}/${topics.length} ✅</div>
        `;
        btn.onclick = () => selectGrade(g);
        gradesGrid.appendChild(btn);
    });
    
    showScreen('grades-screen');
}

// ===== GRADE → TOPIC NAVIGATION =====
function selectGrade(grade) {
    currentGrade = grade;
    const list = document.getElementById('topic-list');
    list.innerHTML = '';
    
    const subjectInfo = SUBJECTS[currentSubject];
    document.getElementById('topics-title').textContent = `${subjectInfo.name} – ${grade}. Třída`;
    
    const topics = GRADE_TOPICS[currentSubject]?.[grade] || [];
    const history = Stats.getHistory();
    
    topics.forEach(t => {
        const div = document.createElement('div');
        div.className = 'sub-item';
        div.style.borderColor = subjectInfo.color;
        const name = TOPIC_NAMES[t] || t;
        const completed = history.some(h => h.topic === t && h.accuracy >= 70);
        
        div.innerHTML = `${name} ${completed ? '<span class="topic-check">✅</span>' : ''}`;
        div.onclick = () => {
            const questionData = DATA[t];
            if (!questionData || questionData.length === 0) {
                showToast('⚠️ Toto téma ještě nemá otázky!');
                return;
            }
            pendingQuestions = questionData;
            pendingSubject = currentSubject;
            pendingTopic = t;
            showModeSelect();
        };
        list.appendChild(div);
    });
    
    // Custom exercises for this grade
    renderMyExercises(grade);
    
    // Teacher add button
    if (isTeacher) {
        const div = document.createElement('div');
        div.className = 'sub-item';
        div.style.borderColor = 'var(--secondary)';
        div.style.color = 'var(--secondary)';
        div.textContent = '⚙️ VYTVOŘIT VLASTNÍ';
        div.onclick = () => {
            teacherQuestions = [{q: '', a: '', h: 'Zadání:'}];
            document.getElementById('lesson-name-input').value = '';
            renderEditor();
            showScreen('custom-create');
        };
        list.appendChild(div);
    }
    
    showScreen('topics-screen');
}

function renderMyExercises(grade) {
    const section = document.getElementById('my-exercises-section');
    const list = document.getElementById('my-exercises-list');
    const savedLessons = JSON.parse(localStorage.getItem(`my_exercises_${currentSubject}_${grade}`)) || [];
    
    if (savedLessons.length > 0) {
        section.style.display = 'block';
        list.innerHTML = '';
        savedLessons.forEach(lesson => {
            const div = document.createElement('div');
            div.className = 'sub-item';
            div.style.borderColor = 'var(--warning)';
            div.style.color = 'var(--warning)';
            div.textContent = '⭐ ' + lesson.name;
            div.onclick = () => {
                pendingQuestions = lesson.questions;
                pendingSubject = 'teacher';
                pendingTopic = lesson.name;
                showModeSelect();
            };
            list.appendChild(div);
        });
    } else {
        section.style.display = 'none';
    }
}

// ===== MODE SELECTION =====
function showModeSelect() {
    showScreen('mode-select');
}

function selectMode(gameMode) {
    Audio.click();
    Game.setup(gameMode, pendingSubject, pendingTopic, pendingQuestions);
}

// ===== GAME ACTIONS (wired from HTML) =====
function checkAnswer() { Game.checkTypingAnswer(); }
function showHint() { Game.showTypingHint(); }
function skipQuestion() { Game.skipTypingQuestion(); }
function flipCard() { Game.flipCard(); }
function flashRate(known) { Game.flashRate(known); }

// ===== ROUND COMPLETE ACTIONS =====
function replayRound() {
    Audio.click();
    Game.setup(Game.getState().mode, pendingSubject, pendingTopic, pendingQuestions);
}

function practiceWrong() {
    const wrongOnes = Game.getState().wrongAnswers;
    if (wrongOnes.length > 0) {
        Audio.click();
        Game.setup(Game.getState().mode, pendingSubject, pendingTopic, wrongOnes);
    }
}

// ===== EDITOR =====
function renderEditor() {
    const container = document.getElementById('custom-list');
    container.innerHTML = '';
    teacherQuestions.forEach((item, i) => {
        const row = document.createElement('div');
        row.className = 'q-row';
        row.innerHTML = `
            <span>${i + 1}.</span>
            <input placeholder="Zadání" value="${item.q}" oninput="teacherQuestions[${i}].q = this.value">
            <input placeholder="Odpověď" value="${item.a}" oninput="teacherQuestions[${i}].a = this.value">
            <input placeholder="Hint" value="${item.h}" oninput="teacherQuestions[${i}].h = this.value">
        `;
        container.appendChild(row);
    });
}

function addQuestion() {
    teacherQuestions.push({q: '', a: '', h: 'Zadání:'});
    renderEditor();
    Audio.click();
}

function removeQuestion() {
    if (teacherQuestions.length > 1) teacherQuestions.pop();
    renderEditor();
    Audio.click();
}

function saveAndPlay() {
    const name = document.getElementById('lesson-name-input').value || 'Vlastní lekce';
    const valid = teacherQuestions.filter(q => q.q && q.a);
    if (valid.length === 0) {
        showToast('⚠️ Přidej aspoň jednu otázku s odpovědí!');
        return;
    }
    
    let savedLessons = JSON.parse(localStorage.getItem(`my_exercises_${currentSubject}_${currentGrade}`)) || [];
    savedLessons.push({ name, questions: [...valid] });
    localStorage.setItem(`my_exercises_${currentSubject}_${currentGrade}`, JSON.stringify(savedLessons));
    
    pendingQuestions = valid;
    pendingSubject = 'teacher';
    pendingTopic = name;
    showToast('✅ Lekce uložena!');
    showModeSelect();
}

// ===== BACK BUTTONS =====
function goBackFromGame() {
    clearInterval(Game.getState().timerInterval);
    clearInterval(Game.getState().speedInterval);
    Game.getState().isSpeedActive = false;
    selectGrade(currentGrade);
}

document.getElementById('game-back-btn').onclick = goBackFromGame;
document.getElementById('choice-back-btn').onclick = goBackFromGame;
document.getElementById('flash-back-btn').onclick = goBackFromGame;
document.getElementById('speed-back-btn').onclick = goBackFromGame;

document.getElementById('mode-back-btn').onclick = () => {
    selectGrade(currentGrade);
};

document.getElementById('grades-back-btn').onclick = () => {
    showScreen('main-menu');
};

document.getElementById('topics-back-btn').onclick = () => {
    selectSubject(currentSubject);
};

// ===== ACHIEVEMENTS LINK =====
document.querySelector('.achievements-preview h3').onclick = () => showScreen('achievements-screen');

// ===== INIT =====
function init() {
    initDarkMode();
    Audio.init();
    Stats.updateTopBar();
    Stats.renderRecentActivity();
    Achievements.renderMini('achievements-mini');
}

init();
