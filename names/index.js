const peopleList = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

function getPeopleInCity(peopleList) {
  return getFirstNames(peopleList);
}

module.exports = getPeopleInCity;
