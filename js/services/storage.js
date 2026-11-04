const STORAGE_KEY = 'adivinhe-a-palavra-stats-v1';

export const defaultStats = () => ({
  games: 0,
  wins: 0,
  losses: 0,
  bestScore: 0,
  history: [],
  categories: {}
});

export const readStats = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultStats(), ...JSON.parse(raw) } : defaultStats();
  } catch (error) {
    return defaultStats();
  }
};

export const writeStats = (stats) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (error) {
    console.warn('Não foi possível salvar estatísticas no armazenamento local.', error);
  }
};

export const recordRound = ({ category, difficulty, won, score, word }) => {
  const stats = readStats();

  stats.games += 1;
  stats.wins += won ? 1 : 0;
  stats.losses += won ? 0 : 1;
  stats.bestScore = Math.max(stats.bestScore || 0, score || 0);

  if (!stats.categories[category]) {
    stats.categories[category] = { played: 0, wins: 0, losses: 0 };
  }

  stats.categories[category].played += 1;
  stats.categories[category].wins += won ? 1 : 0;
  stats.categories[category].losses += won ? 0 : 1;

  const entry = {
    category,
    difficulty,
    won,
    score,
    word,
    date: new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
  };

  stats.history = [entry, ...stats.history].slice(0, 10);
  writeStats(stats);
  return stats;
};
