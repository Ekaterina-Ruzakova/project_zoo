const React = require("react");
const Layout = require("./Layout");

function Price({ login, prices }) {
  return (
    <Layout login={login}>
      <script defer src="/js/PriceDelite.js" />
      <div className="main_container">
        <div className="PriceContainer">
          <div className="additional_title_container">
            <h3 className="additional_title">Тарифы</h3>
          </div>
          <div className="cards_container">
            {prices
          && prices.map((el) => (
            <div key={el.id} className={`PriceCard price_${el.id} card_price`}>
              <h3 className="card_title">{el.title_price}</h3>
              <div className="card_value_container">
                <span className="card_secondary_title">- Для взрослых:</span>
                <span className="card_value">{el.all_price}</span>
              </div>
              <div className="card_value_container">
                <span className="card_secondary_title">- Для детей:</span>
                <span className="card_value">{el.children_price}</span>
              </div>
              {login && (
                <div className="CardEdit">
                  <a
                    href={`/price/${el.id}/edit`}
                    className=""
                  >
                    <img className="icon" src="/img/edit.svg" alt="edit" />
                  </a>
                  <img src="/img/delete.svg" alt="delete" className="btnDelite icon" id={el.id} />
                </div>
              )}
            </div>
          ))}
          </div>
          
          {login && (
          <a href="/price/create" style={{ textDecoration: 'none' }} className="main_button">
            Создать
          </a>
        )}
          <div className="errmsg" />
        </div>
      </div>
      
    </Layout>
  );
}

module.exports = Price;
