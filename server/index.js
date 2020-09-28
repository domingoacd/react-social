import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../src/components/App.jsx';
import html from '../src/components/html.js';

const app = express();
const port = 3100;

app.use(express.static('server-build'));

app.get('/', (req, res) => {
    const sheet = new ServerStyleSheet();
    const body = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
    const styles = sheet.getStyleTags();
    res.send(
      html(
        body,
        styles,
        'title'
      )
    );
});

app.listen(port, () => console.log(`Server started at localhost:${port}`));