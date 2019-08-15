function PromisE(myFunction) {
  var _callbacks = [];
  var myReturn = {
    then: then
  };

  function then(callback) {
    _callbacks.push(callback);
    return myReturn;
  }

  function resolve(val) {
    complete(val);
  }

  function complete(res) {
    for (var index = 0; index < _callbacks.length; index++) {
      var callback = _callbacks[index];
      res = callback(res);
    }
  }

  myFunction(resolve);

  return myReturn;
}

var promiseA = PromisE(function(resolve) {
  setTimeout(function() {
    resolve(1);
  }, 100);
});

promiseA
  .then(function(res) {
    console.log(res);
    return res + 1;
  })
  .then(function(res) {
    console.log(res);
    return res + 1;
  })
  .then(function(res) {
    console.log(res);
  });