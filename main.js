var urlWiki =
  "https://www.mediawiki.org/w/api.php?action=opensearch&format=json&origin=*&search=";
function getMediaWikiData(event) {
  var keyword = document.getElementById("input").value;
  var searchURL = urlWiki + keyword;
  fetch(searchURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      createTitle(data);
    })
    .catch(function(error) {
      console.log(error);
    });
}
function getMediaWikiGifs(word) {
  var search = document.getElementById("input").value;
  var urlGiphy =
    "https://api.giphy.com/v1/gifs/search?api_key=549SsqAtk0QyLBKgCzmjmjNAUxzGfci7&q=" +
    search +
    "&limit=25&offset=0&rating=G&lang=en";
  var searchGiphy = urlGiphy + search;
  fetch(searchGiphy)
    .then(function(response) {
      return response.json();
    })
    .then(function(info) {
      createGiphy(info);
    })
    .catch(function(error) {
      console.log(error);
    });
}
clickButton(onclick);
