const fetch = require('node-fetch');
const result = fetch('https://vatapi.com/v1/country-code-check?code=DE')
                .then(response => response.text())
// console.log(result);
