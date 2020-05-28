const submitBtn = document.querySelector("#submit");
const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const pwd1 = document.querySelector("#password1").value;
const pwd2 = document.querySelector("#password2").value;

submitBtn.addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();

  if (name === "") {
    alert("Name must be filled out");
    return false;
  }
  if (email === "") {
    alert("Email cannot be blank");
    return false;
  }
}
