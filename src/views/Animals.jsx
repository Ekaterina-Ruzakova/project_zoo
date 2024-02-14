const React = require('react');
const Layout = require('./Layout');

module.exports = function Animals({ login, animals }) {
  return (
    <Layout login={login}>
      <script defer src="/js/animalsFetch.js" />
      <div className="containerAnimals">
        <h2>Зверята</h2>
        <div className="message" />
        <div className="animals">
          {animals && animals.map((el) => (
            <div key={el.id} id={`animal${el.id}`} className="animalsDiv">
              <div id={`carouselExampleIndicators${el.id}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {el.Photos.map((photo, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <img src={photo.image} className="d-block w-100" alt={`Photo ${index}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${el.id}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${el.id}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Следующий</span>
                </button>
              </div>
              <h2 className="elTitle">{el.title}</h2>
              <h3 className="elDescription">{el.description}</h3>
              {login && (
                <div className="buttonED">
                  <a href={`/upAnimal/${el.id}`}><button type="submit" className="btn btn-secondary" id={el.id}>Изменить</button></a>
                  <button type="submit" className="btn btn-dark" id={el.id}>Удалить</button>
                </div>
              )}
            </div>
          ))}
        </div>
        {login && (
          <div>
            <a href="/newAnimal"><button className="buttonCreate" type="submit">Новый зверь</button></a>
          </div>
        )}
      </div>
    </Layout>
  );
};
