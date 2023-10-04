// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
  let formData = {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  };
  return formData;
}

let btnSubmit = document.getElementById("submit-form");

function isNumber(zipCode) {
  return !isNaN(zipCode);
}

function checkboxIsChecked() {
  return handleGetFormData().status;
}

function validateFormData(obj) {
  return obj != null && isNumber(obj.zipCode) && checkboxIsChecked();
}

function submit() {
  let warn = document.getElementById("warning");
  if (validateFormData(handleGetFormData()) == false) {
    warn.innerHTML = "Periksa form anda sekali lagi";
  } else {
    warn.innerHTML = "";
  }
}

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(handleGetFormData());
  submit();
});

document.addEventListener("scroll", () => {
  let reveals = document.querySelectorAll(".reveal");
  let slides = document.querySelectorAll(".slide");
  const nav = document.querySelector("nav");
  for (let value of reveals) {
    let revealtop = value.getBoundingClientRect().top;
    //jika revealtop< windowHeight - revealpoint
    if (revealtop < window.innerHeight - 80) {
      value.classList.add("active");
    } else {
      value.classList.remove("active");
    }
  }
  for (let value of slides) {
    let revealtop = value.getBoundingClientRect().top;
    //jika revealtop< windowHeight - revealpoint
    if (revealtop < window.innerHeight - 80) {
      value.classList.add("active");
    } else {
      value.classList.remove("active");
    }
  }
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
