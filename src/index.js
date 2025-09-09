const { getTopCards } = require('./ranking');

function main() {
  const topCards = getTopCards();
  console.log('Top 5 cards:', topCards.slice(0, 5));
}

if (require.main === module) {
  main();
}

module.exports = { main };
