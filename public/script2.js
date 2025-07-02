emailjs.init({
  publicKey: "EFhYEJ-nPnmVkMc1z",
});

function sendMail(event) {
  event.preventDefault();

  emailjs.sendForm("service_dqjmu16", "template_yrd5fpl", event.target)
    .then(() => {
      alert("Message sent successfully!");
      event.target.reset();
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", sendMail);
  }
})