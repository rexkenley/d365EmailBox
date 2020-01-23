import merge from "../src/js/merge";

test("Merge Basic Test", () => {
  const source = "<div><p>{{test}}</p></div>",
    data = { test: "Test" };

  expect(merge(source, data)).toBe("<div><p>Test</p></div>");
});

test("Merge Basic Test Formatted", () => {
  const source = "<div><p>{{test.formatted}}</p></div>",
    data = { test: { formatted: "Test" } };

  expect(merge(source, data)).toBe("<div><p>Test</p></div>");
});
