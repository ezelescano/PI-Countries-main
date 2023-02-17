const {Router} = require("express");
const activityRouter = Router();
const {createActivityHandler, getActivitiesHandler} = require("../handlers/activityHandler");

activityRouter.post("/", createActivityHandler);
activityRouter.get("/", getActivitiesHandler)

module.exports = activityRouter, getActivitiesHandler;



