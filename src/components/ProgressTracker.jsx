import { useState } from 'react';

export default function ProgressTracker() {
  const [progress, setProgress] = useState([]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Progress Tracker</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Weight Progress</h3>
          {/* Weight tracking chart */}
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Workout Progress</h3>
          {/* Workout progress chart */}
        </div>
      </div>
    </div>
  );
}