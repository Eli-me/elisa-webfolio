// Includi EmailJS (via CDN in HTML) o con npm
emailjs.init("CGvp-zYRIUMHXuJXX"); // sostituisci con il tuo

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_pnuquhf", "template_c4vt67u", this)
    .then(() => {
      showCustomAlert("Thank you! Your message is on its way.");
    }, (error) => {
      alert("Oops! Something went wrong, and your message wasn't sent. Please try again.");
      console.error(error);
    });
});

const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    errorMsg.classList.add("d-none");
  } else {
    errorMsg.classList.remove("d-none");
  }
});

function showCustomAlert(message) {
  const alertBox = document.getElementById("custom-alert");
  alertBox.textContent = message;
  alertBox.classList.remove("d-none");
  alertBox.classList.add("show-alert");

  setTimeout(() => {
    alertBox.classList.remove("show-alert");
    alertBox.classList.add("d-none");
  }, 4000); // 4 seconds
}