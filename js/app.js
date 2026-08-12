// =========================================
// EARNOS — Main Application
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  console.log("EARNOS app loaded");

  // -----------------------------------------
  // Check Supabase
  // -----------------------------------------

  if (typeof supabaseClient === "undefined") {
    console.error("Supabase client not found.");
    return;
  }

  console.log("Supabase connected.");


  // -----------------------------------------
  // Application State
  // -----------------------------------------

  const state = {
    balance: 0,
    tasks: 0,
    submissions: 0,
    withdrawals: 0,
    referrals: 0
  };


  // -----------------------------------------
  // Helpers
  // -----------------------------------------

  function getElement(id) {
    return document.getElementById(id);
  }


  function money(value) {
    return Number(value || 0).toFixed(2);
  }


  function updateUI() {

    const balance = getElement("balance");
    const tasks = getElement("tasksCount");
    const submissions = getElement("submissionsCount");
    const withdrawals = getElement("withdrawalsCount");
    const referrals = getElement("referralsCount");

    if (balance) {
      balance.textContent = money(state.balance);
    }

    if (tasks) {
      tasks.textContent = state.tasks;
    }

    if (submissions) {
      submissions.textContent = state.submissions;
    }

    if (withdrawals) {
      withdrawals.textContent = state.withdrawals;
    }

    if (referrals) {
      referrals.textContent = state.referrals;
    }
  }


  // -----------------------------------------
  // Toast
  // -----------------------------------------

  function showToast(message, error = false) {

    const toast = getElement("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.toggle("error", error);
    toast.classList.add("show");

    clearTimeout(window.earNosToastTimer);

    window.earNosToastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }


  // -----------------------------------------
  // Navigation
  // -----------------------------------------

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {

    item.addEventListener("click", () => {

      navItems.forEach((nav) => {
        nav.classList.remove("active");
      });

      item.classList.add("active");

      const page = item.dataset.page;

      console.log("Navigation:", page);

      if (page === "home") {
        showToast("Home");
      }

      if (page === "tasks") {
        showToast("Tasks");
      }

      if (page === "wallet") {
        showToast("Wallet");
      }

      if (page === "profile") {
        showToast("Profile");
      }

    });

  });


  // -----------------------------------------
  // View All
  // -----------------------------------------

  const viewAll = getElement("viewAll");

  if (viewAll) {

    viewAll.addEventListener("click", (event) => {

      event.preventDefault();

      showToast("No opportunities available yet.");

    });

  }


  // -----------------------------------------
  // Initial UI
  // -----------------------------------------

  updateUI();

});
