import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import App from '../../src/components/App.jsx';

export default function createReqTemplate(req, res, next) {
  const sheet = new ServerStyleSheet();
  const context = {};
  const styles = ''
  const body = ReactDOMServer.renderToString(
   /* <StaticRouter location={req.url} context={context}>
      {sheet.collectStyles(<App />)}
    </StaticRouter>*/
    <App />
  );
  // const styles = sheet.getStyleTags();

  req.template = {
    body: body,
    styles: styles
  }

  next();
}