const React = require('react');

module.exports = function Header({ login }) {
  return (
    <nav className="nav">
      {login ? (
        <>

          <a className="nav-link" href="/">
            <div className="home_page">ZOO</div>
          </a>
          <a className="nav-link" href="/">Животные</a>
          <a className="nav-link" href="/">Тарифы</a>
          <a className="nav-link" href="/">Выйти</a>
        </>
      ) : (
        <>

          <a className="nav-link" href="/">
            <div className="home_page">ZOO</div>
          </a>
          <a className="nav-link" href="/animals">Животные</a>
          <a className="nav-link" href="/events/new">Тарифы</a>
          <a className="nav-link" href="/lk">Администратор</a>

        </>
      ) }

    </nav>
  );
};
