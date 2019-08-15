const fnMSOne = () =>
  new Promise(resolve => setTimeout(() => resolve("one"), 500));

const fnMSTwo = () =>
  new Promise(resolve => setTimeout(() => resolve("two"), 1000));

(async () => {
  const ms = await Promise.race([fnMSOne(), fnMSTwo()]);
  console.log(ms);
})();
