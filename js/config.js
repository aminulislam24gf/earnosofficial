/* =====================================================
   EARNOS — SUPABASE CONFIG
   ===================================================== */

const EARNOS_SUPABASE_URL =
  "https://imiciluejhsoogykhowz.supabase.co";

const EARNOS_SUPABASE_KEY =
  "sb_publishable_BgaaOwSY211P93ffLJyeqw_ZBTixIq8";

/*
   IMPORTANT:
   এখানে কখনো Secret / Service Role key রাখবে না।
   Browser application-এর জন্য শুধু Publishable key ব্যবহার করছি।
*/

let earnosSupabase = null;

function initEarnosSupabase() {
  if (
    typeof window.supabase === "undefined"
  ) {
    console.error(
      "Supabase library was not loaded."
    );

    return null;
  }

  if (
    !EARNOS_SUPABASE_URL ||
    !EARNOS_SUPABASE_KEY
  ) {
    console.error(
      "Supabase configuration is missing."
    );

    return null;
  }

  try {

    earnosSupabase =
      window.supabase.createClient(
        EARNOS_SUPABASE_URL,
        EARNOS_SUPABASE_KEY
      );

    console.log(
      "EARNOS Supabase initialized."
    );

    return earnosSupabase;

  } catch (error) {

    console.error(
      "Supabase initialization failed:",
      error
    );

    return null;
  }
}
