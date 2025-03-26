// Обработчик для кнопки "Читать далее"
document.querySelectorAll('.readmore').forEach(btn => {
  btn.addEventListener('click', function() {
    const parent = this.parentNode;
    const textContainer = parent.querySelector('.services__text');
    const hiddenText = textContainer?.querySelector('.services__hidden-text');
    
    if (hiddenText) {
      hiddenText.classList.toggle('services__hidden-text--show');
      this.textContent = hiddenText.classList.contains('services__hidden-text--show') 
        ? 'Скрыть' 
        : 'Читать далее';
    }
  });
});

// Обработчик для кнопок "Показать все"
document.querySelectorAll('.showmore').forEach(btn => {
  btn.addEventListener('click', function() {
    const parent = this.parentNode;
    const parentClass = parent.parentNode.classList.item(0);
    const container = parent.querySelector(`.${parentClass}__list`);
    
    if (container) {
      const willShow = !container.classList.contains(`${parentClass}__list--show`);
      
      container.style.opacity = '0';
      container.style.transition = 'opacity 0.3s ease';
      
      
      setTimeout(() => {
        container.classList.toggle(`${parentClass}__list--show`, willShow);
        container.style.opacity = '1';
      }, 10);
      
      this.textContent = willShow ? 'Скрыть' : 'Показать все';
      this.classList.toggle('showmore--show');
    }
  });
});