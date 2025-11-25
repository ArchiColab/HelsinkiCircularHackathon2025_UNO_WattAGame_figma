import { ReactNode } from 'react';
import { Check } from 'lucide-react';

interface ChallengeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  points: number;
  completed: boolean;
  onComplete: () => void;
  buttonText?: string;
  children?: ReactNode;
}

export default function ChallengeCard({
  title,
  description,
  icon,
  points,
  completed,
  onComplete,
  buttonText,
  children,
}: ChallengeCardProps) {
  return (
    <div className="bg-white border-3 border-gray-900 rounded-lg p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-3 border-2 border-gray-900 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-gray-900">{title}</h3>
            {completed && (
              <div className="bg-gray-900 rounded-full p-1">
                <Check className="text-white" size={20} />
              </div>
            )}
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {children && (
        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 mb-4">
          {children}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white border-2 border-gray-900 rounded-lg px-4 py-3 text-center">
          <span className="text-gray-900">+{points} pts</span>
        </div>
        <button
          onClick={onComplete}
          disabled={completed && !buttonText?.includes('View Again')}
          className={`${completed ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 hover:bg-gray-900 hover:text-white'} px-4 py-3 rounded-lg border-2 border-gray-900 transition-all disabled:cursor-default flex items-center justify-center gap-2`}
        >
          {completed && !buttonText?.includes('View Again') && <Check size={18} />}
          {buttonText || (completed ? 'Completed!' : 'Check Status')}
        </button>
      </div>
    </div>
  );
}