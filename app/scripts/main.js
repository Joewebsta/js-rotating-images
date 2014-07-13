$(document).ready(function() {

  var image = document.getElementsByTagName("img")[0];
  var body = document.getElementsByTagName("body")[0];
  var imageSrc = ["images/beach.png", "images/road.png", "images/city.png", "images/mountains.png"];
  var imageSrcLength = imageSrc.length;
  var imageIndex = 0;

  function rotateImage() {
    
    image.setAttribute("src" , imageSrc[imageIndex]);
    imageIndex++;

    if ( imageIndex >= imageSrcLength ) {
      imageIndex = 0;
    }

    if ( imageIndex === 1 ) {
      
      body.setAttribute("class", "beach-bg-color");

    } else if ( imageIndex === 2 ) {
      
      body.setAttribute("class", "road-bg-color");

    } else if ( imageIndex === 3 ) {

      body.setAttribute("class", "city-bg-color");

    } else {

      body.setAttribute("class", "mountain-bg-color");
      
    }
  }

  setInterval(rotateImage, 3000);

});
