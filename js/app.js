// EARNOS - Main Application

document.addEventListener("DOMContentLoaded", () => {
  console.log("EARNOS app loaded");

  if (typeof supabaseClient === "undefined") {
    console.error("Supabase client not found.");
    return;
  }

  console.log("Supabase connected.");
});
