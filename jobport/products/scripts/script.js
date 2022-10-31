// URL system
const currentURL = window.location.pathname;

function setNavigation() {
  var allNavOptions = ['oplossingen', 'platform', 'pricing'];

  for (i = 0; i < allNavOptions.length; i++) {
    if ((isActive = currentURL.includes(allNavOptions[i]))) {
      document.getElementById('btn-' + allNavOptions[i]).classList.add('is-current');
    }
  }
}

// Navigation system

var activeLink;
var navigationActive;
var hasNavigation;
var navOptions = ['oplossingen', 'platform'];

function handleNavigation(action) {
  let clickedLink = action;
  let navStatusDesired;

  if (activeLink == clickedLink && hasNavigation == true) {
    clickedLink = undefined;
  }

  if (navOptions.includes(clickedLink)) {
    hasNavigation = navStatusDesired = true;
  } else {
    hasNavigation = navStatusDesired = false;
  }

  toggleSection(clickedLink);
  toggleNav(navStatusDesired);

  activeLink = clickedLink; // Set active link
}

function toggleSection(clickedLink) {
  console.log('Toggling for ' + clickedLink);

  for (i = 0; i < navOptions.length; i++) {
    if (navOptions[i] === clickedLink) {
      document
        .getElementById('js-trigger-nav-' + navOptions[i])
        .classList.add('is-visible');
      console.log('Added is-visible to ' + navOptions[i]);

      document
        .getElementById('btn-' + navOptions[i])
        .classList.add('is-active');
    } else {
      document
        .getElementById('js-trigger-nav-' + navOptions[i])
        .classList.remove('is-visible');
      console.log('Removed is-visible to ' + navOptions[i]);

      document
        .getElementById('btn-' + navOptions[i])
        .classList.remove('is-active');
    }
  }
}

function toggleNav(navStatusDesired) {
  // Toggle classList if desired
  if (!navigationActive === navStatusDesired) {
    document.getElementById('js-trigger-nav').classList.toggle('is-visible'); // Toggle navigation
    document
      .getElementById('js-trigger-overlay')
      .classList.toggle('is-visible'); // Toggle overlay
    console.log('Toggled navigation');
  }

  // Set navigationActive
  navigationActive = document
    .getElementById('js-trigger-nav')
    .classList.contains('is-visible');
}
