module.exports = {

    getAllEvents: (req, res) => {
        // query database to get all the events
        // let query = "SELECT DATE(startDate) from events"
        let query = "SELECT eventId,  startdate, endDate, trainingId, trainerId FROM events"; 
  
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(result);
        });
    }, 

    getAllEventIds: (req, res) => {
      // query database to get all the events
      // let query = "SELECT DATE(startDate) from events"
      let query = "SELECT COUNT(eventId) as total FROM events"; 

      // execute query
      db.query(query, (err, result) => {
          if (err) {
              return res.status(500).send(err);
          }
          return res.send(result);
      });
  },
  
    getEventById: (req, res) => {
      id = req.params.id;
      // query database to get all the training events
      let query = "SELECT * FROM events WHERE eventId = '"+ id +"' "; 
  
      // execute query
      db.query(query, (err, result) => {
          if (err) {
              return res.status(500).send(err);
          }
          return res.send(result);
      });
    },
  
    addEvent: (req, res) => {
        console.log(req.body);
  
        var Event = {
             id : req.body.eventId,
             start : req.body.startDate,
             end : req.body.endDate, 
             trainingId : req.body.trainingId,
             trainerId : req.body.trainerId 
        }
  
        let query = "INSERT INTO events(eventId, startDate, endDate, trainingId, trainerId) VALUES ('"+ Event.id +"', '"+Event.start+"', '"+ Event.end+"', '"+ Event.trainingId+"' , '"+ Event.trainerId+"')" ;
        let selectQuery = "SELECT * FROM events WHERE eventId = '"+ Event.id +"' ";
  
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
  
    editEvent: (req, res) => {
      console.log(req.body);
  
      var Event = {
        id : req.body.eventId,
        start : req.body.startDate,
        end : req.body.endDate, 
        trainingId : req.body.trainingId,
        trainerId : req.body.trainerId 
   }
  
      let query = "UPDATE events SET eventId = '"+ Event.id +"', startDate = '"+Event.start+"', endDate = '"+ Event.end+"', trainingId = '"+Event.trainingId+"', trainerId = '"+Event.trainerId+"' WHERE eventId = '"+ Event.id+"' ";
  
      db.query(query, (err, result) => {
          if(err){
              return res.status(500).send(err);
          }
          return res.status(200).send({message: "successfully updated"});
      });
    },
  
    removeEvent: (req,res) => {
  
      id = req.params.id;
     
      // console.log(id);
     
      let query = "DELETE FROM events WHERE eventId = '"+ id +"' ";
  
      db.query(query, (err, result) => {
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send({message: "successfully removed"});
      });
    }
  
  };