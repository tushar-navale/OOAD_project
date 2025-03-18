import { useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    fitness_level: 'beginner'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        {/* Add other form fields similarly */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}