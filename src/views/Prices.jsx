const React = require("react");
const Layout = require("../views/Layout");

function Price({ login, prices }) {
  return (
    <Layout login={login}>
      <script defer src="/js/PriceDelite.js" />
      <div className="PriceContainer">
        <h1>Тарифы</h1>
        {prices &&
          prices.map((el) => (
            <div key={el.id} className={`PriceCard price_${el.id}`}>
              <h1>{el.title_price}</h1>
              <p>Для взрослых:{el.all_price}</p>
              <p>Для детей:{el.children_price}</p>
              {login ? (
                <div className="CardEdit">
                  <a
                    href={`/price/${el.id}/edit`}
                    className="btn btn-primary shadow rounded"
                  >
                    Редактировать
                  </a>
                  <button type="submit" className="btnDelite" id={el.id}>
                    Удалить
                  </button>
                </div>
              ) : (
                <p>....</p>
              )}
            </div>
          ))}
        {login && (
          <a href="/price/create" className="btn btn-primary shadow rounded">
            Создать
          </a>
        )}
        <div className="errmsg"></div>
      </div>
    </Layout>
  );
}

module.exports = Price;
