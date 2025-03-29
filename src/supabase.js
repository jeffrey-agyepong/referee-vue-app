import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://nqyhxrvfiegsugyvrkpl.supabase.co";
const SUPABASE_ANON_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xeWh4cnZmaWVnc3VneXZya3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNzE2NjMsImV4cCI6MjA1ODg0NzY2M30.QepshSeOynyW0yJnCP3wsCmxT02js8O0jYJpVoEEsJE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);