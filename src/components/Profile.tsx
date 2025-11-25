import { Award, Zap, TrendingDown, Calendar, Settings } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  icon: string;
  earned: boolean;
}

interface ProfileProps {
  userPoints: number;
  badges: Badge[];
  completedChallenges: string[];
}

const allBadges = [
  { id: 'saver', name: 'Energy Saver', icon: '⚡', description: 'Beat Helsinki average', earned: true },
  { id: 'learner', name: 'Quick Learner', icon: '🧠', description: 'Complete your first quiz', earned: true },
  { id: 'quiz-master', name: 'Quiz Master', icon: '🎓', description: 'Complete 3 quizzes', earned: false },
  { id: 'streak-week', name: 'Week Warrior', icon: '🔥', description: '7-day streak', earned: false },
  { id: 'streak-month', name: 'Monthly Master', icon: '💪', description: '30-day streak', earned: false },
  { id: 'eco-hero', name: 'Eco Hero', icon: '🌍', description: 'Save 1000 kWh total', earned: false },
];

export default function Profile({ userPoints, badges, completedChallenges }: ProfileProps) {
  const earnedBadges = allBadges.filter(b => 
    badges.some(userBadge => userBadge.id === b.id)
  );
  const lockedBadges = allBadges.filter(b => 
    !badges.some(userBadge => userBadge.id === b.id)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="mb-8">
        <div className="bg-white border-3 border-gray-900 rounded-lg p-6">
          <div className="flex items-start gap-6">
            <div className="bg-gray-100 border-3 border-gray-900 rounded-lg w-24 h-24 flex items-center justify-center">
              <span className="text-5xl">👤</span>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-gray-900 mb-1">Energy Champion</h1>
                  <p className="text-gray-600">Helsinki, Finland 🇫🇮</p>
                </div>
                <button className="bg-gray-100 border-2 border-gray-900 rounded-lg p-2 hover:bg-gray-200 transition-colors">
                  <Settings className="text-gray-900" size={20} />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-gray-50 border-2 border-gray-900 rounded-lg px-4 py-2">
                  <p className="text-gray-600">Points</p>
                  <p className="text-gray-900">{userPoints}</p>
                </div>
                <div className="bg-gray-50 border-2 border-gray-900 rounded-lg px-4 py-2">
                  <p className="text-gray-600">Streak</p>
                  <p className="text-gray-900">3 days 🔥</p>
                </div>
                <div className="bg-gray-50 border-2 border-gray-900 rounded-lg px-4 py-2">
                  <p className="text-gray-600">Rank</p>
                  <p className="text-gray-900">#4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="mb-8">
        <h2 className="text-gray-900 mb-4">📊 This Week's Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border-3 border-gray-900 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <TrendingDown className="text-gray-900" size={24} />
              <p className="text-gray-900">Consumption</p>
            </div>
            <p className="text-gray-900">95 kWh</p>
            <p className="text-gray-600">21% below average!</p>
          </div>
          <div className="bg-white border-3 border-gray-900 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="text-gray-900" size={24} />
              <p className="text-gray-900">Active Days</p>
            </div>
            <p className="text-gray-900">6/7 days</p>
            <p className="text-gray-600">Great consistency!</p>
          </div>
        </div>
      </div>

      {/* Earned Badges */}
      <div className="mb-8">
        <h2 className="text-gray-900 mb-4 flex items-center gap-2">
          <Award className="text-gray-900" size={28} />
          Your Badges ({earnedBadges.length})
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {earnedBadges.map((badge) => (
            <div
              key={badge.id}
              className="bg-white border-3 border-gray-900 rounded-lg p-4"
            >
              <div className="bg-gray-100 border-2 border-gray-900 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">{badge.icon}</span>
              </div>
              <p className="text-gray-900 text-center mb-1">{badge.name}</p>
              <p className="text-gray-600 text-center">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Locked Badges */}
      <div className="mb-8">
        <h2 className="text-gray-900 mb-4">🔒 Locked Badges</h2>
        <div className="grid grid-cols-2 gap-4">
          {lockedBadges.map((badge) => (
            <div
              key={badge.id}
              className="bg-gray-50 border-2 border-gray-300 border-dashed rounded-lg p-4 opacity-60"
            >
              <div className="bg-gray-100 border-2 border-gray-300 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl grayscale">{badge.icon}</span>
              </div>
              <p className="text-gray-600 text-center mb-1">{badge.name}</p>
              <p className="text-gray-500 text-center">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-gray-900 mb-4">⚡ Recent Activity</h2>
        <div className="space-y-3">
          <div className="bg-white border-2 border-gray-900 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 border-2 border-gray-900 rounded-lg w-10 h-10 flex items-center justify-center">
                  <TrendingDown className="text-gray-900" size={20} />
                </div>
                <div>
                  <p className="text-gray-900">Beat the Average</p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
              </div>
              <p className="text-gray-900">+100 pts</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-900 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 border-2 border-gray-900 rounded-lg w-10 h-10 flex items-center justify-center">
                  <Award className="text-gray-900" size={20} />
                </div>
                <div>
                  <p className="text-gray-900">Earned Quick Learner Badge</p>
                  <p className="text-gray-500">1 day ago</p>
                </div>
              </div>
              <span className="text-2xl">🎉</span>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-900 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 border-2 border-gray-900 rounded-lg w-10 h-10 flex items-center justify-center">
                  <Zap className="text-gray-900" size={20} />
                </div>
                <div>
                  <p className="text-gray-900">Completed Energy Quiz</p>
                  <p className="text-gray-500">1 day ago</p>
                </div>
              </div>
              <p className="text-gray-900">+75 pts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}