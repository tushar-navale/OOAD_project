import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
          Welcome to FitLife Journal
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Your personal digital fitness companion for tracking workouts and
          achieving your goals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              className="w-auto pb-4"
              src="./public/daniel-apodaca-WdoQio6HPVA-unsplash.jpg"
              alt=""
            />
            <h2 className="text-2xl font-semibold mb-4">Workout Tracking</h2>
            <p className="text-gray-600 mb-4">
              Log your exercises, sets, and reps with our easy-to-use workout
              tracker
            </p>
            <Link
              to="/workout-tracker"
              className="text-blue-600 hover:text-blue-800"
            >
              Start Tracking →
            </Link>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
              className="w-auto pb-4"
              src="./public/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
              alt=""
            />
            <h2 className="text-2xl font-semibold mb-4">Progress Monitoring</h2>
            <p className="text-gray-600 mb-4">
              Track your progress with detailed analytics and visual charts
            </p>
            <Link to="/progress" className="text-blue-600 hover:text-blue-800">
              View Progress →
            </Link>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
              className="object-fill pb-4"
              src="./public/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg"
              alt=""
            />
            <h2 className="text-2xl font-semibold mb-4">
              Custom Workout Plans
            </h2>
            <p className="text-gray-600 mb-4">
              Create and follow personalized workout plans tailored to your
              goals
            </p>
            <Link
              to="/workout-plans"
              className="text-blue-600 hover:text-blue-800"
            >
              Create Plan →
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
}
