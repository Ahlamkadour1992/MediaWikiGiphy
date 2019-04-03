function createTitle(data) {
  var resultUrl = data[3][0];
  var resultTitle = data[3][0].split("/")[4];
  var title = document.getElementById("title");
  title.textContent = resultTitle;
  title.href = resultUrl;
}
function createGiphy(info) {
  var resultGiphy = info.data[0].images.downsized_medium.url;
  var giphyId = document.getElementById("giphy");
  giphyId.src = resultGiphy;
}
function clickButton(onclick) {
  var buttonId = document.getElementById("button");
  buttonId.addEventListener("click", getMediaWikiGifs);
  buttonId.addEventListener("click", getMediaWikiData);
}
