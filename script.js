function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let currentLanguage = "en"; // Default language is English

function toggleLanguage() {
  // Switch language
  currentLanguage = currentLanguage === "en" ? "he" : "en";

  // Update all text based on the selected language
  document.querySelectorAll("[data-en]").forEach((element) => {
    element.textContent = element.getAttribute(`data-${currentLanguage}`);
  });

  // Update button text
  const toggleButton = document.getElementById("language-toggle");
  toggleButton.textContent = currentLanguage === "en" ? "עברית" : "English";

  // Toggle text direction for Hebrew
  document.documentElement.lang = currentLanguage;
  document.body.dir = currentLanguage === "he" ? "rtl" : "ltr";
}
