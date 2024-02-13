/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function Login({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/loginFetch.js" />
      <div className="main_login">
        <h2>Авторизация</h2>
        <form action="/login" method="POST" className="logForm" id="logForm">
          <input
            name="login"
            type="text"
            className="login form-control"
            required
            id="exampleInput1"
            placeholder="Логин"
          />
          <input
            name="password"
            type="password"
            className="password form-control"
            required
            id="exampleInput2"
            placeholder="Пароль"
          />
          <button type="submit" className="reg_log btn btn-primary">
            Войти
          </button>
        </form>
        <div className="logMsg" />
      </div>
    </Layout>
  );
}

module.exports = Login;
