//Global variables and page defaults on pageload
const title = document.getElementById('title')
const otherTitle = document.getElementById('other-title');
const shirtColorDiv = document.getElementById('colors-js-puns');
const colorSelector = document.getElementById('color');
const shirtDesign = document.getElementById('design');
const colorOptions = colorSelector.querySelectorAll('option');
const total = document.getElementById('total');
const activities = document.getElementsByClassName('activities')[0];
const activityOptions = document.querySelectorAll('input[type="checkbox"]');
const paymentMethod = document.getElementById('payment');
const credit = document.getElementById('credit-card');
const payPal = document.getElementById('payPal');
const bitCoin = document.getElementById('bitCoin');
const nameField = document.getElementById('name');
const mailField = document.getElementById('mail');
const submitButton = document.getElementById('submit');
const form = document.querySelector('form');
let totalCost = 0;
let valid = false;


otherTitle.style.display = "none";
shirtColorDiv.style.display = "none";


/*===================*/
/*  ERROR MESSAGES   */
/*===================*/

//Creates error messages
//Appends the error messages to the page and hides them by default
const nameError = document.createElement('h4');
const mailError = document.createElement('h4');
const activityError = document.createElement('h4');
const creditError = document.createElement('h4');
const zipError = document.createElement('h4');
const cvvError = document.createElement('h4');

nameError.className = "is-hidden";
nameField.parentElement.insertBefore(nameError, nameField);

mailError.className = "is-hidden";
mailField.parentElement.insertBefore(mailError, mailField);

activityError.className = "is-hidden";
activityOptions[0].parentElement.insertBefore(activityError, activityOptions[0]);
activityError.textContent = "Please choose at least one activity";

/*=============*/
/*  JOB ROLE   */
/*=============*/

//Shows or hides the "other title" input field based on selected option
title.addEventListener ("change", (event) => {
  if (title.value === "other") {
    otherTitle.style.display = "block";
  } else {
    otherTitle.style.display = "none";
  }
});

/*==================*/
/*   T-SHIRT INFO   */
/*==================*/

//Creates a variable and stores the shirt themes description in that variable to be referenced.
//Displays color selector on page if a theme is chosen.
//Sets default color option to first available color in the list.
shirtDesign.addEventListener ('change', (event) => {
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
});
/*=============================*/
/*   REGISTER FOR ACTIVITIES   */
/*=============================*/

//Disables conflicting activities when choosing workshops
//Styles disabled checkboxes accordingly
activities.addEventListener ('change', (event) => {
  if (activityOptions[1].checked) {
    activityOptions[3].disabled = true;
    activityOptions[3].parentElement.style.color = "slategrey";
  } else {
    activityOptions[3].disabled = false;
    activityOptions[3].parentElement.style.color = "#000"
  }

  if (activityOptions[3].checked) {
    activityOptions[1].disabled = true;
    activityOptions[1].parentElement.style.color = "slategrey";
  } else {
    activityOptions[1].disabled = false;
    activityOptions[1].parentElement.style.color = "#000"
  }

  if (activityOptions[2].checked) {
    activityOptions[4].disabled = true;
    activityOptions[4].parentElement.style.color = "slategrey";
  } else {
    activityOptions[4].disabled = false;
    activityOptions[4].parentElement.style.color = "#000"
  }

  if (activityOptions[4].checked) {
    activityOptions[2].disabled = true;
    activityOptions[2].parentElement.style.color = "slategrey";
  } else {
    activityOptions[2].disabled = false;
    activityOptions[2].parentElement.style.color = "#000"
  }

  //Reference the checked() function to validate activity field
  //Displays or hides error message accordingly
  if (checked() === false) {
    activityError.className = "error";
  } else {
    activityError.className = "is-hidden";
  }
});

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

/*==================*/
/*   PAYMENT INFO   */
/*==================*/

//Resets all payment information to hidden
//Displays the information for the selected payment method
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

/*=====================*/
/*   FORM VALIDATION   */
/*=====================*/

//Validates NAME field
let validName;
nameField.placeholder = "Enter your name";
nameField.required = true;
nameField.autofocus = true;
nameField.pattern = "^[a-zA-Z ]{2,30}$";
nameField.addEventListener ("keyup", () => {
  if (nameField.validity.valid == false) {
    validName = false;
    nameField.className = "invalid";
    nameError.className = "error"
    nameError.textContent = "Please enter a valid name";
  } else if (nameField.validity.valid == true) {
    validName = true;
    nameField.className = "";
    nameError.className = "is-hidden";
  }
});

//Validates EMAIL field
let validMail;
mailField.placeholder = "email@example.com";
mailField.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$";
mailField.required = true;
mailField.addEventListener ("keyup", (event) => {
  if (mailField.validity.valid == false) {
    validMail = false;
    mailField.className = "invalid";
    mailError.className = "error";
    mailError.textContent = "Please enter a valid email address";
  } else if (mailField.validity.valid == true) {
    mailField.className = "";
    mailError.className = "is-hidden";
    validMail = true;
  }
});

//Validates ACTIVITY field
//Creates a function to check if one of the activity options is is checked.
const checked = () => {
  let isChecked = false;
  activityOptions.forEach(option => {
    if (option.checked) isChecked = true;
  });
  return isChecked;
}


//Validates CREDIT CARD INFO







/*form.addEventListener('submit', (event) => {
  let checked;

  activityOptions.forEach (option => {
    if (option.checked) checked = true;
  });


  if (checked === true) {
    activityError.className = "is-hidden";
    activityError.className = "error";
  } else {
    event.preventDefault();
    activityError.className = "error";
  }
});*/
