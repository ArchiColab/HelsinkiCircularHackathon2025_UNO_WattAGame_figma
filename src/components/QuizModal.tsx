import { useState } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';

interface QuizModalProps {
  onClose: () => void;
  onComplete: () => void;
}

const quizQuestions = [
  {
    question: "What percentage of electricity can you save by unplugging devices on standby?",
    options: ["Up to 5%", "Up to 10%", "Up to 20%", "Up to 30%"],
    correct: 1,
  },
  {
    question: "Which appliance typically uses the most electricity in a home?",
    options: ["Refrigerator", "TV", "Water heater", "Laptop"],
    correct: 2,
  },
  {
    question: "What's the best time to use electricity in terms of grid load?",
    options: ["Morning peak", "Afternoon", "Evening peak", "Night"],
    correct: 3,
  },
  {
    question: "LED bulbs use how much less energy than traditional incandescent bulbs?",
    options: ["25% less", "50% less", "75% less", "90% less"],
    correct: 2,
  },
  {
    question: "What's an effective way to reduce heating costs in winter?",
    options: ["Open windows", "Lower thermostat by 1-2°C", "Use electric heaters", "Keep lights on"],
    correct: 1,
  },
];

export default function QuizModal({ onClose, onComplete }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === quizQuestions[currentQuestion].correct) {
      setCorrectAnswers(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Quiz complete
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 1500);
  };

  const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correct;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white border-4 border-gray-900 rounded-lg p-6 max-w-lg w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900">Energy Quiz</h2>
          <button
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-2 border-2 border-gray-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-gray-600">
              Score: {correctAnswers}/{quizQuestions.length}
            </span>
          </div>
          <div className="bg-gray-100 rounded-lg h-3 border-2 border-gray-900 overflow-hidden">
            <div 
              className="bg-gray-900 h-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <p className="text-gray-900 mb-4">
            {quizQuestions[currentQuestion].question}
          </p>

          <div className="grid grid-cols-1 gap-3">
            {quizQuestions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === quizQuestions[currentQuestion].correct;
              
              let buttonClass = "w-full text-left px-4 py-3 rounded-lg border-2 border-gray-900 transition-all ";
              
              if (!showResult) {
                buttonClass += "bg-white hover:bg-gray-100";
              } else if (isSelected && isCorrect) {
                buttonClass += "bg-gray-900 text-white";
              } else if (isSelected && !isCorrect) {
                buttonClass += "bg-gray-300 text-gray-600";
              } else if (isCorrectAnswer) {
                buttonClass += "bg-gray-900 text-white";
              } else {
                buttonClass += "bg-gray-100 opacity-50";
              }

              return (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && isSelected && (
                      isCorrect ? (
                        <CheckCircle size={20} />
                      ) : (
                        <XCircle size={20} />
                      )
                    )}
                    {showResult && !isSelected && isCorrectAnswer && (
                      <CheckCircle size={20} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Result Message */}
        {showResult && currentQuestion === quizQuestions.length - 1 && (
          <div className="bg-gray-50 border-2 border-gray-900 rounded-lg p-4 text-center">
            <p className="text-gray-900">
              ✓ Quiz Complete! You got {correctAnswers}/{quizQuestions.length} correct!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}