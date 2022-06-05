const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default defineEventHandler(async (event) => {
  await sleep(2000);
  return {
    api: "it works",
  };
});
