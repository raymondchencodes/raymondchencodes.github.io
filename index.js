let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

themeButton.addEventListener("click", toggleDarkMode);

const petitionForm = document.getElementById("sign-petition");
const newSigDiv = document.getElementById("newSignature");
const signatureCountSpan = document.getElementById("signatureCount");
const modal = document.getElementById("petition-modal");
const closeModal = document.getElementById("close-modal");
const modalMessage = document.getElementById("modal-message");
const modalImage = document.getElementById("modal-image");

let signatureCount = 1;

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const showModal = (name) => {
  modalMessage.textContent = `Thank you, ${name}, for signing the petition!`;
  modal.style.display = "block";

  setTimeout(() => {
    modal.style.display = "none";
  }, 6000);
};

petitionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  let valid = true;

  if (name === "") {
    nameInput.style.borderColor = 'red';
    valid = false;
  } else {
    nameInput.style.borderColor = '';
  }

  if (email === "" || !isValidEmail(email)) {
    emailInput.style.borderColor = 'red';
    valid = false;
  } else {
    emailInput.style.borderColor = '';
  }

  if (valid) {
    const newSignature = document.createElement('p');
    newSignature.textContent = "🖊️ " + name + " - " + email;
    newSigDiv.appendChild(newSignature);
    petitionForm.reset();
    signatureCount++;
    signatureCountSpan.textContent = signatureCount;
    showModal(name);
  }
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
});
