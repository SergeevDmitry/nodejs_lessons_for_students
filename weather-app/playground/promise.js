var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey. It worked!');
  }, 2500);
});

somePromise.then(() => {
  console.log('Success: ', message);
}), (errorMessage) => {
  console.log('Error: ', errorMessage);
}
