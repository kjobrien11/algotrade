const Alpaca = require("@alpacahq/alpaca-trade-api");
require('dotenv').config()

const options = {
    keyId: process.env.API_KEY,
    secretKey: process.env.SECRET_KEY,
    paper: true,
  };

//create alpaca object
const alpaca = new Alpaca(options);

//account info
// alpaca.getAccount().then((account) => {
//     console.log("Current Account:", account);
//   });

const buyParams = {
    symbol: "AAPL",
    qty: 1,
    side: "buy",
    type: "market",
    time_in_force: "gtc",
  };
  
Buy a stock
  alpaca.createOrder(buyParams).then((order) => {
    console.log("Order details: ", order);
  });

//show positions
  alpaca.getPositions().then((positions) => {
    positions.forEach((position) => console.log(position));
  });


console.log('working per usual');