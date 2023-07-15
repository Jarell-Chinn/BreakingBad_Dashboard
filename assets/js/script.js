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

function unsplashAPI() {
  var requestURL =
    "https://api.unsplash.com/photos/random?client_id=Ab4F25pH3_s49oNWOzNXoahqu18przepQm1JgDMKkZA";

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

unsplashAPI();
