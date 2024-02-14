/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function Login({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/loginFetch.js" />
      <div className="main_container main_container_overflow">
        <div className="main_login">
          <h3 className="additional_title">Авторизация</h3>
          <form action="/login" method="POST" className="logForm" id="logForm">
            <input
              name="login"
              type="text"
              className="login main_input"
              required
              id="exampleInput1"
              placeholder="Логин"
            />
            <input
              name="password"
              type="password"
              className="password main_input"
              required
              id="exampleInput2"
              placeholder="Пароль"
            />
            <button type="submit" className="reg_log main_button">
              Войти
            </button>
          </form>
          <div className="logMsg" />
        </div>
      </div>

    </Layout>
  );
}

module.exports = Login;
