// setup menu
var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-menu-main-mobile');
var menuContainer = document.querySelector('#menu-main-mobile');
var hamburgerIcon = document.querySelector('.hamburger');
if (menuTrigger !== null) {
  menuTrigger.addEventListener('click', function () {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  });
}

// dark light theme logic
const storageKey = 'theme-preference' // key to use in local storage
const onClick = () => {
  // flip current value
  theme.value = theme.value === 'light' ?
    'dark' :
    'light'
  setPreference()
}
// get color preference from local storage
const getPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return 'light' // default to light
}
// set the preference in local storage and reflect changes
const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}
// reflect the changes in theme
const reflectPreference = () => {
  document.firstElementChild
    .setAttribute('data-theme', theme.value)
  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}
// maintains the theme value
const theme = {
  value: getPreference(),
}
// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference()
  // now this script can find and listen for clicks on the control
  document
    .querySelector('#theme-toggle')
    .addEventListener('click', onClick)
}