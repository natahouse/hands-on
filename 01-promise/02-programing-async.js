console.time()

var resources = {
  disk: undefined,
  network: undefined,
};

function disk() {
  setTimeout(function() {
    try {
      resources.disk = "disk";
    } catch (error) {
      throw error;
    }
  }, 500);
}

function network() {
  setTimeout(function() {
    try {
      resources.network = "network";
    } catch (error) {
      throw error;
    }
  }, 1000);
}

disk();
network();

console.log(resources);
console.timeEnd()
