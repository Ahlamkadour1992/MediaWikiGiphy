var url = 'https://www.mediawiki.org/w/api.php?action=opensearch&format=json&origin=*&search=';
function getMediaWikiData(event) {
  var keyword = document.getElementById('input').value;
  var searchURL = url + keyword;
  fetch(searchURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var resultUrl = data[3][0];
      var resultTitle = data[0];
      document.getElementById("title").textContent = resultTitle;
      document.getElementById("description").textContent = resultUrl;
    })
    .catch(function(error) {
      console.log(error);
    })
}

document.getElementById('button').addEventListener("click", getMediaWikiData);
document.getElementById('description').addEventListener("click", function(){
  window.open(document.getElementById("description").textContent,'_blank');
});
