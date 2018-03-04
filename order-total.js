function orderTotal(order) {
  return Promise.resolve(order.items.reduce((prev, curr) => prev + curr.price * (curr.quantity || 1) , 0))
}

module.exports = orderTotal;