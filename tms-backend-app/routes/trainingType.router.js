module.exports = {

    getAllTypes: (req, res) => {
        // query database to get all the types
        let query = "SELECT * FROM trainingtype"; 
  
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(result);
        });
    },

    getAllTypeIds: (req, res) => {
      // query database to get all the types
      let query = "SELECT COUNT(trainingId) as total FROM trainingtype"; 

      // execute query
      db.query(query, (err, result) => {
          if (err) {
              return res.status(500).send(err);
          }
          return res.send(result);
      });
  },
  
    getTypeById: (req, res) => {
      id = req.params.id;
      // query database to get all the types
      let query = "SELECT * FROM trainingtype WHERE trainingId = '"+id+"' "; 
  
      // execute query
      db.query(query, (err, result) => {
          if (err) {
              return res.status(500).send(err);
          }
          return res.send(result);
      });
    },
  
    addTrainingType: (req, res) => {
        console.log(req.body);
  
        var TrainingType = {
             trainingId : req.body.trainingId,
             type : req.body.trainingType,
             description : req.body.description
        }

        let query = "INSERT INTO trainingtype(trainingId, trainingType, description) VALUES ('"+ TrainingType.trainingId +"', '"+ TrainingType.type +"', '"+ TrainingType.description +"')" ;
        let selectQuery = "SELECT * FROM trainingtype WHERE trainingId = '"+ TrainingType.trainingId +"' ";
  
        db.query(selectQuery, (err, result) => {
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
  
    editTrainingType: (req, res) => {
      console.log(req.body);
  
      var TrainingType = {
        trainingId : req.body.trainingId,
        trainingType : req.body.trainingType,
        description : req.body.description
      }
  
      let query = "UPDATE trainingtype SET trainingId = '"+ TrainingType.trainingId +"', trainingType = '"+ TrainingType.trainingType +"', description = '"+ TrainingType.description +"' WHERE trainingId = '"+ TrainingType.trainingId +"' ";
  
      db.query(query, (err, result) => {
          if(err){
              return res.status(500).send(err);
          }
          return res.status(200).send({message: "successfully updated"});
      });
    },
  
    removeTrainingType: (req,res) => {
  
      id = req.params.id;
     
      // console.log(id);
     
      let query = "DELETE FROM trainingtype WHERE trainingId = '"+ id +"' ";
  
      db.query(query, (err, result) => {
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send({message: "successfully removed"});
      });
    }
  
  };