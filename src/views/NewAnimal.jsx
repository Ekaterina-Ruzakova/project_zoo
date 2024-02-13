const React = require('react');
const Layout = require('./Layout');

module.exports = function NewAnimal({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/newAnimalFetch.js" />
      <h2 className="hello">Раздел добавления нового животного</h2>
      <div className="message" />
      <form className="createForm">
        <div className="mb-3">
          <input type="text" alt="фото" className="form-control1" id="exampleFormControlInput1" required name="image1" placeholder="Введите url фото" />
        </div>
        <div className="mb-3">
          <input type="text" alt="фото" className="form-control2" id="exampleFormControlInput2" required name="image2" placeholder="Введите url фото" />
        </div>
        <div className="mb-3">
          <input type="text" alt="фото" className="form-control3" id="exampleFormControlInput3" required name="image3" placeholder="Введите url фото" />
        </div>
        <div className="mb-3">
          <input type="text" alt="фото" className="form-control4" id="exampleFormControlInput4" required name="image4" placeholder="Введите url фото" />
        </div>
        <div className="titleA">
          <label htmlFor="exampleFormControlTextarea1" className="form-label5">Имя</label>
          <textarea className="form-controlT" id="exampleFormControlTextarea1" rows="1" name="title" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea2" className="form-label6">Описание</label>
          <textarea className="form-controlD" id="exampleFormControlTextarea2" rows="3" name="description" required />
        </div>
        <div className="button">
          <button type="submit" className="btn btn-success">Добавить</button>
          <button type="submit" className="btn btn-danger">Назад</button>
        </div>
      </form>
    </Layout>
  );
};
