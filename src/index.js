import './style.css'
import Atoz from './images/projects/atoz.jpg'
import Stadium from './images/projects/stadium.jpg'
import GasData from './images/projects/gasdata.jpg'
import Fitzgerald from './images/projects/fitzgerald.jpg'
import ClubGlobal from './images/projects/clubglobal.jpg'

document.getElementById('atoz').src = Atoz
document.getElementById('stadium').src = Stadium
document.getElementById('gasData').src = GasData
document.getElementById('fitzgerald').src = Fitzgerald
document.getElementById('clubGlobal').src = ClubGlobal

document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById(this.dataset.opens).classList.toggle('hidden')
})