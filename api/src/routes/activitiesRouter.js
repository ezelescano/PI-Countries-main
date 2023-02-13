const {Router} = require("express");
const activityRouter = Router();
const {createActivityHandler} = require("../handlers/activityHandler");

activityRouter.post("/", createActivityHandler);

module.exports = activityRouter;



