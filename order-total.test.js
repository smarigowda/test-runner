const orderTotal = require('./order-total');

let isFakeFetchCalled = false;

const fakeProcess = {
  env: {
    VAT_API_KEY: 'key123'
  }
};

const fakeFetch = function(url, opts) {
  expect(opts.headers.apikey).toBe('key123');
  expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE');
  isFakeFetchCalled = true;
  return Promise.resolve({
    json: () => Promise.resolve({
      rates: {
        standard: {
          value: 19
        }
      }
    })
  })
}

it('works', () => {
  expect(1).toBe(1);
});

it('calls vap api correctly', () => {
  return orderTotal(fakeFetch, fakeProcess, {
    country: 'DE',
    items: [
      { name: 'draggon waffles', price: 35, quantity: 2 }
    ]
  }).then(result => {
    expect(result).toBe(35*2*1.19);
    expect(isFakeFetchCalled).toBe(true);
  });
});

it('quantity specified', () => {
  orderTotal(null, null, {
    items: [
      { name: 'toy 1', price: 40, quantity: 2 }
    ]
  }).then(result => expect(result).toBe(80))
});

it('no quantity specified', () => {
  orderTotal(null, null, {
    items: [
      { name: 'toy 1', price: 40}
    ]
  }).then(result => expect(result).toBe(40));
});

it('2 items', () => {
  orderTotal(null, null, {
    items: [
      { name: 'toy 1', price: 40},
      { name: 'toy 2', price: 100, quantity: 2}
    ]
  }).then(result => expect(result).toBe(240));
});

it('2 items, with quantity', () => {
  orderTotal(null, null, {
    items: [
      { name: 'toy 1', price: 40, quantity: 5},
      { name: 'toy 2', price: 100, quantity: 2}
    ]
  }).then(result => expect(result).toBe((40 * 5) + (100 *2)));
});