const form = document.querySelector('#logForm');
const div = document.querySelector('.logMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.login || !res.password) {
    div.innerText = 'Все поля должны быть заполнены!';
  } else {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      if (result.msg) {
        div.innerText = result.msg;
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      }
      if (result.err) {
        div.innerText = result.err;
      }
    } catch (error) {
      console.log(error);
    }
  }
});
