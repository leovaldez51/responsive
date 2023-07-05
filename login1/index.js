var email = document.getElementById("email");
var input = document.form1.email;
var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let ValidateEmail = () => {
  if (!input.value.match(validRegex)) {
    alert("Not a valid email address!");
  }
};
