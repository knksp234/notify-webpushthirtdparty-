const whole = async () => {
  try {
    const response = await fetch("http://localhost:3000/notify", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "sendnotification",
        topic: "some-message"
      })
    });
  } catch (err) {
    alert(err.message + "4");
    console.log("Error", err);
  }
};
