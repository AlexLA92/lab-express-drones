// Iteration #1
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = 
    {
      name: {type : String, unique : true},
      propellers: {type : Number, min:0},
      maxSpeed: {type : Number, min:0},
    }

const Drone = mongoose.model('Drone', droneSchema)

module.exports = Drone


