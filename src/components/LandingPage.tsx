import { useState } from 'react';
import { Zap, Award, TrendingDown, BookOpen, Info, Flame } from 'lucide-react';
import ChallengeCard from './ChallengeCard';
import QuizModal from './QuizModal';
import ProjectModal from './ProjectModal';

interface LandingPageProps {
  userPoints: number;
  addPoints: (points: number) => void;
  completedChallenges: string[];
  completeChallenge: (id: string) => void;
  earnBadge: (badge: { id: string; name: string; icon: string; earned: boolean }) => void;
}

export default function LandingPage({ 
  userPoints, 
  addPoints, 
  completedChallenges,
  completeChallenge,
  earnBadge
}: LandingPageProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showProject, setShowProject] = useState(false);

  // Mock data for user consumption
  const userConsumption = 95; // kWh
  const helsinkiAverage = 120; // kWh
  const currentWeek = 'week47-2024';

  const challenge1Completed = completedChallenges.includes(`challenge1-${currentWeek}`);
  const challenge2Completed = completedChallenges.includes(`challenge2-${currentWeek}`);
  const challenge3Completed = completedChallenges.includes(`challenge3-${currentWeek}`);

  const handleChallenge1Complete = () => {
    if (!challenge1Completed) {
      addPoints(100);
      completeChallenge(`challenge1-${currentWeek}`);
    }
  };

  const handleQuizComplete = () => {
    if (!challenge2Completed) {
      addPoints(75);
      completeChallenge(`challenge2-${currentWeek}`);
      earnBadge({ id: 'quiz-master', name: 'Quiz Master', icon: '🧠', earned: true });
    }
    setShowQuiz(false);
  };

  const handleProjectView = () => {
    if (!challenge3Completed) {
      addPoints(50);
      completeChallenge(`challenge3-${currentWeek}`);
    }
    setShowProject(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-gray-900 mb-2 inline-block border-b-4 border-gray-900 pb-1">
              Watt-a-Game!
            </h1>
            <p className="text-gray-600">Your energy-saving adventure!</p>
          </div>
          <div className="bg-white border-3 border-gray-900 rounded-lg px-6 py-3">
            <div className="flex items-center gap-2">
              <Award className="text-gray-900" size={24} />
              <span className="text-gray-900">{userPoints} pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Lesson Card */}
      <div className="mb-8 bg-gray-50 border-3 border-gray-900 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="bg-white rounded-lg p-3 border-2 border-gray-900 flex-shrink-0">
            <BookOpen className="text-gray-900" size={32} />
          </div>
          <div className="flex-1">
            <h2 className="text-gray-900 mb-2">Today's Energy Tip</h2>
            <p className="text-gray-700 mb-4">
              Did you know? Unplugging devices on standby mode can save up to 10% of your household electricity! 
              Even when turned off, many appliances continue to draw power.
            </p>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-3">
              <p className="text-gray-800">
                💡 <strong>Quick Action:</strong> Unplug your phone charger when not in use!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Challenges */}
      <div className="mb-6">
        <h2 className="text-gray-900 mb-4 flex items-center gap-2">
          <Flame className="text-gray-900" size={28} />
          Weekly Challenges
        </h2>
      </div>

      <div className="space-y-6">
        {/* Challenge 1: Consumption */}
        <ChallengeCard
          title="Beat the Average"
          description="Keep your weekly consumption below Helsinki average"
          icon={<TrendingDown className="text-gray-900" size={32} />}
          points={100}
          completed={challenge1Completed}
          onComplete={handleChallenge1Complete}
        >
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Your consumption:</span>
              <span className="text-gray-900">{userConsumption} kWh</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Helsinki average:</span>
              <span className="text-gray-600">{helsinkiAverage} kWh</span>
            </div>
            <div className="bg-white rounded-lg h-4 border-2 border-gray-900 overflow-hidden">
              <div 
                className="bg-gray-900 h-full transition-all duration-500"
                style={{ width: `${(userConsumption / helsinkiAverage) * 100}%` }}
              />
            </div>
            <p className="text-gray-900">
              ✓ Great job! You're {helsinkiAverage - userConsumption} kWh below average!
            </p>
          </div>
        </ChallengeCard>

        {/* Challenge 2: Quiz */}
        <ChallengeCard
          title="Energy Quiz"
          description="Test your knowledge about saving electricity"
          icon={<BookOpen className="text-gray-900" size={32} />}
          points={75}
          completed={challenge2Completed}
          onComplete={() => setShowQuiz(true)}
          buttonText={challenge2Completed ? "Completed!" : "Start Quiz"}
        >
          <p className="text-gray-600">
            Answer 5 quick questions about energy saving tips and earn bonus points!
          </p>
        </ChallengeCard>

        {/* Challenge 3: Project Update */}
        <ChallengeCard
          title="Stay Informed"
          description="Learn about Helsinki's data center project"
          icon={<Info className="text-gray-900" size={32} />}
          points={50}
          completed={challenge3Completed}
          onComplete={() => setShowProject(true)}
          buttonText={challenge3Completed ? "View Again" : "View Update"}
        >
          <p className="text-gray-600">
            Check out the latest update on the data center project that affects Helsinki's electricity demand.
          </p>
        </ChallengeCard>
      </div>

      {/* Rewards Section */}
      <div className="mt-8 bg-gray-50 border-3 border-gray-900 rounded-lg p-6">
        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
          <Award className="text-gray-900" size={24} />
          Rewards Available
        </h3>
        <p className="text-gray-700 mb-4">
          Use your points to unlock discounts at local businesses!
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border-2 border-gray-900 rounded-lg p-3">
            <p className="text-gray-900">☕ Café 10% off</p>
            <p className="text-gray-500">200 pts</p>
          </div>
          <div className="bg-white border-2 border-gray-900 rounded-lg p-3">
            <p className="text-gray-900">🚴 Bike rental free</p>
            <p className="text-gray-500">500 pts</p>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showQuiz && <QuizModal onClose={() => setShowQuiz(false)} onComplete={handleQuizComplete} />}
      {showProject && <ProjectModal onClose={handleProjectView} />}
    </div>
  );
}