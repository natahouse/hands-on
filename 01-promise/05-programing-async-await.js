const disk = () => new Promise(resolve => setTimeout(() => resolve('disk'), 500));
const network = () => new Promise(resolve => setTimeout(() => resolve('network'), 500));

;(async () => {
  try {
    const resource = {
      disk: await disk(),
      network: await network(),
    }
    console.log(resource);
  } catch (error) {
    // ...
  }

  console.time();
})();

