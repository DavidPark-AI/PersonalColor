'use client';

import { useState } from 'react';
import { UserAnswers } from '@/types';
import { questions } from '@/data/questions';

interface SurveyProps {
  onComplete: (answers: UserAnswers) => void;
}

export default function Survey({ onComplete }: SurveyProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [selectedOption, setSelectedOption] = useState<string>('');

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = {
        ...answers,
        [currentQuestion.id]: selectedOption
      };
      setAnswers(newAnswers);

      if (isLastQuestion) {
        onComplete(newAnswers);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption('');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const previousQuestion = questions[currentQuestionIndex - 1];
      setSelectedOption(answers[previousQuestion.id] || '');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            질문 {currentQuestionIndex + 1} / {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {currentQuestion.question}
        </h2>
        
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                selectedOption === option.id
                  ? 'border-purple-500 bg-purple-50 text-purple-700'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  selectedOption === option.id
                    ? 'border-purple-500 bg-purple-500'
                    : 'border-gray-300'
                }`}>
                  {selectedOption === option.id && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-[2px]"></div>
                  )}
                </div>
                <span className="text-gray-700">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            currentQuestionIndex === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          이전
        </button>

        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
            selectedOption
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isLastQuestion ? '결과 보기' : '다음'}
        </button>
      </div>
    </div>
  );
}