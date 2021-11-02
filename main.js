const nav = document.querySelector('nav')

const best_moments_shots = document.querySelectorAll('#best_shots > img')
best_moments_shots.forEach((shot) => shot.addEventListener('click', function() {
  window.open(shot.src)
}))

// Current bug: when page is refreshed, the values coordinates values change (which isn't supposed to happen)
// the whole dynamic navigation is thrown off. A hard refresh ( CTRL + F5 ) seems to solve it
// Changing to jquery's offset method did not fix it, however it did make code simpler
const section_coordinates = {
  'home' : $("#home").offset().top,
  'history' : $("#history").offset().top,
  'planning' : $("#planning").offset().top,
  'best_moments' : $("#best_moments").offset().top,
  'FAQ' : $("#FAQ").offset().top
}

// - nav.offsetHeight is used to account for fixed navbar being taken out of document's flow
// and thus section headers sliding under it after scrolling
function navScroll(e) {
  target_coordinates = section_coordinates[e.target.dataset.target]
  window.scrollTo({
    top: target_coordinates - nav.offsetHeight,
    behavior: 'smooth'
  })
}

function dynamicNavbarUpdate() {
  const currentScroll = window.scrollY
  const currentButton = document.querySelector('.active')
  if (currentScroll < section_coordinates['history'] - nav.offsetHeight) {
    const homeButton = document.querySelector('button[data-target="home"');
    currentButton.classList.remove('active');
    homeButton.classList.add('active');
  } else if (currentScroll < section_coordinates['planning'] - nav.offsetHeight) {
    const historyButton = document.querySelector('button[data-target="history"');
    currentButton.classList.remove('active');
    historyButton.classList.add('active');
  } else if (currentScroll < section_coordinates['best_moments'] - nav.offsetHeight) {
    const planningButton = document.querySelector('button[data-target="planning"');
    currentButton.classList.remove('active');
    planningButton.classList.add('active');
  } else if (currentScroll < section_coordinates['FAQ'] - nav.offsetHeight) {
    const bestMomentsButton = document.querySelector('button[data-target="best_moments"');
    currentButton.classList.remove('active');
    bestMomentsButton.classList.add('active');
  } else {
    const FAQButton = document.querySelector('button[data-target="FAQ"');
    currentButton.classList.remove('active');
    FAQButton.classList.add('active');
  }
}

document.querySelectorAll('nav > *').forEach((button) => button.addEventListener('click' , navScroll));
document.addEventListener('scroll', dynamicNavbarUpdate);