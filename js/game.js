import { WORD_BANK } from './data/words.js';
import { fetchWordDefinition, buildHint } from './services/dictionary.js';

const DIFFICULTY_RULES = {
  facil: { maxLength: 6, minLength: 3 },
  medio: { maxLength: 9, minLength: 5 },
  dificil: { minLength: 7, maxLength: 99 }
};

const normalizeLetter = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

export class HangmanGame {
  constructor() {
    this.category = 'animais';
    this.difficulty = 'medio';
    this.word = '';
    this.guessedLetters = new Set();
    this.wrongLetters = new Set();
    this.maxAttempts = 6;
    this.attemptsLeft = 6;
    this.hint = '';
    this.score = 0;
    this.recentWords = [];
  }

  setCategory(category) {
    this.category = category;
  }

  setDifficulty(level) {
    this.difficulty = level;
  }

  get availableWords() {
    return WORD_BANK[this.category] || [];
  }

  getNormalizedWord(word = this.word) {
    return normalizeLetter(word);
  }

  getUniqueLetters(word = this.word) {
    return [...new Set(this.getNormalizedWord(word).replace(/\s+/g, '').split(''))];
  }

  pickWord() {
    const rules = DIFFICULTY_RULES[this.difficulty] || DIFFICULTY_RULES.medio;
    const pool = this.availableWords.filter((candidate) => {
      const normalized = normalizeLetter(candidate);
      const lengthOk = normalized.length >= rules.minLength && normalized.length <= rules.maxLength;
      const notUsed = !this.recentWords.includes(normalized);
      return lengthOk && notUsed;
    });

    const finalPool = pool.length ? pool : this.availableWords.filter((candidate) => !this.recentWords.includes(normalizeLetter(candidate)));
    const chosen = finalPool[Math.floor(Math.random() * finalPool.length)] || this.availableWords[0];
    this.recentWords.push(normalizeLetter(chosen));
    this.recentWords = this.recentWords.slice(-12);
    return chosen;
  }

  async startRound() {
    this.word = this.pickWord();
    this.guessedLetters = new Set();
    this.wrongLetters = new Set();
    this.attemptsLeft = this.maxAttempts;

    const result = await fetchWordDefinition(this.word);
    const hintText = buildHint({
      category: this.category,
      difficulty: this.difficulty,
      word: this.word,
      definition: result?.definition || ''
    });

    this.hint = hintText;
    return {
      word: this.word,
      hint: this.hint,
      attemptsLeft: this.attemptsLeft,
      maxAttempts: this.maxAttempts,
      letters: this.getUniqueLetters(this.word)
    };
  }

  submitGuess(letter) {
    const normalized = normalizeLetter(letter);
    if (!normalized || this.guessedLetters.has(normalized) || this.wrongLetters.has(normalized)) {
      return { status: 'repeated', isCorrect: false };
    }

    this.guessedLetters.add(normalized);

    const isCorrect = this.getNormalizedWord().includes(normalized);
    if (!isCorrect) {
      this.wrongLetters.add(normalized);
      this.attemptsLeft -= 1;
      return { status: 'wrong', isCorrect: false, attemptsLeft: this.attemptsLeft };
    }

    return { status: 'correct', isCorrect: true, attemptsLeft: this.attemptsLeft };
  }

  hasWon() {
    const normalizedWord = this.getNormalizedWord();
    const letters = [...new Set(normalizedWord.replace(/\s+/g, '').split(''))];
    return letters.every((char) => this.guessedLetters.has(char));
  }

  getVisibleLetters() {
    return [...this.getNormalizedWord()].map((char) => {
      if (char === ' ') return ' ';
      return this.guessedLetters.has(char) ? char : '_';
    });
  }

  getScoreForWin() {
    const wordLength = this.getNormalizedWord().replace(/\s+/g, '').length;
    const base = 100;
    const difficultyBonus = { facil: 15, medio: 30, dificil: 45 }[this.difficulty] || 20;
    return Math.max(50, base + (wordLength * 12) + difficultyBonus - ((this.maxAttempts - this.attemptsLeft) * 10));
  }
}
