# 🎓 HonzaUceni - Interactive Educational Quiz App

## Project Overview
**HonzaUceni** is a comprehensive Czech educational quiz web application for students in grades 4-9. It covers **7 subjects** with **4 game modes**, achievements, statistics, dark mode, audio feedback, and a modern responsive design.

## ✅ Currently Completed Features

### 📚 7 Full Subjects (Grades 4-9, 5 topics per grade, 15 questions per topic)
| Subject | Czech Name | Topics | Questions |
|---------|-----------|--------|-----------|
| 🔢 Math | Matematika | 30 topics | 450 questions |
| 📖 Czech | Čeština | 30 topics | 450 questions |
| 🇬🇧 English | Angličtina | 30 topics | 450 questions |
| ⚖️ Civics | Občanská výchova | 30 topics | 450 questions |
| 🌿 Natural History | Přírodopis | 30 topics | 450 questions |
| 🌍 Geography | Zeměpis | 30 topics | 450 questions |
| 🏛️ History | Dějepis | 30 topics | 450 questions |
| **Total** | | **210 topics** | **3,150 questions** |

### 🎮 4 Game Modes
1. **Psaní (Typing)** – Type the correct answer with on-screen keyboard
2. **Výběr (Multiple Choice)** – Choose from 4 options
3. **Kartičky (Flashcards)** – Flip cards and self-rate (Znám/Neznám)
4. **Bleskový (Speed Round)** – 60-second rapid-fire with countdown

### 🔄 Unified Navigation Flow
```
Main Menu → Select Subject → Select Grade (4-9) → Select Topic → Select Game Mode → Play 15 Questions → Results
```

### ⏱️ Timer Display
- Typing & Choice modes: shows elapsed time as `Xm XXs` (e.g., `1m 05s`, `45s`)
- Speed mode: 60-second countdown with animated ring

### 🌙 Dark Mode
- Toggle via moon/sun icon in top bar
- Persisted via localStorage
- All charts and UI adapt to dark theme

### 🔊 Audio Feedback
- Correct answer: ascending arpeggio
- Wrong answer: descending minor tones
- Key press: subtle click
- Streak milestone (every 5): sparkle sound
- Level up: fanfare
- Achievement unlock: special sparkle
- Speed countdown: tick sounds
- Card flip: whoosh

### 📊 Statistics Dashboard
- 6 overview cards (games, correct answers, accuracy, XP, best streak, total time)
- 7-day accuracy line chart (Chart.js)
- Subject distribution doughnut chart (all 7 subjects)
- Scrollable game history (last 20 sessions)

### 🏆 Achievements System (18 achievements)
- First game, streak milestones (5/10/20), perfect score
- Speed mode records (50/100 points)
- Level milestones (5/10/20), session counts (10/50)
- Flashcard mastery, Math master, XP milestones (500/2000)
- Night Owl (after 21:00), Early Bird (before 7:00)

### 📈 XP & Level System
- Points earned per correct answer (10 base, 5 with hint)
- Bonus XP for 100% accuracy (+20) and streak ≥10 (+15)
- Exponential level curve: `80 × 1.3^(level-1)` XP per level
- Level-up toast notification

### 📱 Mobile-First Design
- On-screen QWERTY keyboard with number row
- Number pad for math subjects
- Responsive grid layout for all screen sizes
- Touch-friendly buttons and cards

### 👨‍🏫 Teacher Mode
- Login with credentials (🔐 icon)
- Create custom exercises per subject & grade
- Exercises saved to localStorage

### 🔁 Spaced Repetition
- Wrong answers collected during each round
- "Procvič chyby" button to replay missed questions
- Topic completion checkmarks (≥70% accuracy)

## 📁 File Structure
```
index.html                  Main HTML (all screens)
css/
  └── style.css             All styles, dark mode, responsive
js/
  ├── data.js               Subject definitions + English data (450q)
  ├── data-math.js           Math data grades 4-9 (450q)
  ├── data-czech.js          Czech data grades 4-9 (450q)
  ├── data-civics.js         Civics data grades 4-9 (450q)
  ├── data-nature.js         Natural History data grades 4-9 (450q)
  ├── data-geography.js      Geography data grades 4-9 (450q)
  ├── data-history.js        History data grades 4-9 (450q)
  ├── audio.js               Web Audio API sound effects
  ├── achievements.js        18 achievements with popups
  ├── stats.js               Statistics, charts, XP system
  ├── game.js                Game engine (4 modes, 15-question limit)
  └── app.js                 App controller, navigation, state
```

## 🔗 Entry Points
- `/index.html` – Main application (single page app)
- All navigation is handled client-side via screen toggling

## 🗄️ Data Storage
- **localStorage** keys:
  - `honza_stats` – Game session history (JSON array, max 200)
  - `honza_xp` – Current XP progress
  - `honza_level` – Current level
  - `honza_achievements` – Unlocked achievement IDs
  - `honza_dark` – Dark mode preference ('on'/'off')
  - `honza_sound` – Sound preference ('on'/'off')
  - `my_exercises_{subject}_{grade}` – Custom teacher exercises

## 📦 External Dependencies (CDN)
- **Canvas Confetti** v1.6.0 – celebration animations
- **Chart.js** v4.4.0 – statistics charts
- **Font Awesome** v6.4.0 – icons
- **Google Fonts** – Fredoka One + Quicksand

## 🚀 Recommended Next Steps
1. **Add diacritics support** – Allow Czech characters (ě, š, č, ř, ž, ý, á, í, é, ú, ů) on on-screen keyboard
2. **Difficulty levels** – Easy/Medium/Hard per topic
3. **Multiplayer mode** – Local two-player quiz battles
4. **Export/Import** – Save progress as file, restore on new device
5. **Voice pronunciation** – Text-to-speech for English vocabulary
6. **More question types** – Matching, fill-in-the-blank, image-based
7. **Parent dashboard** – View child's progress overview
8. **PWA support** – Offline mode with service worker
