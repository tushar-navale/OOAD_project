import { useState } from 'react';

export default function DietPlan() {
  const [dietPlan, setDietPlan] = useState({
    calorie_goal: 0,
    meals: [],
    macros: {
      protein: 0,
      carbs: 0,
      fats: 0
    }
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Diet Plan</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Daily Goals</h3>
          {/* Calorie and macro goals */}
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Meal Plan</h3>
          {/* Meal planning section */}
        </div>
      </div>
    </div>
  );
}