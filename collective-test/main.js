// console.log('Javasript file loaded');

// // Ah W3 Schools and referencing - what could possibly go wrong here?

// // So this is where I define the 'file', so I pass in the API Url
// let file = "https://api.punkapi.com/v2/beers/15/"

// fetch (file)
// .then(x => x.text())
// .then(y => document.getElementById("api-test").innerHTML = y);

// console.log('Fetched API');


// I'll be totally honest here, I've used a boilerplate for this, and this isn't me trying to gain an unfair advantage, it's literally because this is my very first time actually learning about API's


// api url
const api_url = 
      "https://api.punkapi.com/v2/beers/";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Description</th>
          <th>Image URL</thI
         </tr>`;
    
    // Loop to get parameters from the JSON
    for (let r of data) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.description}</td>
    <td>${r.image_url}</td>
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("beers_0").innerHTML = tab;
}