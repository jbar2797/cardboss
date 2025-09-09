function getTopCards() {
  return Array.from({ length: 100 }, (_, i) => ({
    name: `Card ${i + 1}`,
    score: 0,
    action: 'hold',
  }));
}

module.exports = { getTopCards };
