import { HangmanGame } from './game.js';
import { GameUI } from './ui.js';
import { readStats, recordRound } from './services/storage.js';

const game = new HangmanGame();
const stats = readStats();

const state = {
  selectedCategory: 'animais',
  difficulty: 'medio',
  score: 0,
  stats,
  currentWord: '',
  guessedLetters: new Set(),
  correctLetters: new Set(),
  wrongLetters: new Set(),
  usedLetters: new Set(),
  isGameOver: false
};

const ui = new GameUI({
  onCategoryChange: (category) => {
    state.selectedCategory = category;
    game.setCategory(category);
    ui.setCategoryTitle(category);
  },
  onDifficultyChange: (difficulty) => {
    state.difficulty = difficulty;
    game.setDifficulty(difficulty);
  },
  onNewRound: async () => {
    await startRound();
  },
  onGuess: (letter) => handleGuess(letter),
  onBackHome: () => {
    state.isGameOver = false;
    ui.showHomeScreen();
  },
  onPlayAgain: async () => {
    await startRound();
  }
});

function updateStatsView() {
  ui.renderStats(state.stats);
}

async function startRound() {
  game.setCategory(state.selectedCategory);
  game.setDifficulty(state.difficulty);

  const round = await game.startRound();
  state.currentWord = round.word;
  state.guessedLetters = new Set();
  state.correctLetters = new Set();
  state.wrongLetters = new Set();
  state.usedLetters = new Set();
  state.isGameOver = false;
  state.score = 0;

  ui.setCategoryTitle(state.selectedCategory);
  ui.showGameScreen();
  ui.renderWord(round.word, state.guessedLetters);
  ui.renderKeyboard(state.usedLetters, state.correctLetters, state.wrongLetters);
  ui.renderGameStatus({
    attemptsLeft: round.attemptsLeft,
    difficulty: state.difficulty,
    hint: round.hint
  });
  ui.renderHangman(0);
  ui.setMessage('');
  ui.updateScore(0);
}

function finishRound(won) {
  state.isGameOver = true;
  const score = won ? game.getScoreForWin() : 0;
  state.score = score;
  ui.updateScore(score);

  if (!won) {
    const revealedLetters = new Set(game.getNormalizedWord().replace(/\s+/g, '').split(''));
    state.guessedLetters = new Set(revealedLetters);
    state.correctLetters = new Set(revealedLetters);
    ui.renderWord(game.word, state.guessedLetters);
    ui.renderHangman(6);
  }

  const updatedStats = recordRound({
    category: state.selectedCategory,
    difficulty: state.difficulty,
    won,
    score,
    word: game.word
  });
  state.stats = updatedStats;
  updateStatsView();

  ui.showResult({
    won,
    word: game.word,
    score
  });
}

function handleGuess(letter) {
  if (state.isGameOver) return;

  const normalized = letter.toLowerCase();
  if (state.usedLetters.has(normalized)) {
    ui.setMessage('Essa letra já foi usada.', 'error');
    return;
  }

  state.usedLetters.add(normalized);

  const result = game.submitGuess(normalized);
  if (result.status === 'correct') {
    state.correctLetters.add(normalized);
    state.guessedLetters = new Set(game.guessedLetters);
    ui.setMessage(`Boa! A letra "${normalized.toUpperCase()}" está correta.`, 'success');
    ui.renderWord(game.word, state.guessedLetters);
  } else if (result.status === 'wrong') {
    state.wrongLetters.add(normalized);
    ui.setMessage(`A letra "${normalized.toUpperCase()}" não está na palavra.`, 'error');
    ui.renderHangman(state.wrongLetters.size);
  }

  ui.renderKeyboard(state.usedLetters, state.correctLetters, state.wrongLetters);

  if (result.status === 'wrong' && game.attemptsLeft <= 0) {
    const score = 0;
    ui.updateScore(score);
    ui.renderGameStatus({
      attemptsLeft: 0,
      difficulty: state.difficulty,
      hint: game.hint
    });
    finishRound(false);
    return;
  }

  if (result.status === 'correct' && game.hasWon()) {
    finishRound(true);
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (/^[a-zà-ú]$/.test(key)) {
    handleGuess(key);
  }
});

ui.renderStats(state.stats);
ui.setCategoryTitle(state.selectedCategory);
ui.showHomeScreen();
