const React = require("react");
const Layout = require("../views/Layout");

function PriceCreate(Login) {
  return (
    <Layout login={ Login }>
      <script defer src="/js/PriceFetch.js" />
      <div className="createContainer">
        <h1>Создание нового тарифа</h1>
        <form action="/create" method="post" id="NewPriceForm">
          <div className="form-group">
            <label>Название тарифа</label>
            <input
              type="text"
              name="title_price"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Цена для взрослых</label>
            <input
              type="number"
              name="all_price"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Цена для детей</label>
            <input
              type="number"
              name="children_price"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Создать тариф
          </button>
          <div className="errmsg"></div>
          <a href="/price">Назад</a>
        </form>
      </div>
    </Layout>
  );
}

module.exports = PriceCreate;
