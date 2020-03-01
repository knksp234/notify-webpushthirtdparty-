const githubcp = base64String => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const datatoserver = async browseidentifier => {
  try {
    const response = await fetch(
      "https://floating-shelf-18896.herokuapp.com/notify",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(browseidentifier)
      }
    );
    return response.json();
  } catch (err) {
    console.log("Error", err);
  }
};

self.addEventListener("activate", async () => {
  try {
    const applicationServerKey = githubcp(
      "BOZrOZAASIEUEpOn1UhsdV7meIwyhyXqbQ_JJ-RKIQL3V2W-wqucHiBu_aGjrW0OkAkGTo5MyI5l6fmIJIallEc"
    );
    const options = { applicationServerKey, userVisibleOnly: true };
    const browseidentifierr = await self.registration.pushManager.subscribe(
      options
    );
    const reply = await datatoserver(browseidentifierr);
    console.log(reply);
  } catch (err) {
    console.log("Error", err);
  }
});

self.addEventListener("push", e => {
  if (e.data) {
    showLocalNotification("PRAVEEN_", e.data.text(), self.registration);
  } else {
    console.log("no data from web-push");
  }
});
const showLocalNotification = (title, body, dd) => {
  const options = {
    body
  };
  dd.showNotification(title, options);
};
