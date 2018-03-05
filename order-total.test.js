const orderTotal = require('./order-total');

let isFakeFetchCalled = false;

const fakeFetch = function(url) {
  expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE');
  isFakeFetchCalled = true;
}

const emptyFunction = () => {};

it('works', () => {
  expect(1).toBe(1);
});

it('calls vap api correctly', () => {
  orderTotal(fakeFetch, {
    country: 'DE',
    items: [
      { name: 'draggon waffles', price: 35, quantity: 2 }
    ]
  }).then(result => {
    expect(isFakeFetchCalled).toBe(true);
  })
});

it('if country code is specified');

it('quantity specified', () => {
  orderTotal(emptyFunction, {
    items: [
      { name: 'toy 1', price: 40, quantity: 2 }
    ]
  }).then(result => expect(result).toBe(80))
});

it('no quantity specified', () => {
  orderTotal(emptyFunction, {
    items: [
      { name: 'toy 1', price: 40}
    ]
  }).then(result => expect(result).toBe(40));
});

it('2 items', () => {
  orderTotal(emptyFunction, {
    items: [
      { name: 'toy 1', price: 40},
      { name: 'toy 2', price: 100, quantity: 2}
    ]
  }).then(result => expect(result).toBe(240));
});

it('2 items, with quantity', () => {
  orderTotal(emptyFunction, {
    items: [
      { name: 'toy 1', price: 40, quantity: 5},
      { name: 'toy 2', price: 100, quantity: 2}
    ]
  }).then(result => expect(result).toBe((40 * 5) + (100 *2)));
});