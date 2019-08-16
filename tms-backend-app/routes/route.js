const express = require('express');
const app = express();

//routes for trainers
const {getAll} = require('./trainer.router');
app.get('/trainers', getAll);

const {getById} = require('./trainer.router');
app.get('/trainer/:id', getById);

const {addTrainer} = require('./trainer.router');
app.post('/new', addTrainer);

const {editTrainer} = require('./trainer.router');
app.put('/edit/:id', editTrainer);

const {removeTrainer} = require('./trainer.router');
app.delete('/remove/:id', removeTrainer);

module.exports = app;