'use strict';

const express = require(`express`);
const offersRoutes = require(`./routes/offers`);
const myRoutes = require(`./routes/my`);
const loginRoutes = require(`./routes/login`);
const searchRoutes = require(`./routes/search`);
const registerRoutes = require(`./routes/register`);

const DEFAULT_PORT = 8080;
const app = express();

app.get(`/`, (req, res) => res.send(`This is start page`));

app.use(`/offers`, offersRoutes);
app.use(`/my`, myRoutes);
app.use(`/login`, loginRoutes);
app.use(`/search`, searchRoutes);
app.use(`/register`, registerRoutes);

app.listen(DEFAULT_PORT);
