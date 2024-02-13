const React = require('react');
const Layout = require('./Layout');

function Home({ login }) {
  return (
    <Layout login={login} />
  );
}

module.exports = Home;
