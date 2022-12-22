const googleSearch = require("./Sync");
const dbMock = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavouritecats.com",
];
describe("googleSearchTest", () => {
  it("dbSearch", () => {
    expect(googleSearch("googleSearch", dbMock)).toEqual([]);
    expect(googleSearch("souprecipes.com", dbMock)).toEqual([
      "souprecipes.com",
    ]);
    expect(googleSearch("cats.com", dbMock)).toEqual([
      "cats.com",
      "myfavouritecats.com",
    ]);
  });

  it("undefined or null", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("check if return 3", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(4);
  });
});
