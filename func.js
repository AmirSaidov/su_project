  const elements = document.querySelectorAll('.my-element');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // появился в зоне видимости
        entry.target.classList.add('show');
      } else {
        // вышел из зоны видимости
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.3 // сколько % элемента должно быть видно (0–1)
  });

  elements.forEach(el => observer.observe(el));