const best_moments_shots = document.querySelectorAll('#best_shots > img')
best_moments_shots.forEach((shot) => shot.addEventListener('click', function() {
  window.open(shot.src)
}))

const section_coordinates = {
  'home' : document.getElementById('home').getBoundingClientRect().y,
  'history' : document.getElementById('history').getBoundingClientRect().y,
  'planning' : document.getElementById('planning').getBoundingClientRect().y,
  'best_moments' : document.getElementById('best_moments').getBoundingClientRect().y
}

function navScroll(e) {
  target_coordinates = section_coordinates[e.target.dataset.target]
  window.scrollTo(0, target_coordinates - 60)
}

document.querySelectorAll('nav > *').forEach((button) => button.addEventListener('click' , navScroll))