// Functie voor de tooltip. Dit kan beter met CSS!
function showHelp() {
  var help = document.getElementById('showTooltip');
  console.log(help);
  help.classList.toggle('showTooltip');
}

// Functie herschreven. Event listener op de knop.
document.querySelector('input[type=submit]').addEventListener('click', event => {
  console.log('Listened!');
  //Alles is verplicht, niet alles is ingevuld
  var inputs = document.querySelectorAll('input');

  const hasError = false;

  for (input of inputs) {
    if (input.value == '') {
      hasError = true;
    }
  }

  if (hasError) {
    alert('Je moet alles invullen!');
  }

  //Email check
  var emailInput = document.querySelector('#email2').value;
  if (emailInput.indexOf('@') == -1) {
    alert('Emailadres incorrect');
    hasError = true;
  }

  //Email validatie
  if (
    document.querySelector('#email1').value !==
    document.querySelector('#email2').value
  ) {
    alert('Emailadressen komen niet overeen!');
    hasError = true;
  }

  if (!hasError) alert('Gelukt!');
  // document.querySelector('form').submit();
});
