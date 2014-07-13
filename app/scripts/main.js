$(document).ready(function() {

  var image = document.getElementsByTagName("img")[0],
      body = document.getElementsByTagName("body")[0],
      imageSrc = ["images/beach.png", "images/road.png", "images/city.png", "images/mountains.png"],
      imageSrcLength = imageSrc.length,
      bgColorClass = ["beach-bg-color", "road-bg-color", "city-bg-color", "mountain-bg-color"]
      index = 0;

  function rotateImage() {
    
    image.setAttribute("src" , imageSrc[index]);
    body.setAttribute("class", bgColorClass[index]);  
    index++;

    if ( index >= imageSrcLength ) {
      index = 0;
    } 
  }

  setInterval(rotateImage, 3000);

});