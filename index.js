const Alpaca = require("@alpacahq/alpaca-trade-api");
require('dotenv').config()

const options = {
    keyId: process.env.API_KEY,
    secretKey: process.env.SECRET_KEY,
    paper: true,
  };


console.log('working per usual');