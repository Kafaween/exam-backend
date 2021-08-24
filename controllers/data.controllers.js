const axios = require('axios');
const { dataapi } = require('../models/data.model');

const getdata = async (req, res) => {
  axios
    .get('https://flowers-api-13.herokuapp.com/getFlowers')
    .then((response) => {
      let x = response.data.flowerslist.map((e) => {
        return new dataapi(e);
      });
      res.send(x);
    })
    .catch((error) => res.send(error));
};

module.exports = { getdata };
