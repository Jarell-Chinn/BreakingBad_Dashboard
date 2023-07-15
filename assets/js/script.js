// API that displays a random Breaking Bad Quote

function breakingBadQuote() {
  var requestURL = "https://api.breakingbadquotes.xyz/v1/quotes";
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

// breakingBadQuote();

// function unsplashAPI() {
//   var requestURL =
//     "https://api.unsplash.com/photos/random?client_id=oeF6_nedrYDZgPYD3W22C9NSsJsCa0DeZfWTlHO7u2I";

//   fetch(requestURL)
//     .then(function (response) {
//       response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

unsplashAPI();
// https://api.unsplash.com/search/collections?page=1&query=office

var apiKey = "Ab4F25pH3_s49oNWOzNXoahqu18przepQm1JgDMKkZA";
var apiKey2 = "oeF6_nedrYDZgPYD3W22C9NSsJsCa0DeZfWTlHO7u2I";

// Make a GET request to Unsplash API for a random photo
fetch(
  "https://api.unsplash.com/photos/random?query=new-mexico&client_id=" + apiKey
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    var photoUrl = data.urls.regular;

    // Create an <img> element and set its source to the random photo URL
    var imageElement = document.body.setAttribute(
      "style",
      "background-image:url(" + photoUrl + ")"
    );
    // imageElement.src = photoUrl;

    // Append the image element to a container in the HTML
    // var container = document.getElementById("backgroundimg");
    // container.appendChild(imageElement);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
