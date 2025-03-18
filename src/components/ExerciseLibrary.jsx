import { useState } from 'react';

const exerciseData = [
  {
    id: 1,
    name: 'Bench Press',
    muscleGroup: 'chest',
    equipment: 'Barbell, Bench',
    difficulty: 'intermediate',
    description: 'A compound exercise that primarily targets the chest muscles.',
    instructions: [
      'Lie on a flat bench with feet firmly on the ground',
      'Grip the barbell slightly wider than shoulder width',
      'Lower the bar to your chest with controlled movement',
      'Press the bar back up to starting position'
    ]
  },
  {
    id: 2,
    name: 'Squats',
    muscleGroup: 'legs',
    equipment: 'Barbell, Rack',
    difficulty: 'intermediate',
    description: 'A fundamental lower body compound exercise.',
    instructions: [
      'Position bar on upper back',
      'Stand with feet shoulder-width apart',
      'Lower body until thighs are parallel to ground',
      'Return to starting position'
    ]
  },
  // Add more exercises as needed
];

const muscleGroups = ['all', 'chest', 'back', 'legs', 'shoulders', 'arms', 'core'];

export default function ExerciseLibrary() {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExercises = exerciseData.filter(exercise => {
    const matchesMuscleGroup = selectedMuscleGroup === 'all' || exercise.muscleGroup === selectedMuscleGroup;
    const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMuscleGroup && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Exercise Library</h2>
      
      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search exercises..."
          className="px-4 py-2 border rounded-md flex-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={selectedMuscleGroup}
          onChange={(e) => setSelectedMuscleGroup(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          {muscleGroups.map(group => (
            <option key={group} value={group}>
              {group.charAt(0).toUpperCase() + group.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Exercise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map(exercise => (
          <div key={exercise.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
            <div className="mb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {exercise.muscleGroup}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {exercise.difficulty}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{exercise.description}</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Equipment needed:</h4>
              <p className="text-gray-600">{exercise.equipment}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside text-gray-600">
                {exercise.instructions.map((step, index) => (
                  <li key={index} className="mb-1">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}