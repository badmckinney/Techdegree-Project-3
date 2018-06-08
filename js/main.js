//Global variables and page defaults on pageload
const title = document.getElementById('title')
const otherTitle = document.getElementById('other-title');
const shirtColorDiv = document.getElementById('colors-js-puns');
const colorSelector = document.getElementById('color');
const shirtDesign = document.getElementById('design');
const colorOptions = colorSelector.querySelectorAll('option');
const jsFrame = document.getElementById('jsFrame');
const jsLibs = document.getElementById('jsLibs');
const express = document.getElementById('express');
const node = document.getElementById('node');


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


//Creates a variable and stores the shirt themes description in that variable to be referenced.
//Displays color selector on page if a theme is chosen.
//Sets default color option to first available color in the list.
const changeColorOptions = () => {
    let shirtTheme;
    if (design.value === 'Select Theme') {
      shirtColorDiv.style.display = "none";
    } else if (design.value === 'js puns') {
      shirtTheme = 'JS Puns';
      shirtColorDiv.style.display = "block";
      color.value = "cornflowerblue";
    } else if (design.value === 'heart js') {
      shirtTheme = 'I ♥ JS'
      shirtColorDiv.style.display = "block";
      color.value = "tomato";
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

//Disables conflicting activities when choosing workshops
const disableConflicts = () => {
  if (jsFrame.checked === true) {
    express.disabled = true;
    express.parentElement.style.color = "slategrey";
  } else {
    express.disabled = false;
    express.parentElement.style.color = "#000"
  }

  if (express.checked === true) {
    jsFrame.disabled = true;
    jsFrame.parentElement.style.color = "slategrey";
  } else {
    jsFrame.disabled = false;
    jsFrame.parentElement.style.color = "#000"
  }

  if (jsLibs.checked === true) {
    node.disabled = true;
    node.parentElement.style.color = "slategrey";
  } else {
    node.disabled = false;
    node.parentElement.style.color = "#000"
  }

  if (node.checked === true) {
    jsLibs.disabled = true;
    jsLibs.parentElement.style.color = "slategrey";
  } else {
    jsLibs.disabled = false;
    jsLibs.parentElement.style.color = "#000"
  }
}
