const db = require("../models");

module.exports = function(app) {

  // Create and exercise and push it to to the workout at the specified id
  app.put("/api/workouts/:id", function(req, res){
    db.Exercise.create(req.body)
      .then((exercise) => db.Workout.findOneAndUpdate({_id: req.params.id}, { $push: { exercises: exercise } }))
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  // app.put("/api/workouts/:id", function(req, res){
  //   console.log(req.body)
  //   db.Workout.findOneAndUpdate(
  //     {_id: req.params.id}, 
  //     { $push: { exercises: req.body } })
  //     .then(workouts => {
  //       res.json(workouts);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  // Create a new workout
  app.post("/api/workouts/", function(req, res){
    db.Workout.create({})
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  // Find all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .populate("exercises")
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/exercises", (req, res) => {
    db.Exercise.find({})
      .then(exercises => {
        res.json(exercises);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  // Find all workouts in a certain range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .populate("exercises")
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
};

