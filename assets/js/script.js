var backgroundImgEl = document.querySelector(".unsplashGen");
var quoteTextEl = document.querySelector("#todaysQuote");
var favQuotesEl = document.querySelector("#favQuotes");

fetch(
  "https://api.unsplash.com/photos/random?client_id=oeF6_nedrYDZgPYD3W22C9NSsJsCa0DeZfWTlHO7u2I"
)
  .then((response) => response.json())
  .then((data) => {
    // Access the URL of the random photo
    var photoUrl = data.urls.regular;

    // Create an <img> element and set its source to the random photo URL
    var imageElement = document.createElement("img");
    imageElement.src = photoUrl;

    // Append the image element to a container in the HTML
    backgroundImgEl.appendChild(imageElement);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
