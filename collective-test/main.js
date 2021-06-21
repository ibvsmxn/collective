// console.log('Javasript file loaded');

// // Ah W3 Schools and referencing - what could possibly go wrong here?

// // So this is where I define the 'file', so I pass in the API Url
// let file = "https://api.punkapi.com/v2/beers/15/"

// fetch (file)
// .then(x => x.text())
// .then(y => document.getElementById("api-test").innerHTML = y);

// console.log('Fetched API');




// api url
const api_url = 
      "https://api.punkapi.com/v2/beers?&per_page=10";
  
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
    let tab = ``;
    
    // Loop to get parameters from the JSON
    // At this point, I need to loop an image being rendered, with the image_url parameter being the src link

    for (let r of data) {
        tab += `<article class="beverage-box"> 
    <h3>${r.name} </h3>
    <p>${r.description}</p>
    <div class="image-bg">
        <div class="hearts">
            <img class="heart transparent" src="images/heart-thin-32.png">
            <img class="heart solid" src="images/heart-thin-white-32.png">
        </div>
        <img class="beverage" src="${r.image_url}">        
    </div>
</article>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("beers_0").innerHTML = tab;
    console.log('API Data has been returned successfully.');
}

// Add 'active' class to beer when clicked on

var header = document.getElementById("beers_0");
var beers = header.getElementsByClassName("beverage-box");

for (var i = 0; i < beers.length; i++) {
    beers[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
  
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }

  // So here's my issue with the above code - I've tested this code with the results being hardcoded (instead of being populated) and the .active class works - but not when it's been dynamically populated.

  // So I thought about toggling between the active class with the clicks being detected, but inside the container where the beer results are generated.

  document.querySelector("#beers_0").onclick= function(event) {

    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

    target.classList.toggle('active');

    console.log('Active Class Toggled');
};

// So while this technically works - it'll only work if you click on certain parts of the article (i.e. the very top and bottom)


// Toggle Menu on mobile 

function menuToggler() {
    var menu = document.getElementById("mainNav");

    menu.classList.toggle("open");

    console.log('Menu Toggled');
 }
