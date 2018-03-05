function orderTotal(fetch, order) {
  fetch('https://vatapi.com/v1/country-code-check?code=DE');
  return Promise.resolve(order.items.reduce((prev, curr) => prev + curr.price * (curr.quantity || 1) , 0))
}

module.exports = orderTotal;