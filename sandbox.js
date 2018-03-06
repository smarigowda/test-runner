const fetch = require('node-fetch');
const orderTotal = require('./order-total');

const result = orderTotal(fetch, process, {
  country: 'DE',
  items: [
    { name: 'draggon waffles', price: 35, quantity: 2 }
  ]
});

result;
// const result = fetch('https://vatapi.com/v1/country-code-check?code=DE', {
//   headers: {
//     Apikey: process.env.VAT_API_KEY
//   }
// })
// .then(response => response.text())
// // console.log(result);
