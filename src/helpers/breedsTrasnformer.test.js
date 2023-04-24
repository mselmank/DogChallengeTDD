// import { mockedData } from "../mocks/mocks";

const { BreedsArray } = require("./breedsTransformer");
const mockedData = require("../mocks/mocks");

describe("Given transformer function", () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  it("Should return an array of breed names", () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockedData.mockedData),
    });
    const result = BreedsArray();
    expect(result).toEqual();
  });

  // Tests that the BreedsArray function returns an empty array when the fetched data object is empty.
  it("Should return an empty array when the fetched data object is empty", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockedData),
    });
    const result = await BreedsArray();
    expect(result).toEqual([]);
  });
});
