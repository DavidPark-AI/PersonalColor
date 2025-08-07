import { UserAnswers, ColorAnalysisResult, PersonalColorType } from '@/types';
import { questions } from '@/data/questions';
import { colorTypeData } from '@/data/colorTypes';

export function analyzePersonalColor(answers: UserAnswers): ColorAnalysisResult {
  const scores: Record<PersonalColorType, number> = {
    spring: 0,
    summer: 0,
    autumn: 0,
    winter: 0
  };

  // 각 답변에 대해 가중치를 계산
  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (question) {
      const selectedOption = question.options.find(opt => opt.id === answerId);
      if (selectedOption) {
        Object.entries(selectedOption.colorWeights).forEach(([colorType, weight]) => {
          scores[colorType as PersonalColorType] += weight;
        });
      }
    }
  });

  // 가장 높은 점수를 받은 컬러 타입 찾기
  const primaryType = Object.entries(scores).reduce((a, b) => 
    scores[a[0] as PersonalColorType] > scores[b[0] as PersonalColorType] ? a : b
  )[0] as PersonalColorType;

  // 총 점수를 백분율로 변환
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const primaryScore = totalScore > 0 ? Math.round((scores[primaryType] / totalScore) * 100) : 0;

  const primaryResult = {
    ...colorTypeData[primaryType],
    score: primaryScore
  };

  return {
    primaryType: primaryResult,
    scores
  };
}

export function getColorHex(colorName: string): string {
  const colorMap: Record<string, string> = {
    'Light Pink': '#FFB6C1',
    'Coral': '#FF7F50',
    'Gold': '#FFD700',
    'Pale Green': '#98FB98',
    'Sky Blue': '#87CEEB',
    'Plum': '#DDA0DD',
    'Khaki': '#F0E68C',
    'Tomato': '#FF6347',
    'Lavender': '#E6E6FA',
    'Powder Blue': '#B0E0E6',
    'Thistle': '#D8BFD8',
    'Alice Blue': '#F0F8FF',
    'Light Gray': '#E0E0E0',
    'Lavender Blush': '#FFF0F5',
    'Saddle Brown': '#8B4513',
    'Dark Goldenrod': '#B8860B',
    'Peru': '#CD853F',
    'Sienna': '#A0522D',
    'Maroon': '#800000',
    'Dark Olive Green': '#556B2F',
    'Fire Brick': '#B22222',
    'Goldenrod': '#DAA520',
    'Black': '#000000',
    'White': '#FFFFFF',
    'Red': '#FF0000',
    'Blue': '#0000FF',
    'Purple': '#800080',
    'Green': '#008000',
    'Deep Pink': '#FF1493',
    'Indigo': '#4B0082'
  };
  
  return colorMap[colorName] || '#000000';
}