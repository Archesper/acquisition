const best_moments_shots = document.querySelectorAll('#best_moments > img')
best_moments_shots.forEach((shot) => shot.addEventListener('click', function() {
  window.open(shot.src)
}))
