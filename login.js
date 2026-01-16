function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://miraeasset.free.beeceptor.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(async response => {
  const text = await response.text();

  try {
    const data = JSON.parse(text);

    if (!response.ok) {
      handleError(data);
      return;
    }

    alert("Login Successful");
  } catch {
    document.getElementById("error").innerText =
      "Invalid response from server (not JSON)";
  }
});
}


