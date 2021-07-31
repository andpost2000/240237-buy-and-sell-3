'use strict';

const express = require(`express`);
const offersRoutes = require(`./routes/offers`);
const myRoutes = require(`./routes/my`);
const loginRoutes = require(`./routes/login`);
const searchRoutes = require(`./routes/search`);
const registerRoutes = require(`./routes/register`);
const mainRoutes = require(`./routes/main`);

const DEFAULT_PORT = 8080;
const app = express();
const PUBLIC_DIR = `./src/express/public`;

app.use(express.static(PUBLIC_DIR));
app.set(`views`, `./src/express/templates`);
app.set(`view engine`, `pug`);

app.use(`/offers`, offersRoutes);
app.use(`/my`, myRoutes);
app.use(`/login`, loginRoutes);
app.use(`/search`, searchRoutes);
app.use(`/register`, registerRoutes);
app.use(`/`, mainRoutes);

app.listen(DEFAULT_PORT);
