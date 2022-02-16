async function loginFormHandler() {
  (event) => event.preventDefault();

  const email = document.querySelector("#inputEmail").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  if (email && password) {
    debugger;
    const response = await fetch("/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),

      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#userSignup").value.trim();
  const email = document.querySelector("#emailSignup").value.trim();
  const password = document.querySelector("#passwordSignup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}
const login = document.getElementById("#loginForm");

login.addEventListener("submit", loginFormHandler());

const signup = document.getElementById("#signupForm");

signup.addEventListener("submit", signupFormHandler());
