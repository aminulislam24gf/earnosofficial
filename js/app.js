// =========================================
// EARNOS — APP NAVIGATION
// =========================================

const pages = {
  home: document.getElementById("home-page"),
  tasks: document.getElementById("tasks-page"),
  wallet: document.getElementById("wallet-page"),
  profile: document.getElementById("profile-page")
};

const navButtons = document.querySelectorAll(".nav");

function navigate(page) {
  // Hide all pages
  Object.values(pages).forEach((section) => {
    if (section) {
      section.classList.add("hidden");
    }
  });

  // Show selected page
  if (pages[page]) {
    pages[page].classList.remove("hidden");
  }

  // Update navigation buttons
  navButtons.forEach((button) => {
    const buttonPage = button.dataset.page;

    if (buttonPage === page) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Update browser hash
  history.replaceState(null, "", "#" + page);
}


// =========================================
// NAV BUTTON EVENTS
// =========================================

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const page = button.dataset.page;

    if (page) {
      navigate(page);
    }
  });
});


// =========================================
// INITIAL PAGE
// =========================================

const initialPage =
  window.location.hash.replace("#", "") || "home";

navigate(
  pages[initialPage]
    ? initialPage
    : "home"
);
