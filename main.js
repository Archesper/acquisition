const best_moments_shots = document.querySelectorAll('#best_shots > img')
best_moments_shots.forEach((shot) => shot.addEventListener('click', function() {
  window.open(shot.src)
}))

const section_coordinates = {
  'home' : offset(document.getElementById('home')).top,
  'history' : offset(document.getElementById('history')).top,
  'planning' : offset(document.getElementById('planning')).top,
  'best_moments' : offset(document.getElementById('best_moments')).top
}

function navScroll(e) {
  target_coordinates = section_coordinates[e.target.dataset.target]
  window.scrollTo({
    top: target_coordinates - 60,
    behavior: 'smooth'
  })
}

function dynamicNavbarUpdate() {
  const currentScroll = window.scrollY
  const currentButton = document.querySelector('.active')
  if (currentScroll < section_coordinates['history'] - 90) {
    const homeButton = document.querySelector('button[data-target="home"');
    currentButton.classList.remove('active');
    homeButton.classList.add('active');
  } else if (section_coordinates['history'] - 90 <= currentScroll && currentScroll < section_coordinates['planning'] - 90) {
    const historyButton = document.querySelector('button[data-target="history"');
    currentButton.classList.remove('active');
    historyButton.classList.add('active');
  } else if (section_coordinates['planning'] - 90 <= currentScroll && currentScroll < section_coordinates['best_moments'] - 90) {
    const planningButton = document.querySelector('button[data-target="planning"');
    currentButton.classList.remove('active');
    planningButton.classList.add('active');
  } else if (section_coordinates['best_moments'] - 90 <= currentScroll) {
    const bestMomentsButton = document.querySelector('button[data-target="best_moments"');
    currentButton.classList.remove('active');
    bestMomentsButton.classList.add('active');
  }
}

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


document.querySelectorAll('nav > *').forEach((button) => button.addEventListener('click' , navScroll))
document.addEventListener('scroll', dynamicNavbarUpdate)