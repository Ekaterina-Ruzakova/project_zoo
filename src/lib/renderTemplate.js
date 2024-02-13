require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderTemplate(component, props, res) {
  const elem = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(elem);
  res.write('<!DOCTYPE html>');
  res.write(html);
  res.end();
}

module.exports = renderTemplate;
