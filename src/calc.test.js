const { add, subtract } = require('./calc');

test('add: 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract: 5 - 3 = 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('subtract: edge case 0 - 0 = 0', () => {
  expect(subtract(0, 0)).toBe(0);
});
