const React = require('react');
const Layout = require('./Layout');

module.exports = function Animals({ login, animals }) {
  return (
    <Layout login={login}>
      <script defer src="/js/animalsFetch.js" />
      <div className="main_container">
        <div className="containerAnimals">
          <div className="additional_title_container">
            <h3 className="additional_title">Животные</h3>
          </div>
          <div className="message" />
          <div className="animals">
            {animals && animals.map((el, index) => (
              <div key={el.id} id={`animal${el.id}`} className={`animalsDiv ${index % 2 !== 0 ? 'animalsDiv-reverted' : ''}`}>
                <div id={`carouselExampleIndicators${el.id}`} className="carousel slide carousel_animal" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {el.Photos.map((photo, index) => (
                      <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div
                          style={{
                            backgroundImage: `url(${photo.image})`, 
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center', 
                          }}
                          className="d-block animal_photo"
                        />
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
                <div className={`animal_info_container ${index % 2 !== 0 ? 'animal_info_container-reverted' : ''}`}>
                  <h3 className="elTitle additional_title">{el.title}</h3>
                  <div className="elDescription">{el.description}</div>
                </div>
                
                {login && (
                <div className={`CardEdit  ${index % 2 !== 0 ? 'buttonED-reverted' : 'buttonED'}`}>
                  <a href={`/upAnimal/${el.id}`}>
                    <img className="icon" src="/img/edit.svg" alt="edit" />
                  </a>
                  <img className="button_delete icon" src="/img/delete.svg" alt="delete" id={el.id} />
                </div>
              )}
              </div>
          ))}
          </div>
          {login && (
          <div style={{ marginBottom: '10px' }}>
            <a href="/newAnimal"><button className="buttonCreate main_button" type="submit">Создать</button></a>
          </div>
        )}
        </div>
      </div>
      
    </Layout>
  );
};
