console.log('Javasript file loaded');

// Ah W3 Schools and referencing - what could possibly go wrong here?

// So this is where I define the 'file', so I pass in the API Url
let file = "https://api.punkapi.com/v2/beers/15"

fetch (file)
.then(x => x.text())
.then(y => document.getElementById("api-test").innerHTML = y);

console.log('Fetched API');