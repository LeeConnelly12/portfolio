import './style.css'
import Atoz from './images/projects/atoz.jpg'
import Stadium from './images/projects/stadium.jpg'
import GasData from './images/projects/gasdata.jpg'

document.getElementById('atoz').src = Atoz
document.getElementById('stadium').src = Stadium
document.getElementById('gasData').src = GasData

document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById(this.dataset.opens).classList.toggle('hidden')
})