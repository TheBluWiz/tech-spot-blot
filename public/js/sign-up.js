const userEl = document.getElementById("user");
const passwordEl = document.getElementById("password")
const signUpSubmitEl = document.getElementById("signUpSubmit")

async function postData(url, data) {
  console.log(data)
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

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