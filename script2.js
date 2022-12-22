const fetch = require("node-fetch");
const getPeople = async (fetch) => {
  const getPeoplePromise = await fetch("https://swapi.dev/api/people");
  const data = await getPeoplePromise.json();
  return {
    count: data.count,
    results: data.results,
  };
};
module.exports = { getPeople };
