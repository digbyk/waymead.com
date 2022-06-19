import { serverSupabaseClient } from "#supabase/server";
import { serverSupabaseUser } from "#supabase/server";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);
  await sleep(1000);
  return {
    api: "it works",
    user: user.email,
    test: "test",
  };
});
