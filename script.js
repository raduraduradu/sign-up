const form = document.querySelector(".fields form");

form.addEventListener("submit", (e) => {
  if (form["password"].value === form["cpass"].value) {
    return true;
  }
  else {
    alert("Passwords don't match");
    e.preventDefault();
    return false;
  }
});
