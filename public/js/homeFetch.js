const header = document.querySelector('.header_container');
header.addEventListener('click', (e) => {
  if (window.location.href === 'http://localhost:3001/' && e.target.className === 'btn_link' && e.target.href !== 'http://localhost:3001/logout') {
    e.preventDefault();
    const main = document.querySelector('.main');
    main.style.backgroundImage = 'url(/img/blured_lions.png)';
    setTimeout(() => {
      window.location.href = e.target.href;
    }, 500);
  }
});
