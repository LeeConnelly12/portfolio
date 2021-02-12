import './style.css'

document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById(this.dataset.opens).classList.toggle('hidden')
})