  var title = document.getElementById("title");
  var giphyId = document.getElementById("giphy");
  var buttonId = document.getElementById("button");
function createTitle(data) {
  var resultUrl = data[3][0];
  var resultTitle = data[3][0].split("/")[4];
  title.textContent = resultTitle;
  title.href = resultUrl;
}
function createGiphy(info) {
  var resultGiphy = info.data[0].images.downsized_medium.url;
  giphyId.src = resultGiphy;
}
function clickButton(onclick) {
  buttonId.addEventListener("click", getMediaWikiGifs);
  buttonId.addEventListener("click", getMediaWikiData);
}
