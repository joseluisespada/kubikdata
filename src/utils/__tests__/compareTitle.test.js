import compareTitle from "../compareTitle";

describe(" Compares alphabetical order of 2 strings ", () => {
  it("should return 0", () => {
    const value = compareTitle("", "");
    expect(value).toEqual(0);
  });
  it("should return a > b", () => {
    const a = { title: "Abc" };
    const b = { title: "Def" };
    const value = compareTitle(a, b);
    expect(value).toEqual(-1);
  });
  it("should return b > a", () => {
    const a = { title: "Xyz" };
    const b = { title: "Def" };
    const value = compareTitle(a, b);
    expect(value).toEqual(1);
  });
});
