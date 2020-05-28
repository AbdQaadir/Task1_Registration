const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const pwd1 = document.querySelector("#password1").value;
  const pwd2 = document.querySelector("#password2").value;

  if (!name) {
    alert("Name must be filled out");
    return false;
  }
  if (!email) {
    alert("Email cannot be blank");
    return false;
  }
  if (pwd1.length < 8 || pwd2.length < 8) {
    alert("Password length cannot be less than 8");
    return false;
  }
}
