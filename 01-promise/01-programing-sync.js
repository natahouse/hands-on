
console.time()

var resources = {
  disk: undefined,
  network: undefined
};

function disk() {
  try {
    resources.disk = "disk";
  } catch (error) {
    throw error;
  }
}

function network() {
  try {
    resources.network = "network";
  } catch (error) {
    throw error;
  }
}

try {
  disk();
  network();

  console.log(resources);
} catch (error) {
  console.log(error);
}

console.timeEnd()