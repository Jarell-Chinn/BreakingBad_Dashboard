AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
dayjs();
var todayDate = dayjs().format("MM/DD/YYYY");

var todayDateEl = (document.getElementById("todaysDate").textContent =
  todayDate);

// API that displays a random Breaking Bad Quote
if (!localStorage.getItem("favorites")) {
  var favorites = [];
} else {
  var favorites = JSON.parse(localStorage.getItem("favorites"));
  console.log("pulled!");
}

var quote;

function breakingBadQuote() {
  var requestURL = "https://api.breakingbadquotes.xyz/v1/quotes";
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quote = data[0];
      quoteEl.textContent = '"' + data[0].quote + '"';
      characterEl.textContent = "- " + data[0].author;

      var authorEl = data[0].author;
      console.log(authorEl);
      photoSelector(authorEl);
      console.log(data[0].author);
    });
}

// breakingBadQuote();

function unsplashAPI() {
  var apiKey = "Ab4F25pH3_s49oNWOzNXoahqu18przepQm1JgDMKkZA";
  var apiKey2 = "oeF6_nedrYDZgPYD3W22C9NSsJsCa0DeZfWTlHO7u2I";
  var apiKey3 = "BhBNA4hLuZrHL_xWMeD4BgR-aMZgW07kKJhE4iDhk7E";

  var requestURL =
    "https://api.unsplash.com/photos/random?query=new-mexico&client_id=" +
    apiKey3;

  fetch(requestURL)
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
}
//

var quoteEl = document.getElementById("todaysQuote");
quoteEl.textContent = "";
var characterEl = document.getElementById("character");
characterEl.textContent = "";
var authorImg = document.getElementById("icons");

function photoSelector(name) {
  var desiredSrc = "";

  if (name === "Jesse Pinkman") {
    var num = Math.floor(Math.random() * 3);
    desiredSrc = "./assets/images/green/jesse/jesse" + num + ".png";
    authorImg.setAttribute("src", desiredSrc);
  } else if (name === "Walter White") {
    var num = Math.floor(Math.random() * 3);
    desiredSrc = "./assets/images/green/walter/walter" + num + "-green.jpg";
    authorImg.setAttribute("src", desiredSrc);
  } else if (name === "Mike Ehrmantraut") {
    var num = Math.floor(Math.random() * 2);
    desiredSrc = "./assets/images/green/mike/mike" + num + "-green.jpg";
    authorImg.setAttribute("src", desiredSrc);
  } else if (name === "Gustavo Fring") {
    var num = Math.floor(Math.random() * 1);
    desiredSrc = "./assets/images/green/fring/fring" + num + "-green.jpg";
    authorImg.setAttribute("src", desiredSrc);
  } else if (name === "Skyler White") {
    var num = Math.floor(Math.random() * 2);
    desiredSrc = "./assets/images/green/sky/sky" + num + ".jpg";
    authorImg.setAttribute("src", desiredSrc);
  } else if (name === "Saul Goodman") {
    var num = Math.floor(Math.random() * 1);
    desiredSrc = "./assets/images/green/saul/saul" + num + "-green.jpg";
    authorImg.setAttribute("src", desiredSrc);
  } else if (name === "Hank Schrader") {
    var num = Math.floor(Math.random() * 0);
    desiredSrc = "./assets/images/green/hank/hank" + num + ".jpg";
    authorImg.setAttribute("src", desiredSrc);
  } else if (name === "Walter White Jr") {
    var num = Math.floor(Math.random() * 2);
    desiredSrc = "./assets/images/green/walter-jr/walter-jr" + num + ".jpg";
    authorImg.setAttribute("src", desiredSrc);
  } else if (name === "The fly") {
    //var num = (Math.floor(Math.random()*0));
    desiredSrc = "./assets/images/green/fly/fly1.jpg";
    authorImg.setAttribute("src", desiredSrc);
  } else if (name === "Badger") {
    var num = Math.floor(Math.random() * 2);
    desiredSrc = "./assets/images/green/badger/badger" + num + ".jpg";
    authorImg.setAttribute("src", desiredSrc);
  }
}

var refresh = document.getElementById("refresh");
refresh.addEventListener("click", refreshPage);
function refreshPage() {
  breakingBadQuote();
  unsplashAPI();
}

breakingBadQuote();

var likeButton = document.getElementById("likeButton");
var favQuotes = document.getElementById("favQuotes");

likeButton.addEventListener("click", addToFavorites);

function addToFavorites() {
  if (!favorites.includes(quote)) {
    favorites.push(quote);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    favoritesDisplay();
  }
}

function favoritesDisplay() {
  var favorites = JSON.parse(localStorage.getItem("favorites"));
  console.log("pulled!");

  for (var i = 0; i < favorites.length; i++) {
    var favoriteQuote = document.createElement("li");
    favoriteQuote.textContent =
      favorites[i].quote + " - " + favorites[i].author;
    console.log("li added!");
    favQuotes.appendChild(favoriteQuote);
  }
}

favoritesDisplay();
// unsplashAPI();
// https://api.unsplash.com/search/collections?page=1&query=office

// Make a GET request to Unsplash API for a random photo
