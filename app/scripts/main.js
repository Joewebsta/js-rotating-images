$(document).ready(function() {

  var image = document.getElementsByTagName("img")[0];
  var imageSrc = ["images/beach.png", "images/road.png", "images/city.png", "images/mountains.png"];
  var imageSrcLength = imageSrc.length;
  var imageIndex = 0;

  function rotateImage() {
    
    image.setAttribute("src" , imageSrc[imageIndex]);
    imageIndex++;

    if ( imageIndex >= imageSrcLength ) {
      imageIndex = 0;
    }
  }

  setInterval(rotateImage, 3000);

});
