const registerr = async () => {
  try {
    const nouse = await navigator.serviceWorker.register("sai.js");
    return nouse;
  } catch (err) {
    alert(err.message);
    console.log("Error", err);
  }
};

const Ppermission = async () => {
  try {
    const p = await window.Notification.requestPermission();

    if (p !== "granted") {
      console.log("Permission not granted for Notification");
    }
  } catch (err) {
    alert(err.message);
    console.log("Error", err);
  }
};

const whole = async () => {
  try {
    const s = await registerr();
    const p = await Ppermission();
  } catch (err) {
    alert(err.message);
    console.log("Error", err);
  }
};
