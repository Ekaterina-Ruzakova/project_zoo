const createForm = document.querySelector('.createForm');
const messageDiv = document.querySelector('.message');

console.log(createForm);

createForm.addEventListener('click', async (event) => {
  event.preventDefault();

  if(event.target.classList.contains('btn-success')) {
    const data = new FormData(createForm);
    const inputs = Object.fromEntries(data);
    console.log(inputs);
    try {
      const response = await fetch('/newAnimal', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      console.log(response);
  
      const result = await response.json();
  
      messageDiv.style.color = 'black';
  
      if (result.msg) {
        messageDiv.innerText = result.msg;
        messageDiv.style.color = 'green';
        setTimeout(() => {
          // eslint-disable-next-line no-undef
          window.location.href = '/animals';
        }, 1000);
      } else {
        messageDiv.innerText = 'NO PASARAN';
        messageDiv.style.color = 'red';
      }
    } catch (error) {
      console.log(error, 'ОШИБКА В ФИЧЕ  СОЗДАНИЯ НОВОГО ЖИВОТНОГО');
    }
  }
  if(event.target.classList.contains('btn-danger')) {
    window.location.href = '/animals';
  }
});
