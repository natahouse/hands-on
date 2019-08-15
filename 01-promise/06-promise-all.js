const fnDisk = () =>
  new Promise(resolve => setTimeout(() => resolve("disk"), 500));
const fnNetwork = () =>
  new Promise(resolve => setTimeout(() => resolve("network"), 500));

(async () => {
  try {
    const [disk, network, smartphone] = await Promise.all([
      fnDisk(),
      fnNetwork()
    ]);

    const resource = {
      disk,
      network,
    };

    console.log(resource);
  } catch (error) {
    // ...
  }
})();
