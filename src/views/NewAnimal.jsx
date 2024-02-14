const React = require('react');
const Layout = require('./Layout');

module.exports = function NewAnimal({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/newAnimalFetch.js" />
      <div className="main_container main_container_overflow">
        <div className="main_login">
          <h3 className="additional_title">Новое животное</h3>
          <div className="message" />
          <form className="createForm logForm">
            <input
              type="text" 
              className="main_input animal_input"
              id="exampleFormControlInput1"
              required
              name="image1"
              placeholder="Url"
            />
            <input
              type="text" 
              className="main_input animal_input"
              id="exampleFormControlInput2"
              required
              name="image2"
              placeholder="Url"
            />
            <input
              type="text" 
              className="main_input animal_input"
              id="exampleFormControlInput3"
              required
              name="image3"
              placeholder="Url"
            />
            <input
              type="text" 
              className="main_input animal_input"
              id="exampleFormControlInput4"
              required
              name="image4"
              placeholder="Url"
            />
            <input
              className="main_input animal_input"
              id="exampleFormControlTextarea1"
              name="title"
              required
              placeholder="Название"
            />
            <textarea
              className="main_input main_textarea animal_input"
              id="exampleFormControlTextarea2"
              rows="3"
              name="description"
              required
              placeholder="Описание"
            />
            <button type="submit" className="btn-success main_button">Добавить</button>
            <button type="submit" className="btn-danger back_link">Назад</button>
          </form>
        </div>
        
      </div>
      
    </Layout>
  );
};
