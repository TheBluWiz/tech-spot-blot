const titelEl = document.getElementById('title');
const blogPostEl = document.getElementById('blogPost')
const postItEl = document.getElementById('postIt')

postItEl.addEventListener('click', (event) => {
  event.preventDefault();
  let blogPost = {
    title: titelEl.value,
    content: blogPostEl.value
  }
  postData('/api/dashboard', blogPost)
  .then((response) => {
    console.log('It sent!')
    console.log(response)
    document.location.replace('/dashboard');
  })
  .catch((err) => {
    console.log(err)
  })
})