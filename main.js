const nav = document.querySelector('nav')

const best_moments_shots = document.querySelectorAll('#best_shots > img')
best_moments_shots.forEach((shot) => shot.addEventListener('click', function() {
  window.open(shot.src)
}))

// all sections are stored in this object, and offset() is called on them everytime it is required
// this approach is used as storing section offsets directly sometimes created a bug where the wrong
// values were stored and the navigation system was thrown off
const sections = {
  'home' : $("#home"),
  'history' : $("#history"),
  'planning' : $("#planning"),
  'best_moments' : $("#best_moments"),
  'FAQ' : $("#FAQ")
}

// - nav.offsetHeight is used to account for fixed navbar being taken out of document's flow
// and thus section headers sliding under it after scrolling
function navScroll(e) {
  target_coordinates = sections[e.target.dataset.target].offset().top
  window.scrollTo({
    top: target_coordinates - nav.offsetHeight,
    behavior: 'smooth'
  })
}

function dynamicNavbarUpdate() {
  const currentScroll = window.scrollY
  const currentButton = document.querySelector('.active')
  if (currentScroll < sections['history'].offset().top - nav.offsetHeight) {
    const homeButton = document.querySelector('button[data-target="home"');
    currentButton.classList.remove('active');
    homeButton.classList.add('active');
  } else if (currentScroll < sections['planning'].offset().top - nav.offsetHeight) {
    const historyButton = document.querySelector('button[data-target="history"');
    currentButton.classList.remove('active');
    historyButton.classList.add('active');
  } else if (currentScroll < sections['best_moments'].offset().top - nav.offsetHeight) {
    const planningButton = document.querySelector('button[data-target="planning"');
    currentButton.classList.remove('active');
    planningButton.classList.add('active');
  } else if (currentScroll < sections['FAQ'].offset().top - nav.offsetHeight) {
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