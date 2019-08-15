console.time();

var resources = {
  disk: undefined,
  network: undefined,
};

function disk() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("disk");
    }, 500);
  });
}

function network() {
  return new Promise(function(resolve) {
    setTimeout(function() {      
      resolve("network");
    }, 1000);
  });
}

disk()
  .then(function callbackDisk(_disk) {
    resources.disk = _disk;
    return network();
  })
  .then(function callbackNetwork(_network) {
    resources.network = _network;
    console.log(resources);
    console.timeEnd();
  })

