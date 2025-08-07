'use client';

import { useState } from 'react';
import Survey from '@/components/Survey';
import Result from '@/components/Result';
import { UserAnswers, ColorAnalysisResult } from '@/types';
import { analyzePersonalColor } from '@/utils/colorAnalysis';

type AppState = 'home' | 'survey' | 'result';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('home');
  const [result, setResult] = useState<ColorAnalysisResult | null>(null);

  const handleStartSurvey = () => {
    setAppState('survey');
  };

  const handleSurveyComplete = (answers: UserAnswers) => {
    const analysisResult = analyzePersonalColor(answers);
    setResult(analysisResult);
    setAppState('result');
  };

  const handleRestart = () => {
    setResult(null);
    setAppState('home');
  };

  if (appState === 'survey') {
    return <Survey onComplete={handleSurveyComplete} />;
  }

  if (appState === 'result' && result) {
    return <Result result={result} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 p-12 text-white">
            <div className="mb-6">
              <div className="text-6xl mb-4">🌈</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                퍼스널 컬러 진단
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                당신만의 특별한 색깔을 찾아보세요
              </p>
            </div>
          </div>

          <div className="p-12">
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                간단한 8가지 질문으로 당신의 퍼스널 컬러를 정확하게 진단해드립니다. <br />
                피부톤, 머리카락, 눈동자 색깔 등을 종합적으로 분석하여 <br />
                <strong>봄, 여름, 가을, 겨울</strong> 중 어떤 타입인지 알려드려요.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  정확한 진단
                </h3>
                <p className="text-gray-600">
                  전문적인 컬러 분석 이론을 바탕으로 한 정확한 진단
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">💄</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  맞춤 추천
                </h3>
                <p className="text-gray-600">
                  메이크업, 패션, 액세서리까지 개인별 맞춤 추천
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  빠른 결과
                </h3>
                <p className="text-gray-600">
                  단 8개의 질문으로 3분 만에 결과 확인
                </p>
              </div>
            </div>

            {/* Color Types Preview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                4가지 퍼스널 컬러 타입
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-pink-100 to-orange-100 p-4 rounded-lg">
                  <div className="text-3xl mb-2">🌸</div>
                  <h4 className="font-semibold text-gray-800">봄 웜톤</h4>
                  <p className="text-sm text-gray-600">밝고 따뜻한</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-lg">
                  <div className="text-3xl mb-2">🌊</div>
                  <h4 className="font-semibold text-gray-800">여름 쿨톤</h4>
                  <p className="text-sm text-gray-600">부드럽고 시원한</p>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-4 rounded-lg">
                  <div className="text-3xl mb-2">🍂</div>
                  <h4 className="font-semibold text-gray-800">가을 웜톤</h4>
                  <p className="text-sm text-gray-600">깊고 따뜻한</p>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-4 rounded-lg">
                  <div className="text-3xl mb-2">❄️</div>
                  <h4 className="font-semibold text-gray-800">겨울 쿨톤</h4>
                  <p className="text-sm text-gray-600">선명하고 강렬한</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleStartSurvey}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold py-4 px-12 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              진단 시작하기 ✨
            </button>

            <p className="text-gray-500 mt-4">
              소요시간: 약 3분 | 무료
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>© 2024 Personal Color Finder. 당신의 아름다움을 찾아가는 여정.</p>
        </div>
      </div>
    </div>
  );
}
