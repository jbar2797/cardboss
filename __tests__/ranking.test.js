const { getTopCards } = require('../src/ranking');

test('getTopCards returns 100 items', () => {
  const cards = getTopCards();
  expect(Array.isArray(cards)).toBe(true);
  expect(cards).toHaveLength(100);
});
