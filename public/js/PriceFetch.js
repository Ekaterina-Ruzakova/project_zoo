const form = document.querySelector("#NewPriceForm");
const div = document.querySelector(".errmsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  try {
    const response = await fetch("/price/create", {
      method: "POST",
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
});
console.log(form);
