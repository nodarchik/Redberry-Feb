// Form validation Constants
const form = document.getElementById("form");
const fnameInput = document.getElementById("fname__id");
const lnameInput = document.getElementById("lname__id");
const photoInput = document.getElementById("photo__id");
const aboutInput = document.getElementById("about__id");
const emailInput = document.getElementById("email__id");
const phoneInput = document.getElementById("phone__id");
const fileButton = document.getElementById("fileBtn");
const arrowImg = document.getElementById("arrow__img");
const outputName = document.getElementById("output_name");
const outputAbout = document.getElementById("output_about");
const outputPhoto = document.getElementById("output_photo");
const outputEmail = document.getElementById("output_email");
const outputPhone = document.getElementById("output_phone");

// Constants for Regex
const georgian = /^[ა-ჰ\s]+$/;
const redberry = /^[a-zA-Z0-9._%+-]+@redberry.ge$/;
const phonePattern = /^\+995\s*\d{3}\s*\d{2}\s*\d{2}\s*\d{2}$/;

// Localstorage get inputs.
if (localStorage.getItem("fname")) {
  fnameInput.value = localStorage.getItem("fname");
}
if (localStorage.getItem("lname")) {
  lnameInput.value = localStorage.getItem("lname");
}
// if (localStorage.getItem("photo")) {
//   photoInput.value = localStorage.getItem('photo');
// }
if (localStorage.getItem("about")) {
  aboutInput.value = localStorage.getItem("about");
}
if (localStorage.getItem("email")) {
  emailInput.value = localStorage.getItem("email");
}
if (localStorage.getItem("phone")) {
  phoneInput.value = localStorage.getItem("phone");
}

// Event listener for form.
form.addEventListener("keyup", function (event) {
  // Prevent page refresh on submit button.
  event.preventDefault();

  // Constants to save input value.
  const fname = fnameInput.value;
  const lname = lnameInput.value;
  const about = aboutInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  // Save input data to localstorage.
  localStorage.setItem("fname", fname);
  localStorage.setItem("lname", lname);
  localStorage.setItem("about", about);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);



// Listen for changes on the input element
photoInput.addEventListener('change', async (event) => {
  // Get the selected file
  const file = event.target.files[0];

  // Convert the file to a Base64 encoded string
  const base64 = await toBase64(file);

  // Save the Base64 encoded string in local storage
  localStorage.setItem('photo', base64);
});

// Utility function to convert a file to a Base64 encoded string
async function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });
}



  // Display input simultenously.
  outputName.innerHTML = fname + " " + lname;
  outputAbout.innerHTML = about;
  outputEmail.innerHTML = email;
  outputPhone.innerHTML = phone;
  outputPhoto.setAttribute("src", "data:image/jpeg;base64," + localStorage.getItem("photo"));

  // // Form validation logic.
  // if (fnameInput.value.length < 2 || !georgian.test(fnameInput.value)) {
  //   alert("გთხოვთ შეიყვანოთ სახელი მინიმუმ 2 ქართული სიმბოლოს გამოყენებით");
  // }
  // if (lnameInput.value.length < 2 || !georgian.test(lnameInput.value)) {
  //   alert("გთხოვთ შეიყვანოთ გვარი მინიმუმ 2 ქართული სიმბოლოს გამოყენებით");
  // }
  // // if (!photoInput.value) {
  // //   alert("სურათის ატვირთვა სავალდებულოა");
  // // }
  // if (!redberry.test(emailInput.value)) {
  //   alert("ემეილი უნდა მთავრდებოდეს @redberry.ge-თი");
  // }
  // if (!phonePattern.test(phoneInput.value)) {
  //   alert("ტელეფონის ნომერი უნდა შეესაბამებოდეს ქართული ნომრის ფორმატს");
  // } else {
  //   document.getElementById("nextBtn").onclick = function () {
  //     location.href = "third.html";
  //   };
  // }
});

arrowImg.onclick = function () {
  localStorage.clear();
  location.href = "../../index.html";
};

// Button styling
fileButton.addEventListener("click", function () {
  photoInput.click();
});
