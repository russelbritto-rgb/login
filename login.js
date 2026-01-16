function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://abcsdads.free.beeceptor.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(err => { throw err; });
    }
    return response.json();
  })
  .then(data => {
    alert("Login Successful");
  })
  .catch(error => {
    document.getElementById("error").innerText =
      error.message || "Login failed. Please try again.";
  });
}
