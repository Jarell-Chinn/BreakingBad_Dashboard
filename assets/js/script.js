
// script taken from previous class project to test API keys -- 
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';
// var requestUrl = 'https://api.github.com/repos/{owner}/{repo}/issues';
// https://docs.github.com/en/rest/issues/issues#list-repository-issues

fetch(requestUrl)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log("data", data)
    console.log('Github Repo Issues \n----------');
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
      console.log(data[i].url);
      console.log(data[i].user.login);
    }
  });
