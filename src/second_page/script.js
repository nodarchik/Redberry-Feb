// Button styling
const photoField = document.getElementById("photo__id");
const fileButton = document.getElementById("fileBtn");

fileButton.addEventListener("click", function() {
  photoField.click();
});

// // Form validation
const form = document.getElementById("form");
const fnameField = document.getElementById("fname__id");
const lnameField = document.getElementById("lname__id");
const emailField = document.getElementById("email__id");
const phoneField = document.getElementById("phone__id");

const georgian = /^[ა-ჰ\s]+$/;
const redberry = /^[a-zA-Z0-9._%+-]+@redberry.ge$/;
const phonePattern =  /^\+995\s*\d{3}\s*\d{2}\s*\d{2}\s*\d{2}$/;
 
form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (fnameField.value.length < 2 || !georgian.test(fnameField.value)) {
    alert("გთხოვთ შეიყვანოთ სახელი მინიმუმ 2 ქართული სიმბოლოს გამოყენებით");
  }
  if (lnameField.value.length < 2 || !georgian.test(lnameField.value)){
    alert("გთხოვთ შეიყვანოთ გვარი მინიმუმ 2 ქართული სიმბოლოს გამოყენებით");
  }
  if (!photoField.value) {
    alert("სურათის ატვირთვა სავალდებულოა");
  }
  if (!redberry.test(emailField.value)) {
    alert("ემეილი უნდა მთავრდებოდეს @redberry.ge-თი");
  } 
  if (!phonePattern.test(phoneField.value)) {
    alert("ტელეფონის ნომერი უნდა შეესაბამებოდეს ქართული ნომრის ფორმატს");
  }
   else {
    alert("ყოჩაღ");
  }
});