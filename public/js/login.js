const userEl = document.getElementById("user");
const passwordEl = document.getElementById("password")
const loginSubmitEl = document.getElementById("loginSubmit")

loginSubmitEl.addEventListener("click", (event) => {
  event.preventDefault();
  let loginAttempt = {
    user: userEl.value,
    password: passwordEl.value,
  }
  postData('http://localhost:3001/api/login/', loginAttempt)
    .then((response) => {
      console.log(response)
      if (response.message) document.location.replace('/dashboard')
      else alert("Not OK")
    })
    .catch((err) => {
      console.log(`Post Failed:
      ${err}`)
    })
})