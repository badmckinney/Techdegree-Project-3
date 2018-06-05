//Hides "other-title" input field by default. Shows IF "other" option is selected from drop down menu
const title = document.getElementById('title')
const otherTitle = document.getElementById('other-title');
otherTitle.style.display = "none";

function showOtherTitle () {
  if (title.value === "other") {
    otherTitle.style.display = "block";
  } else {
    otherTitle.style.display = "none";
  }
}
