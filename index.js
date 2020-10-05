import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import App from './src/components/App.jsx'
import createReqTemplate from './server/middlewares/createReqTemplate.js';

import path from 'path';
import fs from 'fs';


const app = express();
const port = 3000;

app.use(express.static(path.join(path.dirname(__dirname), '/build')));
console.log(path.dirname(__dirname));
app.use(createReqTemplate);

app.get('/', (req, res) => {
  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.log('There has been an error', err);
      return res.status(500).send('Error reading index.html');
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

app.get('/profile', (req, res) => {
    // res.send(html(req.template.body, req.template.styles, 'Settings'));
});

app.get('/settings', (req, res) => {
    // res.send(html(req.template.body, req.template.styles, 'Settings'));
});

app.listen(port, () => console.log(`Server started at localhost:${port}`));