import { useState } from 'react';

export default function WorkoutTracker() {
  const [session, setSession] = useState({
    date: new Date(),
    exercises: [],
    duration: 0
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Workout Tracker</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Current Session</h3>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">
            Start Session
          </button>
        </div>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Add Exercise</h3>
          {/* Exercise input form */}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Session Summary</h3>
          {/* Session summary display */}
        </div>
      </div>
    </div>
  );
}