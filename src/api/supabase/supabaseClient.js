"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabaseClient = void 0;
var supabase_js_1 = require("@supabase/supabase-js");
require("dotenv/config");
var options = {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
    },
};
exports.supabaseClient = (0, supabase_js_1.createClient)(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY, options);
