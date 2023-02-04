// Form validation Constants
const form = document.getElementById("form");
const fnameInput = document.getElementById("fname__id");
const lnameInput = document.getElementById("lname__id");
const photoInput = document.getElementById("photo__id");
const aboutInput = document.getElementById("about__id");
const emailInput = document.getElementById("email__id");
const phoneInput = document.getElementById("phone__id");
const fileButton = document.getElementById("fileBtn");
// Constants for Regex
const georgian = /^[ა-ჰ\s]+$/;
const redberry = /^[a-zA-Z0-9._%+-]+@redberry.ge$/;
const phonePattern =  /^\+995\s*\d{3}\s*\d{2}\s*\d{2}\s*\d{2}$/;

// Form validation localstorage get inputs.
if (localStorage.getItem("fname")) {
  fnameInput.value = localStorage.getItem("fname");
}
if (localStorage.getItem("lname")) {
  lnameInput.value = localStorage.getItem("lname");
}
// if (localStorage.getItem("photo")) {
//   photoInput.value = localStorage.getItem("photo");
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


// photoInput.addEventListener("change", function () {
//   const file = photoInput.files[0];

//   // Check if file is an image
//   if (!file.type.startsWith("image/")) {
//     return;
//   }

//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function () {
//     // Save the photo data as a base64 string to local storage
//     localStorage.setItem("photo", reader.result);
//   };
// });
// const photoData = localStorage.getItem("photo");

// if (photoData) {
//   const photoImg = document.createElement("img");
//   photoImg.src = photoData;
//   document.body.appendChild(photoImg);
// }






// Event listener for form.
form.addEventListener("submit", function(event) {

// Prevent page refresh on submit button.
  event.preventDefault();

// Constants to save input value.
  const fname = fnameInput.value;
  const lname = lnameInput.value;
  // const photo = photoInput.value;
  const about = aboutInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

// Save input data to localstorage.
  localStorage.setItem("fname", fname);
  localStorage.setItem("lname", lname);
  // localStorage.setItem("photo", photo);
  localStorage.setItem("about", about);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);

// Form validation logic.
  if (fnameInput.value.length < 2 || !georgian.test(fnameInput.value)) {
    alert("გთხოვთ შეიყვანოთ სახელი მინიმუმ 2 ქართული სიმბოლოს გამოყენებით");
  }
  if (lnameInput.value.length < 2 || !georgian.test(lnameInput.value)){alert("გთხოვთ შეიყვანოთ გვარი მინიმუმ 2 ქართული სიმბოლოს გამოყენებით");
  }
  // if (!photoInput.value) {
  //   alert("სურათის ატვირთვა სავალდებულოა");
  // }
  if (!redberry.test(emailInput.value)) {
    alert("ემეილი უნდა მთავრდებოდეს @redberry.ge-თი");
  } 
  if (!phonePattern.test(phoneInput.value)) {
    alert("ტელეფონის ნომერი უნდა შეესაბამებოდეს ქართული ნომრის ფორმატს");
  }
  else {
    document.getElementById("nextBtn").onclick = function () {
      location.href = "third.html";
  };
  }
});

// Button styling
fileButton.addEventListener("click", function() {
  photoInput.click();
});