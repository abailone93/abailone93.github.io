document.getElementById('id1').title // Rojo
document.querySelector('#probandoqueryselector .clase').title // Azul
document.querySelector('#probandoqueryselector .clase[title^=L]').title // Lila

// Los 5 <span>
document.querySelectorAll('#probandoqueryselector .clase')
// Todos los <span> y <img> de una página
document.querySelectorAll('span, img')
// Todos los <span> hijos de <div>
document.querySelectorAll('div > span')

