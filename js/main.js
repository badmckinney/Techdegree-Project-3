//Global variables and page defaults on pageload
const title = document.getElementById('title')
const otherTitle = document.getElementById('other-title');
const shirtColorDiv = document.getElementById('colors-js-puns');
const colorSelector = document.getElementById('color');
const shirtDesign = document.getElementById('design');
const colorOptions = colorSelector.querySelectorAll('option');


otherTitle.style.display = "none";
shirtColorDiv.style.display = "none";


//Shows or hides the "other title" input field based on selected option
const showOtherTitle = () => {
  if (title.value === "other") {
    otherTitle.style.display = "block";
  } else {
    otherTitle.style.display = "none";
  }
}


//Stores the shirt themes description in a variable to be referenced.
//Shows color selector if a theme is chosen.
const changeColorOptions = () => {
    let shirtTheme;
    if (design.value === 'Select Theme') {
      shirtColorDiv.style.display = "none";
    } else if (design.value === 'js puns') {
      shirtTheme = 'JS Puns';
      shirtColorDiv.style.display = "block";
    } else if (design.value === 'heart js') {
      shirtTheme = 'I ♥ JS'
      shirtColorDiv.style.display = "block";
    }

//Matches shirt theme with colors associated with that theme.
//Changes the displayed color options based on the selected theme.
    colorOptions.forEach(colorOption => {
      if (colorOption.textContent.includes(shirtTheme)) {
        colorOption.style.display = "block";
      } else {
        colorOption.style.display = "none";
      }
    });



}
