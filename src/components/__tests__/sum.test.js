import { sum } from "../sum";

test("sum of two vales", () => {
  const result = sum(4, 5);
  expect(result).toBe(9);
});
