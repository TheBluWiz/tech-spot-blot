const userEl = document.getElementById("user");
const passwordEl = document.getElementById("password")
const signUpSubmitEl = document.getElementById("signUpSubmit")

signUpSubmitEl.addEventListener("click", (event) => {
  event.preventDefault();
  let loginAttempt = {
    user: userEl.value,
    password: passwordEl.value,
  }
  postData('http://localhost:3001/api/login/sign-up', loginAttempt)
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(`Post Failed:
      ${err}`)
    })
})