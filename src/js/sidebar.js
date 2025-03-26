document.addEventListener('DOMContentLoaded', function () {
  var btnsSidebar = document.querySelectorAll('.header__toggle'),
      layout = document.querySelector('.layout'),
      sidebar = document.querySelector('.sidebar'),
      mask = document.querySelector('.mask');

  for (var i = 0; i < btnsSidebar.length; i++) {
    btnsSidebar[i].addEventListener('click', function () {
      layout.classList.toggle('layout--sidebar-open');
      sidebar.classList.toggle('sidebar--show'); 
      mask.classList.toggle('mask--visible'); 
    });
  }

  mask.addEventListener('click', function () {
    layout.classList.remove('layout--sidebar-open'); 
    sidebar.classList.remove('sidebar--show');
    mask.classList.remove('mask--visible');
  });
});