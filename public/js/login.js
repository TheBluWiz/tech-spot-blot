const userEl = document.getElementById("user");
const passwordEl = document.getElementById("password")
const loginSubmitEl = document.getElementById("loginSubmit")

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

loginSubmitEl.addEventListener("click", (event) => {
  event.preventDefault();
  let loginAttempt = {
    user: userEl.value,
    password: passwordEl.value,
  }
  postData('http://localhost:3001/api/login/', loginAttempt)
    .then((response) => {
      console.log(response)
      if (response.ok) document.location.replace('/dashboard')
      else alert("Not OK")
    })
    .catch((err) => {
      console.log(`Post Failed:
      ${err}`)
    })
})