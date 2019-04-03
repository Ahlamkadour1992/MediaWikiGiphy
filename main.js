var urlWiki = 'https://www.mediawiki.org/w/api.php?action=opensearch&format=json&origin=*&search=';
function getMediaWikiData(event) {
  var keyword = document.getElementById('input').value;
  var searchURL = urlWiki + keyword;
  fetch(searchURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var resultUrl = data[3][0];
      var resultTitle = data[3][0].split('/')[4];
      document.getElementById("title").textContent = resultTitle;
      document.getElementById("description").textContent = resultUrl;
    })
    .catch(function(error) {
      console.log(error);
    })
}
function getMediaWikiGifs(word) {
var search = document.getElementById("input").value;
var urlGiphy = 'https://api.giphy.com/v1/gifs/search?api_key=549SsqAtk0QyLBKgCzmjmjNAUxzGfci7&q='+ search +'&limit=25&offset=0&rating=G&lang=en';
var searchGiphy = urlGiphy + search;
fetch(searchGiphy)
  .then(function(response){
    return response.json();
  })
  .then(function(info){
    console.log(info);
    var resultGiphy = info.data[0].images.downsized_medium.url;
    console.log("this is our resultGiphy: ", resultGiphy);
    document.getElementById("giphy").src = resultGiphy;
    console.log("this is our giphy: ", resultGiphy);
  })
  .catch(function(error){
    console.log(error);
  })
}
document.getElementById('button').addEventListener("click", getMediaWikiGifs);
document.getElementById('button').addEventListener("click", getMediaWikiData);
document.getElementById('description').addEventListener("click", function(){
  window.open(document.getElementById("description").textContent,'_blank');
});
