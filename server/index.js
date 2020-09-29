import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import App from '../src/components/App.jsx';
import html from '../src/components/html.js';

import createReqTemplate from './middlewares/createReqTemplate.js';


const app = express();
const port = 3100;

app.use(express.static('server-build'));
app.use(createReqTemplate);

app.get('/', (req, res) => {
    res.send(
      html(
        req.template.body,
        req.template.styles,
        'Home'
      )
    );
});

app.get('/profile', (req, res) => {
    res.send(html(req.template.body, req.template.styles, 'Settings'));
});

app.get('/settings', (req, res) => {
    res.send(html(req.template.body, req.template.styles, 'Settings'));
});

app.listen(port, () => console.log(`Server started at localhost:${port}`));