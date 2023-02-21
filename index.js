const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

(async () => {
  console.log("Start");
  await sleep(1000 * 60 * 2);
  console.log("End");
})();
