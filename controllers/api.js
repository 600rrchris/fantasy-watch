// const rootURL = 'https://api.mysportsfeeds.com/v2.1/pull/nfl/injuries.json'
var Player = require('../models/player')
const axios = require('axios');
const rootURL = 'http://api.sportradar.us/nfl/official/trial/v5/en/players/41c44740-d0f6-44ab-8347-3b5d515e5ecf/profile.json?api_key=h8wtgnhr7bpnstyd2cg6hjvj'
const secondURL = 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json?api_key=h8wtgnhr7bpnstyd2cg6hjvj'
// NFL_TOKEN=h8wtgnhr7bpnstyd2cg6hjvj

module.exports = {
    pullData
}

function pullData(req, res) {
axios.get(rootURL)
  .then(function (response) {
    // handle success
    let teams  = response.data.teams
    let birthdate = response.data.birth_date
    let position = response.data.position
    // return response.data
    console.log(teams);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
pullData();








