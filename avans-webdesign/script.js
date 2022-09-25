function changeElementColor(element, color) {
  let elements = document.getElementsByTagName(element); // Get all elements
  let checkColor = elements[0].style.getPropertyValue('color'); //Set current color

  if (checkColor === color) {
    // If current color is matching requested color
    for (i = 0; i < elements.length; i++) {
      elements[i].style.removeProperty('color'); // Remove js. set color property
    }
  } else {
    for (i = 0; i < elements.length; i++) {
      //If color is not the same as requested
      elements[i].style.color = color; // Set js. requested color property
    }
  }
}

function changeParagraphFont() {
  let elements = document
    .getElementById('opdracht-6')
    .getElementsByTagName('p'); // Get all elements
  let checkFont = elements[0].style.getPropertyValue('font-family'); //Set current font

  if (checkFont === '"Comic sans"') {
    // If current color is matching requested color
    for (i = 0; i < elements.length; i++) {
      elements[i].style.removeProperty('font-family'); // Remove js. set font-familty property
    }
  } else {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = 'Comic sans';
    }
  }
}

function rotateImage(degree){
let element = document.getElementById('rotateImage');
element.style.transform = 'rotate(' + degree + 'deg)'
}

function clacVolume(){
    let length = document.getElementById('l').value;
    let width = document.getElementById('b').value;
    let height = document.getElementById('h').value;

    let volume = length * width * height;

    element = document.getElementById('sum');
    element.style.color = 'red';
    element.innerHTML = volume;
}
