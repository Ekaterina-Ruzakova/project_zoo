const React = require("react");
const Layout = require("../views/Layout");

function PriceEdit({ price }) {
  return (
    <Layout>
      <script defer src="/js/PriceEdit.js" />
      <div className="editContainer">
        <h1>Редактирование тарифа</h1>
        <form action={`/edit/${price.id}`} id="PriceEdit">
          <div className="form-group">
            <label>Название тарифа</label>
            <input
              type="text"
              name="title_price"
              defaultValue={price.title_price}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Цена для взрослых</label>
            <input
              type="number"
              name="all_price"
              defaultValue={price.all_price}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Цена для детей</label>
            <input
              type="number"
              name="children_price"
              defaultValue={price.children_price}
              className="form-control"
            />
          </div>
          <button type="button" className="btn btn-cancle">
            Назад
          </button>
          <button type="button" className="btn btn-save" id={price.id}>
            Сохранить изменения
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = PriceEdit;
