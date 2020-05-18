const db = require("../models");

module.exports = function(app) {

  // Create and exercise and push it to to the workout at the specified id
  app.put("/api/workouts/:id", function(req, res){
    db.Exercise.create(req.body)
      .then(({ _id }) => db.User.findOneAndUpdate({_id: req.params.id}, { $push: { excercises: _id } }, { new: true }))
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  // Create a new workout
  app.post("/api/workouts/", function(req, res){
    db.Workout.create(req.body)
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
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  // Find all workouts in a certain range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
};

