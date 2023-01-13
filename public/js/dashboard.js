const titelEl = document.getElementById('title');
const blogPostEl = document.getElementById('blogPost')
const postItEl = document.getElementById('postIt')

postItEl.addEventListener('click', (event) => {
  event.preventDefault();
  let blogPost = {
    title: titelEl.value,
    content: blogPostEl.value
  }
  postData('http://localhost:3001/api/dashboard', blogPost)
  .then((response) => {
    console.log('It sent!')
    console.log(response)
    // document.location.replace('http://localhost:3001/dashboard');
  })
  .catch((err) => {
    
  })
})