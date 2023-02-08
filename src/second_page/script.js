const backButton1 = document.getElementById("button-back1");
const arrowImg = document.getElementById("arrow__img");
const positionInput = document.getElementById("position__id");
const employerInput = document.getElementById("employer__id");
const startDateInput = document.getElementById("start__id");
const endDateInput = document.getElementById("end__id");
const descriptionInput = document.getElementById("description__id");

// Event listener for form.
form.addEventListener("input", function (event) {
  // Prevent page refresh on submit button.
  event.preventDefault();
  // Form validation logic.
  if (positionInput.value.length < 2) {
    positionInput.style.border = "1px solid #EF5050";
  }
  if (positionInput.value.length > 2) {
    positionInput.style.border = "1px solid #98E37E";
  }
  if (employerInput.value.length < 2) {
    employerInput.style.border = "1px solid #EF5050";
  }
  if (employerInput.value.length > 2) {
    employerInput.style.border = "1px solid #98E37E";
  }
  if (!startDateInput.value) {
    startDateInput.style.border = "1px solid #EF5050";
  }
  if (startDateInput.value) {
    startDateInput.style.border = "1px solid #98E37E";
  }
  if (!endDateInput.value) {
    endDateInput.style.border = "1px solid #EF5050";
  }
  if (endDateInput.value) {
    endDateInput.style.border = "1px solid #98E37E";
  }
  if (!descriptionInput.value) {
    descriptionInput.style.border = "1px solid #EF5050";
  }
  if (descriptionInput.value) {
    descriptionInput.style.border = "1px solid #98E37E";
  }
});

// Back button, Clears localstorage.
arrowImg.onclick = function () {
  localStorage.clear();
  location.href = "../../index.html";
};
// Button to go back on personal info page
backButton1.onclick = function () {
  location.href = "../first_page/first.html";
};
