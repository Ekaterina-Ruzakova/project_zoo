const React = require('react');
const Header = require('./components/Header');

function Layout(props) {
  // eslint-disable-next-line react/prop-types
  const { children, login } = props;
  return (
    <html lang="ru">
      <head>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Russo+One&display=swap" rel="stylesheet" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ZOO</title>
        <link rel="stylesheet" href="/style/home.css" />
        <link rel="stylesheet" href="/style/login.css" />
        <link rel="stylesheet" href="/style/price.css" />
        <link rel="stylesheet" href="/style/animal.css" />
      </head>
      <body>
        <Header login={login} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
