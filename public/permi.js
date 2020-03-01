const registerr = async () => {
  try {
    const nouse = await navigator.serviceWorker.register("sai.js");
    return nouse;
  } catch (err) {
    alert(err.message + "1");
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
