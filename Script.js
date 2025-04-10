const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
// Update footer with the current year
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    footer.textContent += ` • ${year}`;
  });
  
  // Optional: Smooth scroll behavior (for future nav menu)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  
  // Optional: Form validation feedback
  const form = document.querySelector("form[action*='formspree']");
  if (form) {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll("input, textarea");
      let allFilled = true;
  
      inputs.forEach(input => {
        if (!input.value.trim()) {
          allFilled = false;
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "#ccc";
        }
      });
  
      if (!allFilled) {
        e.preventDefault();
        alert("Please fill out all fields.");
      }
    });
  }
  