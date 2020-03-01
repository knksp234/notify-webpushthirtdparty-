const registerr = async () => {
  try {
    if ("serviceWorker" in navigator) {
      const x = await navigator.serviceWorker.register("/sai.js");
    } else {
      alert("no service worker");
    }
  } catch (err) {
    alert(err.message + "1");
    console.log("Error", err);
  }
};

const Ppermission = async () => {
  try {
    const p = await Notification.requestPermission();

    if (p !== "granted") {
      console.log("Permission not granted for Notification");
    }
  } catch (err) {
    alert(err.message + "2");
    console.log("Error", err);
  }
};

const whole = async () => {
  try {
    const p = await Ppermission();
    const s = await registerr();
  } catch (err) {
    alert(err.message + "3");
    console.log("Error", err);
  }
};
