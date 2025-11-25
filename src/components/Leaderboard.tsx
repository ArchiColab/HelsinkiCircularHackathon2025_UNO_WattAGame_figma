import { Trophy, Medal, Zap, TrendingUp } from 'lucide-react';

interface LeaderboardProps {
  userPoints: number;
}

const mockLeaderboard = [
  { rank: 1, name: 'Sanna K.', points: 1250, streak: 12, avatar: '🌟' },
  { rank: 2, name: 'Mikko L.', points: 1100, streak: 10, avatar: '⚡' },
  { rank: 3, name: 'Laura H.', points: 980, streak: 8, avatar: '🔥' },
  { rank: 4, name: 'You', points: 450, streak: 3, avatar: '👤', isUser: true },
  { rank: 5, name: 'Jari P.', points: 420, streak: 4, avatar: '💫' },
  { rank: 6, name: 'Anna M.', points: 380, streak: 2, avatar: '✨' },
  { rank: 7, name: 'Ville R.', points: 340, streak: 5, avatar: '🌱' },
  { rank: 8, name: 'Maria S.', points: 290, streak: 3, avatar: '🎯' },
];

export default function Leaderboard({ userPoints }: LeaderboardProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-gray-900 mb-2 inline-block border-b-4 border-gray-900 pb-1">
          Leaderboard
        </h1>
        <p className="text-gray-600">See how you rank against other energy savers!</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white border-3 border-gray-900 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Trophy className="text-gray-900" size={32} />
            <div>
              <p className="text-gray-600">Your Rank</p>
              <p className="text-gray-900">#4</p>
            </div>
          </div>
        </div>
        <div className="bg-white border-3 border-gray-900 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-gray-900" size={32} />
            <div>
              <p className="text-gray-600">This Week</p>
              <p className="text-gray-900">+225 pts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="mb-8 flex justify-center items-end gap-4">
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 border-3 border-gray-900 rounded-lg p-4 w-24 h-24 flex items-center justify-center mb-2">
            <span className="text-4xl">{mockLeaderboard[1].avatar}</span>
          </div>
          <div className="bg-white border-2 border-gray-900 rounded-lg px-4 py-2">
            <p className="text-gray-900 text-center">{mockLeaderboard[1].name}</p>
            <p className="text-gray-600 text-center">{mockLeaderboard[1].points} pts</p>
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center -mt-8">
          <Medal className="text-gray-900 mb-2" size={32} />
          <div className="bg-gray-900 border-3 border-gray-900 rounded-lg p-6 w-28 h-28 flex items-center justify-center mb-2">
            <span className="text-5xl">{mockLeaderboard[0].avatar}</span>
          </div>
          <div className="bg-white border-2 border-gray-900 rounded-lg px-4 py-2">
            <p className="text-gray-900 text-center">{mockLeaderboard[0].name}</p>
            <p className="text-gray-600 text-center">{mockLeaderboard[0].points} pts</p>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 border-3 border-gray-900 rounded-lg p-4 w-24 h-24 flex items-center justify-center mb-2">
            <span className="text-4xl">{mockLeaderboard[2].avatar}</span>
          </div>
          <div className="bg-white border-2 border-gray-900 rounded-lg px-4 py-2">
            <p className="text-gray-900 text-center">{mockLeaderboard[2].name}</p>
            <p className="text-gray-600 text-center">{mockLeaderboard[2].points} pts</p>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="space-y-3">
        {mockLeaderboard.map((user) => (
          <div
            key={user.rank}
            className={`${
              user.isUser
                ? 'bg-gray-900 text-white border-3'
                : 'bg-white border-2'
            } border-gray-900 rounded-lg p-4 flex items-center justify-between`}
          >
            <div className="flex items-center gap-4">
              <div className={`${
                user.rank === 1 ? 'bg-gray-900 text-white' :
                user.rank === 2 ? 'bg-gray-200' :
                user.rank === 3 ? 'bg-gray-200' :
                'bg-gray-100'
              } border-2 border-gray-900 rounded-lg w-12 h-12 flex items-center justify-center`}>
                <span className={user.rank === 1 ? 'text-white' : 'text-gray-900'}>#{user.rank}</span>
              </div>
              <div className="bg-white border-2 border-gray-900 rounded-lg w-12 h-12 flex items-center justify-center">
                <span className="text-2xl">{user.avatar}</span>
              </div>
              <div>
                <p className={user.isUser ? 'text-white' : 'text-gray-900'}>{user.name}</p>
                <div className={`flex items-center gap-2 ${user.isUser ? 'text-white/80' : 'text-gray-600'}`}>
                  <Zap size={16} />
                  <span>{user.streak} day streak</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className={user.isUser ? 'text-white' : 'text-gray-900'}>{user.points} pts</p>
            </div>
          </div>
        ))}
      </div>

      {/* Community Stats */}
      <div className="mt-8 bg-gray-50 border-3 border-gray-900 rounded-lg p-6">
        <h3 className="text-gray-900 mb-4">🌍 Community Impact</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border-2 border-gray-900 rounded-lg p-3">
            <p className="text-gray-600">Total kWh Saved</p>
            <p className="text-gray-900">12,450</p>
          </div>
          <div className="bg-white border-2 border-gray-900 rounded-lg p-3">
            <p className="text-gray-600">CO₂ Reduced</p>
            <p className="text-gray-900">3.2 tons</p>
          </div>
        </div>
      </div>
    </div>
  );
}