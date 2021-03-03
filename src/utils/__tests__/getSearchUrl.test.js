import getSearchUrl from "../getSearchUrl";
import { 
  SEARCH_OPTIONS,
  PLANETS_URL,
  SPECIES_URL,
  STARSHIPS_URL
} from "../../constants";

describe(" Returns API string with no search text ", () => {
  it("should return planet url with no text", () => {
    const value = getSearchUrl("");
    expect(value).toEqual(`${PLANETS_URL}?search=`);
  });
  it("should return planet url with search text", () => {
    const value = getSearchUrl("abcd", SEARCH_OPTIONS[0]);
    expect(value).toEqual(`${PLANETS_URL}?search=abcd`);
  });
  it("should return species url with search text", () => {
    const value = getSearchUrl("abcd", SEARCH_OPTIONS[1]);
    expect(value).toEqual(`${SPECIES_URL}?search=abcd`);
  });
  it("should return starship url with search text", () => {
    const value = getSearchUrl("abcd", SEARCH_OPTIONS[2]);
    expect(value).toEqual(`${STARSHIPS_URL}?search=abcd`);
  });
});