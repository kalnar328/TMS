const express = require('express');
const app = express();

const {getAll, getById,addTrainer,editTrainer,removeTrainer,getNoOfTrainers} = require('./trainer.router');
const {getAllTypes, getTypeById,addTrainingType,editTrainingType,removeTrainingType,getAllTypeIds} = require('./trainingType.router');
const {getAllEvents, getEventById,addEvent,editEvent,removeEvent,getAllEventIds} = require('./trainingEvent.router');


//url will ignore uppercases

//routes for trainers
app.get('/trainers', getAll);

app.get('/allTrainers', getNoOfTrainers);

app.get('/trainer/:id', getById);

app.post('/new', addTrainer);

app.put('/edit/:id', editTrainer);

app.delete('/remove/:id', removeTrainer);

//routes for training types
app.get('/trainingTypes', getAllTypes);

app.get('/trainingTypeIds', getAllTypeIds);

app.get('/trainingType/:id', getTypeById);

app.post('/trainingtype/add', addTrainingType);

app.put('/trainingType/edit/:id', editTrainingType);

app.delete('/trainingType/remove/:id', removeTrainingType);

// //routes for training events
app.get('/events', getAllEvents);

app.get('/eventIds', getAllEventIds);

app.get('/event/:id', getEventById);

app.post('/event/add', addEvent);

app.put('/event/edit/:id', editEvent);

app.delete('/event/remove/:id', removeEvent);

module.exports = app;