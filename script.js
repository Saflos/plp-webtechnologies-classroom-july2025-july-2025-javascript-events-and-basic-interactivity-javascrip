// PART 1: EVENT HANDLING
// Show a message when the button is clicked
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("messageArea").innerText = "🎉 You clicked the button!";
});

// PART 2: INTERACTIVE ELEMENTS
// Light / Dark mode toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
  count++;
  counterDisplay.innerText = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  counterDisplay.innerText = count;
});

// FAQ Section (collapsible answers)
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("open");
  });
});

// PART 3: FORM VALIDATION
// Custom validation for name, email, and password
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Simple name check
  if (name.length < 2) {
    message = "⚠️ Name must be at least 2 characters.";
  }
  // Email regex check
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message = "⚠️ Enter a valid email address.";
  }
  // Password check (at least 6 characters, one number)
  else if (!/^(?=.*[0-9]).{6,}$/.test(password)) {
    message = "⚠️ Password must be at least 6 characters and include a number.";
  } else {
    message = "✅ Form submitted successfully!";
  }

  document.getElementById("formMessage").innerText = message;
});
