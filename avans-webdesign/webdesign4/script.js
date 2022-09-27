function numberOfRedElements() {
  const elements = document.getElementsByClassName('redtext').length; // Count all red elements by ClassName
  console.log(elements + ' rode elementen gevonden.'); // Check result in console

  showCount = document.getElementById('redElements'); // Get redElements p element
  showCount.style.color = 'red'; // Change redElements h1 element to red
  showCount.innerHTML = elements + ' red elements'; // Print the total amount in redElements h1 element
}

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

function createRedHeadingsGreen() {
  let elements = document.getElementsByClassName('redtext'); // Get redElements h1 elements
  console.log(elements.length);
  let i;

  while (i < elements.length) {
    elements[i].style.color = 'green';
    i++;
  }
}
