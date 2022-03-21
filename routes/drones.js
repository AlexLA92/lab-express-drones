const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/", async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    drones = await Drone.find();
    res.render("drones/list", { drones });
  } catch (error) {
    console.log("OOPS, we had an error :", error);
  }
});

router.get("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    res.render("drones/create-form");
  } catch (error) {
    console.log("OOPS, we had an error :", error);
  }
});

router.post("/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    const { name, propellers, maxSpeed } = req.body;
    const newDrone = {
      name,
      propellers,
      maxSpeed,
    };
    await Drone.create(newDrone);
    res.redirect("/drones");
  } catch (error) {
    console.log("OOPS, we had an error :", error);
    res.redirect("/drones/create");
  }
});

router.get("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const id = req.params.id;
    const drone = await Drone.findById(id);
    console.log(drone);
    res.render("drones/update-form", { drone });
  } catch (error) {
    console.log("OOPS, we had an error :", error);
    next(error);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const id = req.params.id;

    const { name, propellers, maxSpeed } = req.body;
    const editedDrone = {
      name,
      propellers,
      maxSpeed,
    };
    await Drone.findByIdAndUpdate(id, editedDrone);
    res.redirect("/drones");
  } catch (error) {
    console.log("OOPS, we had an error :", error);
    next(error);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    const id = req.params.id;
    console.log(id);
    await Drone.findByIdAndDelete(id);
    res.redirect("/drones");
  } catch (error) {
    console.log("OOPS, we had an error :", error);
    next(error);
  }
});

module.exports = router;
