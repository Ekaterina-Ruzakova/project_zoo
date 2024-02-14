const React = require("react");
const Layout = require("./Layout");

function PriceCreate({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/PriceFetch.js" />
      <div className="main_container main_container_overflow">
        <div className="main_login">
          <h3 className="additional_title">Создание нового тарифа</h3>
          <form action="/create" method="post" className="logForm priceForm" id="NewPriceForm">
            <input
              type="text"
              name="title_price"
              className="main_input"
              required
              placeholder="Название"
            />
            <input
              type="number"
              name="all_price"
              className="main_input"
              required
              placeholder="Цена для взрослых"
            />
            <input
              type="number"
              name="children_price"
              className="main_input"
              required
              placeholder="Цена для детей"
            />
            <button type="submit" className="main_button">
              Создать
            </button>
            <div className="errmsg" />
            <a className="back_link" href="/price">Назад</a>
          </form>
        </div>
      </div>
      
    </Layout>
  );
}

module.exports = PriceCreate;
