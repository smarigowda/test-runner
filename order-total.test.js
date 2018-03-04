const orderTotal = require('./order-total');

it('works', () => {
  expect(1).toBe(1);
});

it('quantity specified', () => {
  orderTotal({
    items: [
      { name: 'toy 1', price: 40, quantity: 2 }
    ]
  }).then(result => expect(result).toBe(80))
});

it('no quantity specified', () => {
  orderTotal({
    items: [
      { name: 'toy 1', price: 40}
    ]
  }).then(result => expect(result).toBe(40));
});

it('2 items', () => {
  orderTotal({
    items: [
      { name: 'toy 1', price: 40},
      { name: 'toy 2', price: 100, quantity: 2}
    ]
  }).then(result => expect(result).toBe(240));
});

it('2 items, with quantity', () => {
  orderTotal({
    items: [
      { name: 'toy 1', price: 40, quantity: 5},
      { name: 'toy 2', price: 100, quantity: 2}
    ]
  }).then(result => expect(result).toBe((40 * 5) + (100 *2)));
});