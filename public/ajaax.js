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
    console.log("Error", err);
  }
};
