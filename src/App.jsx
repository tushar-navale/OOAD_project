import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import WorkoutTracker from './components/WorkoutTracker';
import ProgressTracker from './components/ProgressTracker';
import DietPlan from './components/DietPlan';
import ExerciseLibrary from './components/ExerciseLibrary';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/workout-tracker" element={<WorkoutTracker />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/diet-plan" element={<DietPlan />} />
        <Route path="/exercises" element={<ExerciseLibrary/>} />
        <Route path="/settings" element={<div>Settings - Coming Soon</div>} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;