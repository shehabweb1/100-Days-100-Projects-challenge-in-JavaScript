document.getElementById("dl").onclick = () => {
  const screenshotTarget = document.getElementById("download");

  html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    var anchor = document.createElement("a");
    anchor.setAttribute("href", base64image);
    anchor.setAttribute("download", "my-image.png");
    anchor.click();
    anchor.remove();
  });
};

var imgBox = document.getElementById("imgBox");

var loadFile = (event) => {
  imgBox.style.backgroundImage =
    "url(" + URL.createObjectURL(event.target.files[0]) + ")";
};