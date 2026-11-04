import { CATEGORY_META } from './data/words.js';

export class GameUI {
  constructor({ onCategoryChange, onDifficultyChange, onNewRound, onGuess, onBackHome, onPlayAgain }) {
    this.onCategoryChange = onCategoryChange;
    this.onDifficultyChange = onDifficultyChange;
    this.onNewRound = onNewRound;
    this.onGuess = onGuess;
    this.onBackHome = onBackHome;
    this.onPlayAgain = onPlayAgain;

    this.categoryGrid = document.getElementById('category-grid');
    this.difficultyButtons = document.getElementById('difficulty-buttons');
    this.homeScreen = document.getElementById('home-screen');
    this.gameScreen = document.getElementById('game-screen');
    this.currentCategory = document.getElementById('current-category');
    this.gameTitle = document.getElementById('game-title');
    this.scoreDisplay = document.getElementById('score-display');
    this.wordDisplay = document.getElementById('word-display');
    this.hintText = document.getElementById('hint-text');
    this.attemptsDisplay = document.getElementById('attempts-display');
    this.difficultyLabel = document.getElementById('difficulty-label');
    this.keyboard = document.getElementById('keyboard');
    this.message = document.getElementById('message');
    this.resultModal = document.getElementById('result-modal');
    this.resultBadge = document.getElementById('result-badge');
    this.resultTitle = document.getElementById('result-title');
    this.resultMessage = document.getElementById('result-message');
    this.statsSummary = document.getElementById('stats-summary');
    this.historyList = document.getElementById('history-list');
    this.hangman = document.getElementById('hangman');

    this.bindStaticEvents();
    this.renderCategories();
    this.renderDifficultyOptions();
  }

  bindStaticEvents() {
    document.getElementById('new-game-btn').addEventListener('click', () => this.onNewRound());
    document.getElementById('new-round-btn').addEventListener('click', () => this.onNewRound());
    document.getElementById('back-home-btn').addEventListener('click', () => this.onBackHome());
    document.getElementById('play-again-btn').addEventListener('click', () => {
      this.hideModal();
      this.onPlayAgain();
    });
    document.getElementById('menu-btn').addEventListener('click', () => {
      this.hideModal();
      this.onBackHome();
    });
  }

  renderCategories() {
    this.categoryGrid.innerHTML = '';
    CATEGORY_META.forEach((item) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'category-card active';
      button.innerHTML = `
        <span class="icon">${item.icon}</span>
        <span>${item.label}</span>
      `;
      button.addEventListener('click', () => {
        this.onCategoryChange(item.key);
        this.setActiveCategory(item.key);
      });
      this.categoryGrid.appendChild(button);
    });

    this.setActiveCategory('animais');
  }

  setActiveCategory(categoryKey) {
    const cards = this.categoryGrid.querySelectorAll('.category-card');
    cards.forEach((card, index) => {
      const item = CATEGORY_META[index];
      const isActive = item.key === categoryKey;
      card.classList.toggle('active', isActive);
    });
  }

  renderDifficultyOptions() {
    const options = [
      { key: 'facil', label: 'Fácil' },
      { key: 'medio', label: 'Médio' },
      { key: 'dificil', label: 'Difícil' }
    ];

    this.difficultyButtons.innerHTML = '';
    options.forEach((option) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'difficulty-option';
      button.textContent = option.label;
      button.addEventListener('click', () => {
        this.onDifficultyChange(option.key);
        this.setActiveDifficulty(option.key);
      });
      this.difficultyButtons.appendChild(button);
    });

    this.setActiveDifficulty('medio');
  }

  setActiveDifficulty(level) {
    const buttons = this.difficultyButtons.querySelectorAll('.difficulty-option');
    buttons.forEach((button, index) => {
      const isActive = ['facil', 'medio', 'dificil'][index] === level;
      button.classList.toggle('active', isActive);
    });
  }

  showGameScreen() {
    this.homeScreen.classList.remove('active');
    this.gameScreen.classList.add('active');
  }

  showHomeScreen() {
    this.gameScreen.classList.remove('active');
    this.homeScreen.classList.add('active');
  }

  setCategoryTitle(categoryKey) {
    const category = CATEGORY_META.find((item) => item.key === categoryKey);
    this.currentCategory.textContent = category ? category.label : 'Categoria';
    this.gameTitle.textContent = category ? `Adivinhe a palavra — ${category.label}` : 'Adivinhe a palavra';
  }

  renderStats(stats) {
    const percent = stats.games ? ((stats.wins / stats.games) * 100).toFixed(0) : '0';
    this.statsSummary.innerHTML = `
      <div class="stat-box"><span>Partidas</span><strong>${stats.games}</strong></div>
      <div class="stat-box"><span>Vitórias</span><strong>${stats.wins}</strong></div>
      <div class="stat-box"><span>Derrotas</span><strong>${stats.losses}</strong></div>
      <div class="stat-box"><span>Acertos</span><strong>${percent}%</strong></div>
      <div class="stat-box"><span>Recorde</span><strong>${stats.bestScore || 0}</strong></div>
      <div class="stat-box"><span>Categoria</span><strong>${Object.keys(stats.categories || {}).length}</strong></div>
    `;

    const history = stats.history || [];
    this.historyList.innerHTML = history.length
      ? history.slice(0, 6).map((item) => `
          <li><span>${item.category}</span><strong>${item.won ? 'Vitória' : 'Derrota'}</strong></li>
        `).join('')
      : '<li><span>Nenhuma partida</span><strong>—</strong></li>';
  }

  renderWord(word, guessedLetters) {
    const characters = Array.from(word);
    this.wordDisplay.innerHTML = characters.map((char) => {
      const normalized = char.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      const isVisible = char === ' ' || guessedLetters.has(normalized);
      const letter = isVisible ? char : '';
      const className = char === ' ' ? 'word-letter empty' : 'word-letter';
      return `<span class="${className}">${letter}</span>`;
    }).join('');
  }

  renderKeyboard(usedLetters, correctLetters, wrongLetters) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.keyboard.innerHTML = '';

    alphabet.split('').forEach((letter) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'key-btn';
      button.textContent = letter.toUpperCase();

      if (usedLetters.has(letter)) {
        button.disabled = true;
        button.classList.add(correctLetters.has(letter) ? 'correct' : 'wrong');
        button.classList.add('disabled');
      }

      button.addEventListener('click', () => this.onGuess(letter));
      this.keyboard.appendChild(button);
    });
  }

  renderGameStatus({ attemptsLeft, difficulty, hint }) {
    this.attemptsDisplay.textContent = `Tentativas: ${attemptsLeft}`;
    this.difficultyLabel.textContent = difficulty === 'facil' ? 'Fácil' : difficulty === 'medio' ? 'Médio' : 'Difícil';
    this.hintText.textContent = hint || 'Sem dica disponível.';
  }

  setMessage(text, tone = '') {
    this.message.textContent = text;
    this.message.className = 'message';
    if (tone) {
      this.message.classList.add(tone);
    }
  }

  renderHangman(wrongCount) {
    this.hangman.className = `hangman stage-${Math.min(wrongCount, 6)}`;
  }

  showResult({ won, word, score }) {
    if (won) {
      this.resultBadge.textContent = 'Vitória';
      this.resultTitle.textContent = 'Parabéns!';
      this.resultMessage.textContent = `Você acertou a palavra “${word}” e marcou ${score} pontos.`;
    } else {
      this.resultBadge.textContent = 'Resultado';
      this.resultTitle.textContent = 'Você perdeu!';
      this.resultMessage.innerHTML = `A palavra era: <strong>${word}</strong>`;
    }

    this.resultModal.classList.remove('hidden');
  }

  hideModal() {
    this.resultModal.classList.add('hidden');
  }

  updateScore(score) {
    this.scoreDisplay.textContent = String(score);
  }
}
