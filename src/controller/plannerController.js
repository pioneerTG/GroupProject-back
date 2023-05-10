import ExercisePlanner from "../models/ExercisePlan";
import NutritionPlanner from "../models/NutritionPlan";

export const createExercisePlan = async(req, res, next) => {
  try {
    const { plan } = req.body;
    console.log('플랜확인:',plan);
    console.log('길이 확인:',plan.length)
    // Plan 배열의 각 요소에 대해 DB에 저장
    for (let i = 0; i < plan.length; i++) {
      const { createAt, type, count } = plan[i];
      await ExercisePlanner.create({
        user_id: req.user.id,
        createAt,
        type,
        count,
      });
    }
    res.status(200).json({ message: "Exercise plan created successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
}

export const createNutritionPlan = async(req, res, next) => {
  try {
    const { plan } = req.body;
    console.log('플랜확인:',plan);
    console.log('길이 확인:',plan.length)
    // Plan 배열의 각 요소에 대해 DB에 저장
    for (let i = 0; i < plan.length; i++) {
      const { createAt, name, calorie, protein, fat, cho } = plan[i];
      await NutritionPlanner.create({
        user_id: req.user.id,
        createAt,
        name,
        calorie,
        protein,
        fat,
        cho,
      });
    }
    res.status(200).json({ message: "Nutrition plan created successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
}