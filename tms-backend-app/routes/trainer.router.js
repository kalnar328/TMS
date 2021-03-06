module.exports = {

  getAll: (req, res) => {
      // query database to get all the trainers
      let query = "SELECT * FROM trainer"; 

      // execute query
      db.query(query, (err, result) => {
          if (err) {
              return res.status(500).send(err);
          }
          return res.send(result);
      });
  },

  getNoOfTrainers: (req, res) => {
    // query database to get all the trainers
    let query = "SELECT COUNT(trainerId) as total FROM trainer"; 

    // execute query
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send(result);
    });
},

  getById: (req, res) => {
    id = req.params.id;
    // query database to get all the trainers
    let query = "SELECT * FROM trainer WHERE trainerId = '"+id+"' "; 

    // execute query
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send(result);
    });
  },

  addTrainer: (req, res) => {
      console.log(req.body);

      var Trainer = {
           name : req.body.trainerName,
           id : req.body.trainerId,
           designation : req.body.designation
      }

      let message = '';

      let query = "INSERT INTO trainer(trainerId, trainerName, designation) VALUES ('"+ Trainer.id +"', '"+Trainer.name+"', '"+ Trainer.designation+"')" ;
      let selectQuery = "SELECT * FROM trainer WHERE trainerId = '"+ Trainer.id +"' ";

      db.query(selectQuery, (err, result) => {
        /* check whether the trainer Id exists in the database */
          if(result.length > 0){
             message = 'ID exists';
             return res.status(202).send({message: message});
          }else{
             db.query(query, (err, result) => {
              if(err){
                  return res.status(500).send(err);
              }
              return res.status(200).send({message: "successfully added"});
          });
          }
      });  
  },

  editTrainer: (req, res) => {
    console.log(req.body);

    var Trainer = {
         name : req.body.trainerName,
         id : req.body.trainerId,
         designation : req.body.designation
    }

    let query = "UPDATE trainer SET trainerId = '"+ Trainer.id +"', trainerName = '"+Trainer.name+"', designation = '"+ Trainer.designation+"' WHERE trainerId = '"+Trainer.id+"' ";

    db.query(query, (err, result) => {
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send({message: "successfully updated"});
    });
  },

  removeTrainer: (req,res) => {

    id = req.params.id;

    let query = "DELETE FROM trainer WHERE trainerId = '"+ id +"' ";

    db.query(query, (err, result) => {
      if(err){
          return res.status(500).send(err);
      }
      return res.status(200).send({message: "successfully removed"});
    });
  }

};