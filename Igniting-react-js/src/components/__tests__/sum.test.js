import add from '../sum';

test("Check sum of 2 numbers", () => {
  expect(add(2, 10)).toBe(12);
});
