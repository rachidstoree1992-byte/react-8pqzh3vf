
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mnqcgaiazpsdxigjagny.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_FYZxGGC66OucPNbmx77J0w_DhiOfQ6t";

export const supabase = createClient(
  supabaseUrl,
    supabaseKey
    );
