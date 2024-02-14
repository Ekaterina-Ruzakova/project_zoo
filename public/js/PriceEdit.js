const form = document.querySelector("#PriceEdit");

form.addEventListener("click", async (e) => {
  e.preventDefault();
  if (e.target.classList.contains("btn-save")) {
    e.preventDefault();
    const data = new FormData(form);
    const res = Object.fromEntries(data);
    try {
      const response = await fetch(`/price/${e.target.id}`, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      if (result) {
        window.location.href = "/price";
      }

      if (result.err) {
        div.innerText = result.err;
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (e.target.classList.contains("btn-cancle")) {
    window.location.href = "/price";
  }
});
