const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", () => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then((data) => {
        expect(data.count).toBeGreaterThan(20);
    });
});

