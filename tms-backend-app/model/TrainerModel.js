// class TrainerModel {

//     TrainerModel(){
//         this.trainerId = trainer.trainerId;
//         this.trainerName = trainer.trainerName;
//         this.designation = trainer.designation;
//     }

//     get(){
//         var addSql = "INSERT INTO trainer(trainerId, trainerName, designation) VALUES ('"+ Trainer.trainerId +"', '"+Trainer.trainerName+"', '"+ Trainer.designation+") ";
//         return addSql;
//     }
// }



// // var Trainer = function(trainer){
// //     this.trainerId = trainer.trainerId;
// //     this.trainerName = trainer.trainerName;
// //     this.designation = trainer.designation;
// // };


// // Trainer.addTrainer = function (newTrainer, result) {    
// //     sql.query("INSERT INTO trainer set ?", newTrainer, function (err, res) {
            
// //             if(err) {
// //                 console.log("error: ", err);
// //                 result(err, null);
// //             }
// //             else{
// //                 console.log(res.insertId);
// //                 result(null, res.insertId);
// //             }
// //         });           
// // };

// // module.exports = Trainer;