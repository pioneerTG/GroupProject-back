const express = require("express");
const plannerController = require("../controller/plannerController");

const PlannerRouter = express.Router();

// /planner/exercise 경로로 POST 요청이 오면 createExercisePlan 함수를 실행.
PlannerRouter.post("/exercise", plannerController.createExercisePlan);

module.exports = PlannerRouter;