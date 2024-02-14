const React = require("react");
const Layout = require("./Layout");

function PriceEdit({ price, login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/PriceEdit.js" />
      <div className="main_container">
        <div className="main_login">
          <h3 className="additional_title">Редактирование тарифа</h3>
          <form action={`/edit/${price.id}`} id="PriceEdit" className="logForm priceForm">
            <input
              type="text"
              name="title_price"
              defaultValue={price.title_price}
              className="main_input"
              required
              placeholder="Название"
            />
            <input
              type="number"
              name="all_price"
              defaultValue={price.all_price}
              className="main_input"
              required
              placeholder="Цена для взрослых"
            />
            <input
              type="number"
              name="children_price"
              defaultValue={price.children_price}
              className="main_input"
              required
              placeholder="Цена для детей"
            />
            <button type="button" className="btn-save main_button" id={price.id}>
              Сохранить
            </button>
            <button type="button" className="btn-cancle back_link">
              Назад
            </button>
          </form>
        </div>
      </div>
      
    </Layout>
  );
}

module.exports = PriceEdit;
