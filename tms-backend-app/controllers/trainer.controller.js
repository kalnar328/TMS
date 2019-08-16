// var Trainer = require('../model/trainer.model');
// var db = require('./db');

// createTrainer = function(data){ 
//   return new Promise(function(resolve,reject){ 

//     var Trainer = function(){
//       this.trainerId = data.trainerId;
//       this.trainerName = data.trainerName;
//       this.designation = data.designation;
//     };
 
//     db.query(Trainer.add, (err, data)=> {
//         res.status(200).json({
//             message:"Product added.",
//             productId: data.insertId
//         });
//     })


//     user.save().then(function(){ 
//       resolve({status: 200, message: "Added a new user"}) 
//     }).catch(err => { 
//       reject({status: 500, message: "Error:- "+err}); 
//     }) 
//   }) 
// }