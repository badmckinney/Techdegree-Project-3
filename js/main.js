//Global variables and page defaults on pageload
const title = document.getElementById('title')
const otherTitle = document.getElementById('other-title');
const shirtColorDiv = document.getElementById('colors-js-puns');
const shirtColorSelector = document.getElementById('color');
const shirtDesign = document.getElementById('design');
const colorOptions = shirtColorSelector.querySelectorAll('option');


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


//Changes the displayed color options based on the selected design option
const changeColorOptions = () => {
    let shirtTheme;
    if (design.value === 'Select Theme') {
      shirtColorDiv.style.display = "none";
    } else if (design.value === 'js puns') {
      shirtTheme = 'JS Puns';
      shirtColorDiv.style.display = "block";
    } else if (design.value === 'heart js') {
      shirtTheme = 'I &#9829; JS'
      shirtColorDiv.style.display = "block";
    }

    for (i = 0; i < colorOptions.length; i += 1) {
      if option[i].textContent.includes(shirtTheme) {
        option[i].style.display = "block";
      } else {
        option[i].style.display = "none";
      }
    }
}
