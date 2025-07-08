export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  id: string;
  text: string;
  colorWeights: {
    spring: number;
    summer: number;
    autumn: number;
    winter: number;
  };
}

export interface UserAnswers {
  [key: number]: string;
}

export type PersonalColorType = 'spring' | 'summer' | 'autumn' | 'winter';

export interface PersonalColorResult {
  type: PersonalColorType;
  score: number;
  description: string;
  colorPalette: string[];
  characteristics: string[];
  recommendations: {
    makeup: string[];
    fashion: string[];
    accessories: string[];
  };
}

export interface ColorAnalysisResult {
  primaryType: PersonalColorResult;
  scores: Record<PersonalColorType, number>;
}