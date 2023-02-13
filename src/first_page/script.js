// Constants for Personal info page
// Buttons
const nextButton = document.getElementById("button-next");
const arrowButton = document.getElementById("arrow__button");

// Inputs
const form = document.getElementById("form");
const fnameInput = document.getElementById("fname__id");
const lnameInput = document.getElementById("lname__id");
const photoInput = document.getElementById("photo__id");
const aboutInput = document.getElementById("about__id");
const emailInput = document.getElementById("email__id");
const phoneInput = document.getElementById("phone__id");
const fileButton = document.getElementById("fileBtn");
// Outputs
const outputName = document.getElementById("output_name");
const outputAbout = document.getElementById("output_about");
const outputPhoto = document.getElementById("output_photo");
const outputEmail = document.getElementById("output_email");
const outputEmailImg = document.getElementById("output_email-img");
const outputPhone = document.getElementById("output_phone");
const outputPhoneImg = document.getElementById("output_phone-img");
const firstPage = document.getElementById("form-first__page");

// Constants for Regex
const georgian = /^[ა-ჰ\s]+$/;
const redberry = /^[a-zA-Z0-9._%+-]+@redberry.ge$/;
const phonePattern = /^\+995\s*\d{3}\s*\d{2}\s*\d{2}\s*\d{2}$/;

// constants for experience page
// Buttons
const backButton1 = document.getElementById("button-back1");
const nextButton2 = document.getElementById("button-next2");
const moreButton = document.getElementById("button-more");
const arrowButton2 = document.getElementById("arrow__button2");
// Inputs
const positionInput = document.getElementById("position__id");
const employerInput = document.getElementById("employer__id");
const startDateInput = document.getElementById("start__id");
const endDateInput = document.getElementById("end__id");
const descriptionInput = document.getElementById("description__id");
const personalPage = document.getElementById("parent__personal");
const experiencePage = document.getElementById("parent__experience");
// Outputs
const outputPositionEmployer = document.getElementById(
  "output-position__employer"
);
const outputStartEnd = document.getElementById("output-start__end");
const outputDescription = document.getElementById("output__description");

// Constants for education page
// Buttons
const backButton2 = document.getElementById("button-back2");
const buttonSubmit = document.getElementById("button-submit");
const moreButton2 = document.getElementById("button-more__education");
const arrowButton3 = document.getElementById("arrow__button3");
// Inputs
const educationPage = document.getElementById("parent__education");
const universityInput = document.getElementById("university__id");
const graduationInput = document.getElementById("graduation__id");
const educationDescriptionInput = document.getElementById(
  "education-description__id"
);
const degreeInput = document.getElementById("degree__id");
// Outputs
const outputUniversityDegree = document.getElementById(
  "output-university__degree"
);
const outputGraduation = document.getElementById("output-graduation");
const outputEducationDescription = document.getElementById(
  "output-education__description"
);

// Fetch  degree options on education page
const getData = async () => {
  const response = await fetch(
    "https://resume.redberryinternship.ge/api/degrees",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  data.forEach((degree) => {
    const option = document.createElement("option");
    option.value = degree.id;
    option.textContent = degree.title;
    degreeInput.appendChild(option);
  });
};
getData();

// Buttons
// Back buttons, Clears localstorage.
arrowButton.onclick = function () {
  localStorage.clear();
  location.href = "../../index.html";
};
arrowButton2.onclick = function () {
  localStorage.clear();
  location.href = "../../index.html";
};
arrowButton3.onclick = function () {
  localStorage.clear();
  location.href = "../../index.html";
};

// Back buttons
// Button to go back on personal info page
backButton1.onclick = function () {
  personalPage.style.display = "block";
  experiencePage.style.display = "none";
  educationPage.style.display = "none";
};
// Button to go back on experience info page
backButton2.onclick = function () {
  personalPage.style.display = "none";
  experiencePage.style.display = "block";
  educationPage.style.display = "none";
};
// Image input button working on click.
fileButton.addEventListener("click", function () {
  photoInput.click();
});

// Localstorage get inputs (exept photo input,see it little bit down).
// Get inputs of About page.
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
// Get inputs of Experience page.
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
// Get inputs of Education page.
if (localStorage.getItem("university")) {
  universityInput.value = localStorage.getItem("university");
}
if (localStorage.getItem("degree")) {
  degreeInput.value = localStorage.getItem("degree");
}
if (localStorage.getItem("graduation")) {
  graduationInput.value = localStorage.getItem("graduation");
}
if (localStorage.getItem("education")) {
  educationDescriptionInput.value = localStorage.getItem("education");
}

// Save file input data
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
// Event listener for form.
form.addEventListener("input", function (event) {
  // Prevent page refresh on submit button.
  event.preventDefault();

  // Constants to save input value of About page.
  const fname = fnameInput.value;
  const lname = lnameInput.value;
  const about = aboutInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  // Constants to save input value of Experience page.
  const position = positionInput.value;
  const employer = employerInput.value;
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const description = descriptionInput.value;
  // Constants to save input value of Education page
  const university = universityInput.value;
  const graduation = graduationInput.value;
  const education = educationDescriptionInput.value;
  // Gets selected option value
  const selectedOption = degreeInput.options[degreeInput.selectedIndex];
  const degree = selectedOption.textContent;

  // Save About page input data to localstorage.
  localStorage.setItem("fname", fname);
  localStorage.setItem("lname", lname);
  localStorage.setItem("about", about);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  // Save Experience page input data to localstorage.
  localStorage.setItem("position", position);
  localStorage.setItem("employer", employer);
  localStorage.setItem("startDate", startDate);
  localStorage.setItem("endDate", endDate);
  localStorage.setItem("description", description);
  // Save Education page input data to localstorage.
  localStorage.setItem("university", university);
  localStorage.setItem("graduation", graduation);
  localStorage.setItem("education", education);
  localStorage.setItem("degree", degree);

  // Display About page input simultenously.
  outputName.innerHTML = fname + " " + lname;
  outputAbout.innerHTML = about;
  outputEmail.innerHTML = email;
  outputPhone.innerHTML = phone;
  outputPhoto.setAttribute(
    "src",
    "data:image/jpeg;base64," + localStorage.getItem("photo")
  );
  // Display Experience page input simultenously.
  outputPositionEmployer.innerHTML = position + ", " + employer;
  outputStartEnd.innerHTML = startDate + " - " + endDate;
  outputDescription.innerHTML = description;
  // Display Education page input simultenously.
  outputUniversityDegree.innerHTML = university + ", " + degree;
  outputGraduation.innerHTML = graduation;
  outputEducationDescription.innerHTML = education;

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
    outputPhoto.style.display = "block";
  }
  if (!redberry.test(emailInput.value)) {
    emailInput.style.border = "1px solid #EF5050";
  }
  if (redberry.test(emailInput.value)) {
    emailInput.style.border = "1px solid #69f2bd";
    outputEmailImg.style.display = "inline-block";
  }
  if (!phonePattern.test(phoneInput.value)) {
    phoneInput.style.border = "1px solid #EF5050";
  }
  if (phonePattern.test(phoneInput.value)) {
    phoneInput.style.border = "1px solid #69f2bd";
    outputPhoneImg.style.display = "inline-block";
  }
  if (
    fnameInput.value.length >= 2 &&
    georgian.test(fnameInput.value) &&
    lnameInput.value.length >= 2 &&
    georgian.test(lnameInput.value) &&
    photoInput.value &&
    redberry.test(emailInput.value) &&
    phonePattern.test(phoneInput.value)
  ) {
    // Button to go on experience form page.
    nextButton.onclick = function () {
      personalPage.style.display = "none";
      experiencePage.style.display = "block";
    };
  }
  if (positionInput.value.length < 2) {
    // Form validation logic for second page.
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
  if (
    positionInput.value.length > 2 &&
    employerInput.value.length > 2 &&
    startDateInput.value &&
    endDateInput.value &&
    descriptionInput.value
  ){
    nextButton2.onclick = function () {
      experiencePage.style.display = "none";
      educationPage.style.display = "block";
    };
  }
    if (universityInput.value.length < 2) {
      // Form validation logic for third page
      universityInput.style.border = "1px solid #EF5050";
    }
  if (universityInput.value.length > 2) {
    universityInput.style.border = "1px solid #98E37E";
  }
  if (!graduationInput.value) {
    graduationInput.style.border = "1px solid #EF5050";
  }
  if (graduationInput.value) {
    graduationInput.style.border = "1px solid #98E37E";
  }
  if (!educationDescriptionInput.value) {
    educationDescriptionInput.style.border = "1px solid #EF5050";
  }
  if (educationDescriptionInput.value) {
    educationDescriptionInput.style.border = "1px solid #98E37E";
  }
  if (!degreeInput.value) {
    degreeInput.style.border = "1px solid #EF5050";
  }
  if (degreeInput.value) {
    degreeInput.style.border = "1px solid #98E37E";
  }
});

// Clones Experience inputs
document.querySelector("#button-more").addEventListener("click", function () {
  // Get the element you want to clone
  var originalDiv = document.getElementById("experience_clone");

  // Clone the element
  var clone = originalDiv.cloneNode(true);
  // Find all input elements in the cloned div
  var inputs = clone.getElementsByTagName("input");
  // Loop through each input and give it a new ID
  for (var i = 0; i < inputs.length; i++) {
    // Generate a new id for each input
    inputs[i].id = inputs[i].id + "-" + i;
  }
  // Add the cloned div to the page
  originalDiv.parentNode.insertBefore(clone, originalDiv.nextSibling);
});

// Clones Education inputs
document
  .querySelector("#button-more__education")
  .addEventListener("click", function () {
    // Get the element you want to clone
    var originalDiv = document.getElementById("education_clone");

    // Clone the element
    var clone = originalDiv.cloneNode(true);
    // Find all input elements in the cloned div
    var inputs = clone.getElementsByTagName("input");
    // Loop through each input and give it a new ID
    for (var i = 0; i < inputs.length; i++) {
      // Generate a new id for each input
      inputs[i].id = inputs[i].id + "-" + i;
    }
    // Add the cloned div to the page
    originalDiv.parentNode.insertBefore(clone, originalDiv.nextSibling);
  });

var photo;

// Load the photo object
photo = localStorage.getItem("photo");

// Create a FormData object to send the photo
const formData = new FormData();
const experiences = [];
for (let i = 0; i < experiences.length; i++) {
  const experience = {
    position: positionInput[i].value,
    employer: employerInput[i].value,
    start_date: startDateInput[i].value,
    due_date: endDateInput[i].value,
    description: descriptionInput[i].value,
  };
  experiences.push(experience);
}
const educations = [];
for (let i = 0; i < educations.length; i++) {
  const education = {
    institute: universityInput[i].value,
    degree_id: 2,
    due_date: graduationInput[i].value,
    description: educationDescriptionInput[i].value,
  };
  educations.push(education);
}
// Append the other payload fields to the FormData object
formData.append("name", fnameInput.value);
formData.append("surname", lnameInput.value);
formData.append("email", emailInput.value);
formData.append("phone_number", phoneInput.value);
formData.append("about_me", aboutInput.value);
formData.append("image", photo);
// Append the experiences and educations arrays to the FormData object
formData.append("experiences", JSON.stringify(experiences));
formData.append("educations", JSON.stringify(educations));

// console.log(experiences);
// // Convert the base64 encoded data to binary data
// const binaryData = atob(photo);

// // Create a new Uint8Array with the binary data
// const byteArray = new Uint8Array(binaryData.length);
// for (let i = 0; i < binaryData.length; i++) {
//   byteArray[i] = binaryData.charCodeAt(i);
// }

// // Convert the binary data to a Blob object
// const photoBlob = new Blob([byteArray], { type: "image/jpeg" });

// // Use the Blob object in your FormData object
// formData = new FormData();
// formData.append("image", photoBlob, photo);

// send the FormData object to the API using Axios
axios
  .post("https://resume.redberryinternship.ge/api/cvs", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
