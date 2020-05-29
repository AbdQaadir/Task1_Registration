const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", validateForm);

function displayError(id, message) {
  document.querySelector(`#${id}`).style.background = "red";
  document.querySelector(`#${id}`).innerHTML = message;
  setTimeout(() => {
    document.querySelector(`#${id}`).innerHTML = "";
    document.querySelector(`#${id}`).style.background = "none";
  }, 3000);
}
function validateForm(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const number = document.querySelector("#number").value;
  const pwd1 = document.querySelector("#password1").value;
  const pwd2 = document.querySelector("#password2").value;

  if (!name) {
    displayError("name-err", "Name cannot be blank");
  }
  if (email === "") {
    displayError("email-err", "Email cannot be blank");
  }
  if (!email.split("").includes("@")) {
    displayError("email-err", "Invalid email supplied");
  }
  if (!pwd1) {
    displayError("password-err", "Password cannot be blank");
  }
  if (pwd1.length < 8) {
    displayError("password-err", "Password cannot be less than 8 characters");
  }
  if (pwd1 !== pwd2) {
    displayError("password-err", "Password doesn't match");
  }
}
