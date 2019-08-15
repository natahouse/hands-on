console.time();

var resources = {
  disk: undefined,
  network: undefined
};

function disk(callbackDisk) {
  setTimeout(function() {
    try {
      callbackDisk(undefined, "disk");
    } catch (error) {
      callbackDisk(error, undefined);
    }
  }, 500);
}

function network(callbackNetwork) {
  setTimeout(function() {
    try {
      callbackNetwork(undefined, "network");
    } catch (error) {
      callbackNetwork(error, undefined);
    }
  }, 1000);
}


disk(function callbackDisk(errorDisk, _disk) {
  if (errorDisk) {
    // ...
  }
  resources.disk = _disk;

  network(function callbackNetwork(errorNetwork, _network) {
    if (errorNetwork) {
      // ...
    }
    resources.network = _network;

    console.log(resources);
    console.timeEnd();
  });
});
