import { useState } from 'react';
import { Zap, Trophy, User } from 'lucide-react';
import LandingPage from './components/LandingPage';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';

type Page = 'home' | 'leaderboard' | 'profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userPoints, setUserPoints] = useState(450);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>(['challenge1-week1']);
  const [badges, setBadges] = useState([
    { id: 'saver', name: 'Energy Saver', icon: '⚡', earned: true },
    { id: 'learner', name: 'Quick Learner', icon: '🧠', earned: true },
  ]);

  const addPoints = (points: number) => {
    setUserPoints(prev => prev + points);
  };

  const completeChallenge = (challengeId: string) => {
    if (!completedChallenges.includes(challengeId)) {
      setCompletedChallenges(prev => [...prev, challengeId]);
    }
  };

  const earnBadge = (badge: typeof badges[0]) => {
    if (!badges.find(b => b.id === badge.id)) {
      setBadges(prev => [...prev, badge]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="pb-20">
        {currentPage === 'home' && (
          <LandingPage 
            userPoints={userPoints}
            addPoints={addPoints}
            completedChallenges={completedChallenges}
            completeChallenge={completeChallenge}
            earnBadge={earnBadge}
          />
        )}
        {currentPage === 'leaderboard' && (
          <Leaderboard userPoints={userPoints} />
        )}
        {currentPage === 'profile' && (
          <Profile 
            userPoints={userPoints}
            badges={badges}
            completedChallenges={completedChallenges}
          />
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-3 border-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-4 grid grid-cols-3 gap-4">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
              currentPage === 'home'
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-900'
            }`}
          >
            <Zap size={24} />
            <span>Challenges</span>
          </button>

          <button
            onClick={() => setCurrentPage('leaderboard')}
            className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
              currentPage === 'leaderboard'
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-900'
            }`}
          >
            <Trophy size={24} />
            <span>Leaderboard</span>
          </button>

          <button
            onClick={() => setCurrentPage('profile')}
            className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
              currentPage === 'profile'
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-900'
            }`}
          >
            <User size={24} />
            <span>Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}