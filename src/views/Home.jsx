const React = require('react');
const Layout = require('./Layout');

function Home({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/homeFetch.js" />
      <div className="main">
        <div className="main_container">
          <div className="home">
            <div className="title">
              <h2>УРЮПИНСКИЙ</h2>
              <h2 className="secondary_title">ЗООПАРК</h2>
            </div>
            <div className="hello_word">
              <span>Исследуйте невероятный мир животных и погрузитесь в чудеса природы</span>
            </div>
          </div>

        </div>

      </div>

    </Layout>
  );
}

module.exports = Home;
