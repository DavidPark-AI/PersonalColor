'use client';

import { ColorAnalysisResult } from '@/types';

interface ResultProps {
  result: ColorAnalysisResult;
  onRestart: () => void;
}

const seasonEmojis = {
  spring: '🌸',
  summer: '🌊',
  autumn: '🍂',
  winter: '❄️'
};

const seasonKorean = {
  spring: '봄',
  summer: '여름',
  autumn: '가을',
  winter: '겨울'
};

export default function Result({ result, onRestart }: ResultProps) {
  const { primaryType, scores } = result;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Main Result Card */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 p-8 text-white text-center">
          <div className="text-6xl mb-4">
            {seasonEmojis[primaryType.type]}
          </div>
          <h1 className="text-4xl font-bold mb-2">
            당신은 {seasonKorean[primaryType.type]} 타입입니다!
          </h1>
          <p className="text-xl opacity-90">
            매치율: {primaryType.score}%
          </p>
        </div>

        <div className="p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {primaryType.description}
          </p>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🎨 추천 컬러 팔레트
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {primaryType.colorPalette.map((color, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-20 h-20 rounded-lg shadow-md mx-auto mb-2"
                    style={{ backgroundColor: color }}
                  ></div>
                  <span className="text-sm text-gray-600">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Characteristics */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              ✨ 당신의 특징
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {primaryType.characteristics.map((characteristic, index) => (
                <li key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                  <span className="text-purple-500 mr-3">•</span>
                  <span className="text-gray-700">{characteristic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Makeup Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            💄 메이크업
          </h3>
          <ul className="space-y-2">
            {primaryType.recommendations.makeup.map((item, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="text-pink-400 mr-2 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fashion Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            👗 패션
          </h3>
          <ul className="space-y-2">
            {primaryType.recommendations.fashion.map((item, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Accessories Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            👜 액세서리
          </h3>
          <ul className="space-y-2">
            {primaryType.recommendations.accessories.map((item, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="text-indigo-400 mr-2 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          📊 상세 분석 결과
        </h3>
        <div className="space-y-4">
          {Object.entries(scores).map(([type, score]) => {
            const percentage = Math.round((score / Math.max(...Object.values(scores))) * 100);
            return (
              <div key={type} className="flex items-center">
                <div className="w-16 text-sm font-medium text-gray-600">
                  {seasonEmojis[type as keyof typeof seasonEmojis]} {seasonKorean[type as keyof typeof seasonKorean]}
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ${
                        type === primaryType.type 
                          ? 'bg-gradient-to-r from-pink-400 to-purple-500' 
                          : 'bg-gray-400'
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-12 text-sm font-medium text-gray-600">
                  {score}점
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Restart Button */}
      <div className="text-center">
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
        >
          다시 테스트하기
        </button>
      </div>
    </div>
  );
}