const React = require('react');

module.exports = function Header({ login }) {
  return (
    <div className="header_container">
      {login ? (
        <>

          <a className="btn_link" href="/">
            <div className="home_page">Главная</div>
          </a>
          <a className="btn_link" href="/animals">Животные</a>
          <a className="btn_link" href="/price">Тарифы</a>
          <a className="btn_link" href="/logout">Выйти</a>
        </>
      ) : (
        <>
          <a className="btn_link" href="/">
            <div className="home_page">Главная</div>
          </a>
          <a className="btn_link" href="/animals">Животные</a>
          <a className="btn_link" href="/price">Тарифы</a>
          <a className="btn_link" href="/login">Войти</a>
        </>
      ) }

    </div>
  );
};
