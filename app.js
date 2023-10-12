const menuButton = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu-bar');


menuButton.addEventListener('click', () => {
    menuBar.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    const target = event.target;
    if (!menuBar.contains(target) && target !== menuButton) {
        menuBar.classList.remove('active');
    }
});

// form Validation

function validateForm() {
  var nameInput = document.getElementById("name");
  var phoneInput = document.getElementById("phone");
  var name = nameInput.value;
  var phone = phoneInput.value;

  var namePattern = /^[A-Za-z]+( [A-Za-z]+)*$/;
            var phonePattern = /^[0-9]+/; 

  if (!name.match(namePattern)) {
      alert("Name should contain only characters, and a space can be used for the last name.");
      nameInput.focus();
      return false;
  }

  if (!phone.match(phonePattern)) {
      alert("Phone should contain only numbers.");
      phoneInput.focus();
      return false;
  }

  alert("Form submitted successfully");
  return true;
}

function clearErrorMessages() {
  document.getElementById("name-error").textContent = "";
  document.getElementById("phone-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("description-error").textContent = "";
}

function displayError(fieldName, message) {
  document.getElementById(fieldName + "-error").textContent = message;
}