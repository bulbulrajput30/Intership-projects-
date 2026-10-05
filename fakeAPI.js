function fakeAPICall() {
  console.log("Fetching user...");

  setTimeout(() => {
    console.log("User data received");

    setTimeout(() => {
      console.log("Processing data...");
    }, 1000);

  }, 2000);
}

fakeAPICall();