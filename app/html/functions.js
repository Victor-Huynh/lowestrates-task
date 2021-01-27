var dropDownValues = [
  "Close Menu",
  "Insurance",
  "Mortgage",
  "Home Insurance",
  "Life Property Insurance",
  "Auto and Credit Cards",
  "Travel Insurance",
];
var valuesAdded = false;
var functionClicked = false;

function toggleMenu() {
  var htmlString =
    "<ul>" +
    dropDownValues
      .map((value) =>
        value === "Close Menu"
          ? `<button onclick=hideMenu()>${value}</button>`
          : `<button>${value}</button>`
      )
      .join("") +
    "</ul>";
  console.log(htmlString);
  document.getElementById("burgerMenu").innerHTML = htmlString;
  document.getElementById("burgerMenu").style.display = "block";
}

function hideMenu() {
  resetMenu();
  if (functionClicked) {
    document.getElementById("topInvis").scrollIntoView();
    functionClicked = false;
  }
  document.getElementById("burgerMenu").style.display = "none";
}

function addToMenu() {
  if (valuesAdded) {
    return;
  } else {
    dropDownValues.push("Loans", "Finance", "Debt");
    valuesAdded = true;
  }
  toggleMenu();
}

function resetMenu() {
  dropDownValues.splice(7, 3);
  valuesAdded = false;
}

function customJSFunction() {
  functionClicked = true;
  document.getElementById("pageBottom").scrollIntoView();
  addToMenu();
  toggleMenu();
}
