import passport from "passport";
const express = require("express");
const plannerController = require("../controller/plannerController");

const PlannerRouter = express.Router();

// /planner/exercise 경로로 POST 요청이 오면 createExercisePlan 함수를 실행.
PlannerRouter.post("/exercise", passport.authenticate('jwt', { session: false }), plannerController.createExercisePlan);
PlannerRouter.post("/nutrition", passport.authenticate('jwt', { session: false }), plannerController.createNutritionPlan);

module.exports = PlannerRouter;