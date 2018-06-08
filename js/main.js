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
const total = document.getElementById('total');
const activities = document.getElementsByClassName('activities')[0];
const paymentMethod = document.getElementById('payment');
const credit = document.getElementById('credit-card');
const payPal = document.getElementById('payPal');
const bitCoin = document.getElementById('bitCoin');
let totalCost = 0;


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
//Styles disabled checkboxes accordingly
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


//Extracts the price from a specified individual activity
const individualCostOf = (selectedActivity) => {
  return parseInt(selectedActivity.substring(selectedActivity.indexOf('$') + 1));
}


//Pulls the cost from each activity selected and adds it to total const.
//Displays total cost at the bottom of the fieldset.
activities.addEventListener('click', (e) => {
  let selectedActivity = e.target.parentNode.textContent;
  if (e.target.checked == true) {
    totalCost += individualCostOf(selectedActivity);
  } else if (e.target.checked == false) {
    totalCost -= individualCostOf(selectedActivity);
  }

  total.textContent = "Total Cost: $" + totalCost;
});


//
const showPaymentInfo = () => {
  credit.className = "is-hidden";
  payPal.className = "is-hidden";
  bitCoin.className = "is-hidden";

  if (paymentMethod.value == "credit card") {
    credit.className = "";
  } else if (paymentMethod.value == "paypal") {
    payPal.className = "";
  } else if (paymentMethod.value == "bitcoin") {
    bitCoin.className = "";
  }
}
