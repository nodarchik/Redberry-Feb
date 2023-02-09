// Constants for Personal info page
// Inputs
const form = document.getElementById("form");
const fnameInput = document.getElementById("fname__id");
const lnameInput = document.getElementById("lname__id");
const photoInput = document.getElementById("photo__id");
const aboutInput = document.getElementById("about__id");
const emailInput = document.getElementById("email__id");
const phoneInput = document.getElementById("phone__id");
const fileButton = document.getElementById("fileBtn");
const arrowImg = document.getElementById("arrow__img");
// Outputs
const outputName = document.getElementById("output_name");
const outputAbout = document.getElementById("output_about");
const outputPhoto = document.getElementById("output_photo");
const outputEmail = document.getElementById("output_email");
const outputPhone = document.getElementById("output_phone");
const firstPage = document.getElementById("form-first__page");
const nextPage = document.getElementById("nextBtn");

// Constants for Regex
const georgian = /^[ა-ჰ\s]+$/;
const redberry = /^[a-zA-Z0-9._%+-]+@redberry.ge$/;
const phonePattern = /^\+995\s*\d{3}\s*\d{2}\s*\d{2}\s*\d{2}$/;

// constants for experience page
// Inputs
const backButton1 = document.getElementById("button-back1");
const moreButton = document.getElementById("button-more");
const positionInput = document.getElementById("position__id");
const employerInput = document.getElementById("employer__id");
const startDateInput = document.getElementById("start__id");
const endDateInput = document.getElementById("end__id");
const descriptionInput = document.getElementById("description__id");
const personalPage = document.getElementById("parent__personal");
const experiencePage = document.getElementById("parent__experience");
const experienceClone = document.getElementById("experience_clone");
// Outputs
const outputPositionEmployer = document.getElementById("output-position__employer");
const outputStartEnd = document.getElementById("output-start__end");
const outputDescription = document.getElementById("output__description");


// Localstorage get inputs (exept photo input,see it little bit down).
if (localStorage.getItem("fname")) {
  fnameInput.value = localStorage.getItem("fname");
}
if (localStorage.getItem("lname")) {
  lnameInput.value = localStorage.getItem("lname");
}
if (localStorage.getItem("about")) {
  aboutInput.value = localStorage.getItem("about");
}
if (localStorage.getItem("email")) {
  emailInput.value = localStorage.getItem("email");
}
if (localStorage.getItem("phone")) {
  phoneInput.value = localStorage.getItem("phone");
}
if (localStorage.getItem("position")) {
  positionInput.value = localStorage.getItem("position");
}
if (localStorage.getItem("employer")) {
  employerInput.value = localStorage.getItem("employer");
}
if (localStorage.getItem("startDate")) {
  startDateInput.value = localStorage.getItem("startDate");
}
if (localStorage.getItem("endDate")) {
  endDateInput.value = localStorage.getItem("endDate");
}
if (localStorage.getItem("description")) {
  descriptionInput.value = localStorage.getItem("description");
}

// Event listener for form.
form.addEventListener("input", function (event) {
  // Prevent page refresh on submit button.
  event.preventDefault();

  // Constants to save input value of first page.
  const fname = fnameInput.value;
  const lname = lnameInput.value;
  const about = aboutInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  // Constants to save input value of second page.
  const position = positionInput.value;
  const employer = employerInput.value;
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const description = descriptionInput.value;

  // Save first page input data to localstorage.
  localStorage.setItem("fname", fname);
  localStorage.setItem("lname", lname);
  localStorage.setItem("about", about);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  // Save second page input data to localstorage.
  localStorage.setItem("position", position);
  localStorage.setItem("employer", employer);
  localStorage.setItem("startDate", startDate);
  localStorage.setItem("endDate", endDate);
  localStorage.setItem("description", description);


  // Listen for changes on the input element
  photoInput.addEventListener("input", async (event) => {
    // Get the selected file
    const file = event.target.files[0];

    // Convert the file to a Base64 encoded string
    const base64 = await toBase64(file);

    // Save the Base64 encoded string in local storage
    localStorage.setItem("photo", base64);
  });

  // Utility function to convert a file to a Base64 encoded string
  async function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  }
  // Display fist page input simultenously.
  outputName.innerHTML = fname + " " + lname;
  outputAbout.innerHTML = about;
  outputEmail.innerHTML = email;
  outputPhone.innerHTML = phone;
  outputPhoto.setAttribute(
    "src",
    "data:image/jpeg;base64," + localStorage.getItem("photo")
  );
  
  // Display second page input simultenously.
  
  outputPositionEmployer.innerHTML = position + ", " + employer;
  outputStartEnd.innerHTML = startDate + " - " + endDate;
  outputDescription.innerHTML = description;

  // Form validation logic for first page.
  
  if (fnameInput.value.length < 2 && !georgian.test(fnameInput.value)) {
    fnameInput.style.border = "1px solid #EF5050";
  }
  if (fnameInput.value.length >= 2 && georgian.test(fnameInput.value)) {
    fnameInput.style.border = "1px solid #69f2bd";
  }
  if (lnameInput.value.length < 2 && !georgian.test(lnameInput.value)) {
    lnameInput.style.border = "1px solid #EF5050";
  }
  if (lnameInput.value.length >= 2 && georgian.test(lnameInput.value)) {
    lnameInput.style.border = "1px solid #69f2bd";
  }
  if (!photoInput.value) {
    photoInput.style.border = "1px solid #EF5050";
  }
  if (photoInput.value) {
    photoInput.style.border = "1px solid #69f2bd";
  }
  if (!redberry.test(emailInput.value)) {
    emailInput.style.border = "1px solid #EF5050";
  }
  if (redberry.test(emailInput.value)) {
    emailInput.style.border = "1px solid #69f2bd";
  }
  if (!phonePattern.test(phoneInput.value)) {
    phoneInput.style.border = "1px solid #EF5050";
  }
  if (phonePattern.test(phoneInput.value)) {
    phoneInput.style.border = "1px solid #69f2bd";
  }

  // Form validation logic for second page.
  
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

// Image input button working on click.
fileButton.addEventListener("click", function () {
  photoInput.click();
});

// Button to go on experience form page.
nextPage.onclick = function () {
  personalPage.style.display = "none";
  experiencePage.style.display = "block";
};

// Back button, Clears localstorage.
arrowImg.onclick = function () {
  localStorage.clear();
  location.href = "../../index.html";
};
// Button to go back on personal info page
backButton1.onclick = function () {
  personalPage.style.display = "block";
  experiencePage.style.display = "none";
};

document.querySelector('#button-more').addEventListener('click', function() {
  // get the original form field
  var original = document.querySelector('#experience_clone');
  // create a new div element that will be the duplicate
  var clone = original.cloneNode(true);
  // give the new element a unique id
  clone.id = "experience_clone_" + Math.floor(Math.random() * 100000);
  // insert the new form field after the original
  original.parentNode.insertBefore(clone, original.nextSibling);
});