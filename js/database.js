// =========================================
// EARNOS — Database Layer
// =========================================

const EARNOS_DB = {

  // -----------------------------------------
  // Get current user
  // -----------------------------------------

  async getCurrentUser() {

    if (typeof supabaseClient === "undefined") {
      throw new Error("Supabase client not available.");
    }

    const {
      data,
      error
    } = await supabaseClient.auth.getUser();

    if (error) {
      throw error;
    }

    return data.user || null;
  },


  // -----------------------------------------
  // Get profile
  // -----------------------------------------

  async getProfile(userId) {

    const {
      data,
      error
    } = await supabaseClient
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  },


  // -----------------------------------------
  // Get tasks
  // -----------------------------------------

  async getTasks() {

    const {
      data,
      error
    } = await supabaseClient
      .from("tasks")
      .select("*")
      .order("created_at", {
        ascending: false
      });

    if (error) {
      throw error;
    }

    return data || [];
  },


  // -----------------------------------------
  // Get submissions
  // -----------------------------------------

  async getSubmissions(userId) {

    const {
      data,
      error
    } = await supabaseClient
      .from("submissions")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", {
        ascending: false
      });

    if (error) {
      throw error;
    }

    return data || [];
  },


  // -----------------------------------------
  // Get withdrawals
  // -----------------------------------------

  async getWithdrawals(userId) {

    const {
      data,
      error
    } = await supabaseClient
      .from("withdrawals")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", {
        ascending: false
      });

    if (error) {
      throw error;
    }

    return data || [];
  },


  // -----------------------------------------
  // Get referrals
  // -----------------------------------------

  async getReferrals(userId) {

    const {
      data,
      error
    } = await supabaseClient
      .from("referrals")
      .select("*")
      .eq("referrer_id", userId)
      .order("created_at", {
        ascending: false
      });

    if (error) {
      throw error;
    }

    return data || [];
  }

};
