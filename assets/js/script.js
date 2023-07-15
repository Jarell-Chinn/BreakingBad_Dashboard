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

var APIkey = "Ab4F25pH3_s49oNWOzNXoahqu18przepQm1JgDMKkZA";
var secretKey = "syAWQL1pyzZhz7yIStoCCZ0GfXUqPgQnPrN07A69NNw";
