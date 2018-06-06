//Global variables and page defaults on pageload
const title = document.getElementById('title')
const otherTitle = document.getElementById('other-title');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('colors-js-puns');
const colorOptions = color.querySelectorAll('option');
const punsColors = document.getElementsByClassName('puns');
const heartColors = document.getElementsByClassName('heart');
otherTitle.style.display = "none";
shirtColor.style.display = "none";


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
  shirtColor.style.display = "block";
  if (shirtDesign.value === "js puns") {
    punsColors.style.display = "none";
    heartColors.style.display = "display";
  } else if (shirtDesign.value === "heart js") {
    punsColors.style.display = "none";
    heartColors.style.display = "display";
  }
}
