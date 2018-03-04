const orderTotal = require('./order-total');

it('works', () => {
  expect(1).toBe(1);
});

it('quantity specified', () => {
  expect(orderTotal({
    items: [
      { name: 'toy 1', price: 40, quantity: 2 }
    ]
  })).toBe(80);
});

it('no quantity specified', () => {
  expect(orderTotal({
    items: [
      { name: 'toy 1', price: 40}
    ]
  })).toBe(40);
});

it('2 items', () => {
  expect(orderTotal({
    items: [
      { name: 'toy 1', price: 40},
      { name: 'toy 2', price: 100, quantity: 2}
    ]
  })).toBe(240);
})

it('2 items, with quantity', () => {
  expect(orderTotal({
    items: [
      { name: 'toy 1', price: 40, quantity: 5},
      { name: 'toy 2', price: 100, quantity: 2}
    ]
  })).toBe((40 * 5) + (100 *2));
})


