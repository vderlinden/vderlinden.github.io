// Opdracht 3

function numberOfRedElements() {
  const elements = document.getElementsByClassName('redtext').length; // Count all red elements by ClassName
  console.log(elements + ' rode elementen gevonden.'); // Check result in console

  showCount = document.getElementById('redElements'); // Get redElements p element
  showCount.style.color = 'red'; // Change redElements h1 element to red
  showCount.innerHTML = elements + ' red elements'; // Print the total amount in redElements h1 element
}

function calcRedElements() {
  const elements = document.getElementsByTagName('h1');
  console.log(elements.length + ' h1 elements gevonden');

  count = 0;

  for (i = 1; i < elements.length; i++) {
    const style = getComputedStyle(elements[i]);
    let fontColor = style.color;

    if (fontColor === 'rgb(171, 43, 52)') {
      count++;
    }
  }

  console.log(count + ' rode h1 elementen gevonden');
  showCount = document.getElementById('redElements2'); // Get redElements p element
  showCount.style.color = 'red'; // Change redElements h1 element to red
  showCount.innerHTML = count + ' red elements with css style found'; // Print the total amount in redElements h1 element
}

// Opdracht 4

function createHeadingsBlue() {
  let elements = document.getElementsByTagName('h1'); // Select all h1 elements by TagName

  console.log(elements); // Check result in console
  console.log(elements.length + ' h1 elementen gevonden.');

  let changedElements = 0;

  for (i = 0; i < elements.length; i++) {
    const currentClass = elements[i].className; // Set current class name

    if (currentClass !== 'redtext') {
      // Change h1 color element to blue if not already red
      console.log('Changing to blue');
      elements[i].style.color = 'blue';
      changedElements++;
    } else {
      console.log('Already red!');
    }

    if (i == elements.length - 1) {
      // Log total changed headers
      console.log(changedElements + ' elementen blauw gemaakt.');
    }
  }
}

// Opdracht 5

function createRedHeadingsGreen() {
  let elements = document.getElementsByClassName('redtext'); // Get redElements h1 elements

  let i = 0;

  while (i < elements.length) {
    elements[i].style.color = 'green'; // Set current color to green
    i++;
  }
}
