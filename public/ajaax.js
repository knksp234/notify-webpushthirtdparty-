const whole = async () => {
  try {
    const response = await fetch(
      "https://floating-shelf-18896.herokuapp.com/notify",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "sendnotification",
          topic: "some-message"
        })
      }
    );
  } catch (err) {
    alert(err.message + "4");
    console.log("Error", err);
  }
};
