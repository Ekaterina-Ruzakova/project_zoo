const container = document.querySelector(".PriceContainer");
const card = document.querySelector(".PriceCard");
const div = document.querySelector(".errmsg");

container.addEventListener("click", async (e) => {
  try {
    if (e.target.className.includes("btnDelite")) {
      e.preventDefault();
      const response = await fetch(`/price/${e.target.id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.msg) {
        const card = container.querySelector(`.price_${e.target.id}`);
        card.remove()
      }
      else if (result.err){
        console.log(result.err);
      }
    }
  } catch (error) {
    console.error("Ошибка при удалении карточки цены:", error);
    throw error;
  }
});
