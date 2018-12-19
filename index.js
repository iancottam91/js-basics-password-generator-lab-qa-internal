function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted!')
}

document.getElementById('form').addEventListener('submit', function(e) {
  handleSubmit(e);
})