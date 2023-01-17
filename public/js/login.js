const userEl = document.getElementById("user");
const passwordEl = document.getElementById("password")
const loginSubmitEl = document.getElementById("loginSubmit")

loginSubmitEl.addEventListener("click", (event) => {
  event.preventDefault();
  let loginAttempt = {
    user: userEl.value,
    password: passwordEl.value,
  }
  postData('/api/login/', loginAttempt)
    .then((response) => {
      console.log(response)
      if (response.ok) document.location.replace('/')
      else alert("Error Signing In")
    })
    .catch((err) => {
      console.log(`Post Failed:
      ${err}`)
    })
})