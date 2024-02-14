const React = require('react');
const Layout = require('./Layout');

module.exports = function UpdateAnimal({ login, animal }) {
  return (
    <Layout login={login}>
      <script defer src="/js/updateAnimalFetch.js" />
      <div className="main_container main_container_overflow">
        <div className="main_login">
          <h3 className="additional_title">Редактирование животного</h3>
          <div className="message" />
          <form className="edetForm createForm logForm" id={animal.id}>
            <input
              type="text" 
              className="main_input animal_input"
              id="exampleFormControlInput1"
              required
              name="image1"
              placeholder="Url"
              defaultValue={animal.Photos[0].image}
            />
            <input
              type="text" 
              className="main_input animal_input"
              id="exampleFormControlInput2"
              required
              name="image2"
              placeholder="Url"
              defaultValue={animal.Photos[1].image}
            />
            <input
              type="text" 
              className="main_input animal_input"
              id="exampleFormControlInput3"
              required
              name="image3"
              placeholder="Url"
              defaultValue={animal.Photos[2].image}
            />
            <input
              type="text" 
              className="main_input animal_input"
              id="exampleFormControlInput4"
              required
              name="image4"
              placeholder="Url"
              defaultValue={animal.Photos[3].image}
            />
            <input
              className="main_input animal_input"
              id="exampleFormControlTextarea1"
              name="title"
              required
              placeholder="Название"
              defaultValue={animal.title}
            />
            <textarea
              className="main_input main_textarea animal_input"
              id="exampleFormControlTextarea2"
              rows="3"
              name="description"
              required
              placeholder="Описание"
              defaultValue={animal.description}
            />
            <div className="button">
              <button type="submit" className="btn-success main_button" id={animal.id}>Добавить</button>
              <button type="submit" className="btn-danger back_link" id={animal.id}>Назад</button>
            </div>
          </form>
        </div>
        
      </div>
      
    </Layout>
  );
};
