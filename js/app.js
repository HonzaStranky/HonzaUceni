// ============================================
// APP CONTROLLER - Unified navigation for all subjects
// ============================================

let isTeacher = false;
let loggedInTeacher = '';   // username of logged in teacher
let currentSubject = '';   // 'math','czech','en','civics','nature','geography','history'
let currentGrade = '';
let teacherQuestions = [{q: '', a: '', h: 'Přelož:'}];
let pendingQuestions = [];
let pendingSubject = '';
let pendingTopic = '';

// ===== TEACHER AUTH HELPERS =====
function updateEmailPreview(val) {
    const clean = val.trim().toLowerCase().replace(/\s+/g, '_') || '?';
    document.getElementById('email-user-display').textContent = clean;
    document.getElementById('login-email-full').textContent = clean + '@honzauceni.fake.cz';
}

function updateTeacherUI() {
    const btn = document.getElementById('teacher-login-btn');
    const label = document.getElementById('teacher-btn-label');
    const bar = document.getElementById('login-logged-in-bar');
    const userText = document.getElementById('login-current-user-text');
    if (isTeacher && loggedInTeacher) {
        if (label) label.textContent = loggedInTeacher;
        if (btn) btn.classList.add('teacher-logged-in');
        if (bar) bar.style.display = 'flex';
        if (userText) userText.textContent = '✅ Přihlášen jako ' + loggedInTeacher + '@honzauceni.fake.cz';
    } else {
        if (label) label.textContent = 'Login';
        if (btn) btn.classList.remove('teacher-logged-in');
        if (bar) bar.style.display = 'none';
    }
}

function logout() {
    isTeacher = false;
    loggedInTeacher = '';
    localStorage.removeItem('honza_teacher_session');
    updateTeacherUI();
    showToast('👋 Odhlášen');
    showScreen('main-menu');
}

// ===== COURSE SHARE/EXPORT/IMPORT =====
function generateCourseCode() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 7; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
}

function openShareScreen() {
    // Populate export list for current teacher's lessons
    const exportList = document.getElementById('export-list');
    exportList.innerHTML = '';
    document.getElementById('import-msg').textContent = '';
    
    const allKeys = Object.keys(localStorage).filter(k => k.startsWith(`my_exercises_`) && k.includes(`_owner_${loggedInTeacher}`));
    
    // Get all saved lessons by this teacher
    const teacherLessons = [];
    for (let grade = 4; grade <= 9; grade++) {
        Object.keys(SUBJECTS).forEach(subj => {
            const key = `my_exercises_${subj}_${grade}_owner_${loggedInTeacher}`;
            const lessons = JSON.parse(localStorage.getItem(key) || '[]');
            lessons.forEach(l => teacherLessons.push({ lesson: l, grade, subj }));
        });
    }
    
    if (teacherLessons.length === 0) {
        exportList.innerHTML = '<p style="color:var(--text-light);font-size:14px;">Nemáš žádná cvičení k exportu.</p>';
    } else {
        teacherLessons.forEach(({ lesson, grade, subj }) => {
            const div = document.createElement('div');
            div.className = 'export-row';
            // Generate or retrieve persistent code for this lesson
            const codeKey = `course_code_${lesson.code || ''}`;
            div.innerHTML = `
                <span class="export-name">⭐ ${lesson.name} <small>(${SUBJECTS[subj]?.name || subj}, ${grade}. třída)</small></span>
                <span class="export-code">${lesson.code || '—'}</span>
                ${!lesson.code ? `<button class="btn-sm btn-primary" onclick="generateExportCode('${subj}','${grade}','${lesson.name}')"><i class="fas fa-key"></i> Generovat kód</button>` : '<span class="code-done">✅ Kód aktivní</span>'}
            `;
            exportList.appendChild(div);
        });
    }
    
    showScreen('share-screen');
}

function generateExportCode(subj, grade, lessonName) {
    const key = `my_exercises_${subj}_${grade}_owner_${loggedInTeacher}`;
    let lessons = JSON.parse(localStorage.getItem(key) || '[]');
    const idx = lessons.findIndex(l => l.name === lessonName);
    if (idx === -1) return;
    
    const code = generateCourseCode();
    lessons[idx].code = code;
    localStorage.setItem(key, JSON.stringify(lessons));
    
    // Also store code → lesson mapping globally
    const codeIndex = JSON.parse(localStorage.getItem('honza_course_codes') || '{}');
    codeIndex[code] = { subj, grade: parseInt(grade), lessonName, owner: loggedInTeacher, ownerKey: key };
    localStorage.setItem('honza_course_codes', JSON.stringify(codeIndex));
    
    showToast(`✅ Kód vygenerován: ${code}`);
    openShareScreen(); // refresh
}

function importCourse() {
    const code = document.getElementById('import-code-input').value.trim().toLowerCase();
    const msg = document.getElementById('import-msg');
    if (!code) { msg.textContent = '⚠️ Zadej kód!'; msg.className = 'message error'; return; }
    
    const codeIndex = JSON.parse(localStorage.getItem('honza_course_codes') || '{}');
    const entry = codeIndex[code];
    if (!entry) {
        msg.textContent = '❌ Kód nenalezen. Zkontroluj kód od učitele.';
        msg.className = 'message error';
        return;
    }
    
    // Get the original lesson
    const sourceKey = entry.ownerKey;
    const sourceLessons = JSON.parse(localStorage.getItem(sourceKey) || '[]');
    const lesson = sourceLessons.find(l => l.name === entry.lessonName);
    if (!lesson) {
        msg.textContent = '❌ Kurz již neexistuje.';
        msg.className = 'message error';
        return;
    }
    
    // Check not already imported
    const importKey = `honza_imported_courses`;
    let imported = JSON.parse(localStorage.getItem(importKey) || '[]');
    if (imported.find(i => i.code === code)) {
        msg.textContent = '⚠️ Tento kurz už máš importovaný!';
        msg.className = 'message error';
        return;
    }
    
    imported.push({ code, name: lesson.name, questions: lesson.questions, subj: entry.subj, grade: entry.grade, owner: entry.owner });
    localStorage.setItem(importKey, JSON.stringify(imported));
    
    msg.textContent = `✅ Kurz "${lesson.name}" byl importován!`;
    msg.className = 'message win';
    Audio.correct && Audio.correct();
    showToast(`📥 Kurz "${lesson.name}" přidán!`);
    document.getElementById('import-code-input').value = '';
}

// ===== SCREEN MANAGEMENT =====
function openFullscreen() {
    const elem = document.documentElement; // Celá stránka
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
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
    const name = document.getElementById('login-name').value.trim();
    const pass = document.getElementById('login-pass').value;
    if (name === 'Honza' && pass === 'Honza98') {
        isTeacher = true;
        loggedInTeacher = name;
        localStorage.setItem('honza_teacher_session', name);
        document.getElementById('login-msg').textContent = `✅ Vítej, ${name}@honzauceni.fake.cz!`;
        document.getElementById('login-msg').className = 'message win';
        Audio.correct();
        updateTeacherUI();
        setTimeout(() => showScreen('main-menu'), 1000);
    } else {
        document.getElementById('login-msg').textContent = 'Chybné přihlašovací údaje ❌';
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
    const importedSection = document.getElementById('imported-exercises-section');
    const importedList = document.getElementById('imported-exercises-list');

    // Teacher's own lessons — only visible when logged in as that teacher
    if (isTeacher && loggedInTeacher) {
        const key = `my_exercises_${currentSubject}_${grade}_owner_${loggedInTeacher}`;
        const savedLessons = JSON.parse(localStorage.getItem(key) || '[]');
        if (savedLessons.length > 0) {
            section.style.display = 'block';
            list.innerHTML = '';
            savedLessons.forEach(lesson => {
                const div = document.createElement('div');
                div.className = 'sub-item';
                div.style.borderColor = 'var(--warning)';
                div.style.color = 'var(--warning)';
                div.innerHTML = `⭐ ${lesson.name} ${lesson.code ? `<span class="lesson-code-badge">${lesson.code}</span>` : ''}`;
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
    } else {
        section.style.display = 'none';
    }

    // Imported lessons — visible to everyone
    const allImported = JSON.parse(localStorage.getItem('honza_imported_courses') || '[]');
    const relevantImported = allImported.filter(i => i.subj === currentSubject && i.grade == grade);
    if (relevantImported.length > 0) {
        importedSection.style.display = 'block';
        importedList.innerHTML = '';
        relevantImported.forEach(lesson => {
            const div = document.createElement('div');
            div.className = 'sub-item';
            div.style.borderColor = '#00B4D8';
            div.innerHTML = `📥 ${lesson.name} <small style="opacity:.6">od ${lesson.owner}</small>`;
            div.onclick = () => {
                pendingQuestions = lesson.questions;
                pendingSubject = 'imported';
                pendingTopic = lesson.name;
                showModeSelect();
            };
            importedList.appendChild(div);
        });
    } else {
        importedSection.style.display = 'none';
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
    
    const key = `my_exercises_${currentSubject}_${currentGrade}_owner_${loggedInTeacher}`;
    let savedLessons = JSON.parse(localStorage.getItem(key) || '[]');
    savedLessons.push({ name, questions: [...valid] });
    localStorage.setItem(key, JSON.stringify(savedLessons));
    
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
function logout() {
    isTeacher = false;
    document.getElementById('login-name').value = '';
    document.getElementById('login-pass').value = '';
    document.getElementById('login-msg').textContent = '';
    document.getElementById('login-logged-in-bar').style.display = 'none';
    showToast("Byl jsi odhlášen.");
    goHome();
}
init();
