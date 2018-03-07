const sumOrderTotal = order => order.items.reduce((prev, curr) => prev + curr.price * (curr.quantity || 1) , 0);

function orderTotal(fetch, process, order) {
  if(order.country) {
    return fetch('https://vatapi.com/v1/country-code-check?code=' + order.country, {
      headers: {
        apikey: process.env.VAT_API_KEY
      }
    })
    .then(response => response.json())
    // .then(x => console.log(x))
    .then(data => data.rates.standard.value)
    .then(vat => sumOrderTotal(order) * (1+ vat/100));  
  }
  return Promise.resolve(sumOrderTotal(order));
}

module.exports = orderTotal;