$(document).ready(function() {

  var image = document.getElementsByTagName("img")[0],
      imageHeight = image.height,
      body = document.getElementsByTagName("body")[0],
      imageSrc = ["images/beach.png", "images/road.png", "images/city.png", "images/mountain.png"],
      imageSrcLength = imageSrc.length,
      bgColorClass = ["beach-bg-color", "road-bg-color", "city-bg-color", "mountain-bg-color"]
      index = 0,
      browserHeight = window.innerHeight;

  function rotateImage() {
    
    image.setAttribute("src" , imageSrc[index]);
    body.setAttribute("class", bgColorClass[index]);  
    index++;

    if ( index >= imageSrcLength ) {
      index = 0;
    } 
  }

  function centerVertical() {
    var marginTop = (browserHeight - (imageHeight + 20))/2;
    image.setAttribute("style", "margin-top:" + marginTop + "px");
  }

  centerVertical();
  setInterval(rotateImage, 3000);

});