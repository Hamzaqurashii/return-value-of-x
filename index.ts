async function returnValueOfX() {
  return await new Promise((resolve, reject) => {
    return someFunction(function callback() {
      let x = 10;
      return resolve(x);
    });
  });
}

function someFunction(callback) {
  callback();
}

(async function testMyFunction() {
  console.log(await returnValueOfX());
})();
