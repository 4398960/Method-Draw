(function(){
  const canvasContent = localStorage.getItem("md-canvasContent");
  const isDark = localStorage.getItem("md-darkmode");
  if (!isDark && isDark !== null) document.body.classList.add("inverted");
  if (!canvasContent) return;
  const parser = new DOMParser();
  const doc = parser.parseFromString(canvasContent, "image/svg+xml");
  const workarea = document.getElementById("workarea");
  workarea.appendChild(doc.documentElement);
  const svgCanvas = document.getElementById("svgcanvas");
  const canvasTitle = localStorage.getItem("md-canvasTitle");
  svgCanvas.setAttribute("title", canvasTitle ? "Loading " + canvasTitle  : "Loading Drawing");
  const svg = workarea.querySelector("svg");
  function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}
//file:///blah-blah.../index.html?test=1&testy=2
  //console.log(`---------------------------\n`,findGetParameter('test'));
  console.log(`---------------------------\n`,findGetParameter('testy'));
  localStorage.setItem('test', findGetParameter('test'));
})();