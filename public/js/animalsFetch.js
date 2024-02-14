const containerAnimals = document.querySelector('.animals');
const message = document.querySelector('.message')

containerAnimals.addEventListener('click', async (event) => {
    if(event.target.classList.contains('btn-dark')) {
        event.preventDefault();
        try {
            const response = await fetch(`/animals/${event.target.id}`, {
                method: 'DELETE',
            });


            const result = await response.json();

            if(result.msg) {
                message.innerText = result.msg;
                const animalDiv = document.querySelector(`#animal${result.delAnimal.id}`);
                animalDiv.remove();
            } 
        } catch (error) {
            console.log(error, 'ОШИБКА В ФИЧЕ УДАЛЕНИЯ ЖИВОТНОГО')
        }
    }
})
