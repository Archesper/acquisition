const nav = document.querySelector('nav')

const best_moments_shots = document.querySelectorAll('#best_shots > img')
best_moments_shots.forEach((shot) => shot.addEventListener('click', function() {
  window.open(shot.src)
}))

// Current bug: when page is refreshed with scroll being at a value besides zero, values are somewhat off
// Kind of inconsistent in general
const section_coordinates = {
  'home' : offset(document.getElementById('home')).top,
  'history' : offset(document.getElementById('history')).top,
  'planning' : offset(document.getElementById('planning')).top,
  'best_moments' : offset(document.getElementById('best_moments')).top,
  'FAQ' : offset(document.getElementById('FAQ')).top
}

// offset values like -60 and -nav.offsetHeight are used because to account for fixed navbar being taken out of document's flow
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

function offset(ele) {
    // Get the top, left coordinates of the element
  const rect = ele.getBoundingClientRect();

  // Add the scroll postion to get the full distance from the element
  // to the top, left sides of the document
  const top = rect.top + document.body.scrollTop;
  const left = rect.left + document.body.scrollLeft;
  return { top: top, left: left }
}

document.addEventListener('DOMContentLoaded', () => {window.scrollTo(0,0)});
document.querySelectorAll('nav > *').forEach((button) => button.addEventListener('click' , navScroll));
document.addEventListener('scroll', dynamicNavbarUpdate);