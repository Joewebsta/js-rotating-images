$(document).ready(function() {

  var image = document.getElementsByTagName("img")[0],
      index = 0;


  function rotateImage() {
    
    var body = document.getElementsByTagName("body")[0],
        imageSrc = ["images/beach.png", "images/road.png", "images/city.png", "images/mountain.png"],
        imageSrcLength = imageSrc.length,
        bgColorClass = ["beach-bg-color", "road-bg-color", "city-bg-color", "mountain-bg-color"];

    image.setAttribute("src" , imageSrc[index]);
    body.setAttribute("class", bgColorClass[index]);  
    index++;

    if ( index >= imageSrcLength ) {
      index = 0;
    } 
  }


  function centerVertical() {
    var imageHeight = image.height,
        browserHeight = window.innerHeight,
        marginTop = (browserHeight - (imageHeight + 20))/2;
    
    image.setAttribute("style", "margin-top:" + marginTop + "px");
  }

  centerVertical();
  window.addEventListener("resize", centerVertical, false);
  setInterval(rotateImage, 3000);
});