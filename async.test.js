const fetch = require("node-fetch");
const getPeople = require("./async");
jest.useRealTimers();
it("async", () => {
  expect.assertions(1);
  return getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

// test with mock & spies wher user can add mockData dont need fetch
it("MockTest", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
        }),
    })
  );
  expect.assertions(3);
  return getPeople(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people");
    expect(data.count).toEqual(87);
  });
});
