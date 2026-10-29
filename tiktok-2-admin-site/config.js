// Supabase の「Project URL」と「Publishable key（sb_publishable_…）」に置き換えてください。
// 入れてよいのは Publishable key だけです（古い画面では anon key）。
// Secret key（sb_secret_…）・service_role key は絶対に入れないでください。
const SB_URL = 'https://YOUR-PROJECT.supabase.co';
const SB_KEY = 'sb_publishable_ここに貼り付け';
const sb = supabase.createClient(SB_URL, SB_KEY);
