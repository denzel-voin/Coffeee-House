const getIndex = require('./helper');

test('первая картинка - переходим на следующую', () => {
  expect(getIndex('next', 0, 3)).toBe(1);
});

test('первая картинка - переходим на предыдущую', () => {
  expect(getIndex('prev', 0, 3)).toBe(2);
});

test('послденяя картинка - переходим на следующую', () => {
  expect(getIndex('next', 2, 3)).toBe(0);
});

test('послденяя картинка - переходим на предыдущую', () => {
  expect(getIndex('prev', 2, 3)).toBe(1);
});