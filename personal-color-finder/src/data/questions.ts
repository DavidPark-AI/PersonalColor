import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    question: "당신의 피부톤은 어떤 편인가요?",
    options: [
      {
        id: "skin-warm-light",
        text: "따뜻하고 밝은 톤 (황금빛이 도는 밝은 피부)",
        colorWeights: { spring: 3, summer: 0, autumn: 1, winter: 0 }
      },
      {
        id: "skin-cool-light",
        text: "차가우면서 밝은 톤 (핑크빛이 도는 밝은 피부)",
        colorWeights: { spring: 0, summer: 3, autumn: 0, winter: 1 }
      },
      {
        id: "skin-warm-deep",
        text: "따뜻하고 깊은 톤 (황금빛이 도는 진한 피부)",
        colorWeights: { spring: 1, summer: 0, autumn: 3, winter: 0 }
      },
      {
        id: "skin-cool-deep",
        text: "차가우면서 깊은 톤 (핑크빛이 도는 진한 피부)",
        colorWeights: { spring: 0, summer: 1, autumn: 0, winter: 3 }
      }
    ]
  },
  {
    id: 2,
    question: "당신의 자연스러운 머리카락 색은?",
    options: [
      {
        id: "hair-light-warm",
        text: "밝은 갈색, 황금빛 금발",
        colorWeights: { spring: 3, summer: 0, autumn: 1, winter: 0 }
      },
      {
        id: "hair-light-ash",
        text: "애쉬 브라운, 애쉬 블론드",
        colorWeights: { spring: 0, summer: 3, autumn: 0, winter: 1 }
      },
      {
        id: "hair-dark-warm",
        text: "진한 갈색, 적갈색",
        colorWeights: { spring: 1, summer: 0, autumn: 3, winter: 0 }
      },
      {
        id: "hair-dark-cool",
        text: "검은색, 진한 다크 브라운",
        colorWeights: { spring: 0, summer: 1, autumn: 0, winter: 3 }
      }
    ]
  },
  {
    id: 3,
    question: "당신의 눈동자 색깔은?",
    options: [
      {
        id: "eyes-light-warm",
        text: "밝은 갈색, 황금빛 헤이즐",
        colorWeights: { spring: 3, summer: 0, autumn: 1, winter: 0 }
      },
      {
        id: "eyes-light-cool",
        text: "회색, 밝은 파란색",
        colorWeights: { spring: 0, summer: 3, autumn: 0, winter: 1 }
      },
      {
        id: "eyes-dark-warm",
        text: "진한 갈색, 앰버",
        colorWeights: { spring: 1, summer: 0, autumn: 3, winter: 0 }
      },
      {
        id: "eyes-dark-cool",
        text: "검은색, 진한 파란색",
        colorWeights: { spring: 0, summer: 1, autumn: 0, winter: 3 }
      }
    ]
  },
  {
    id: 4,
    question: "어떤 색상의 옷을 입었을 때 칭찬을 가장 많이 받나요?",
    options: [
      {
        id: "compliment-bright-warm",
        text: "밝은 코랄, 피치, 라이트 옐로우",
        colorWeights: { spring: 3, summer: 0, autumn: 0, winter: 0 }
      },
      {
        id: "compliment-soft-cool",
        text: "파스텔 핑크, 라벤더, 소프트 블루",
        colorWeights: { spring: 0, summer: 3, autumn: 0, winter: 0 }
      },
      {
        id: "compliment-rich-warm",
        text: "버건디, 머스타드, 올리브 그린",
        colorWeights: { spring: 0, summer: 0, autumn: 3, winter: 0 }
      },
      {
        id: "compliment-vivid-cool",
        text: "로얄 블루, 에메랄드, 퓨어 화이트",
        colorWeights: { spring: 0, summer: 0, autumn: 0, winter: 3 }
      }
    ]
  },
  {
    id: 5,
    question: "금 액세서리와 은 액세서리 중 어느 것이 더 어울린다고 생각하나요?",
    options: [
      {
        id: "metal-gold-bright",
        text: "밝고 화사한 골드",
        colorWeights: { spring: 3, summer: 0, autumn: 1, winter: 0 }
      },
      {
        id: "metal-silver-bright",
        text: "밝고 차가운 실버",
        colorWeights: { spring: 0, summer: 3, autumn: 0, winter: 1 }
      },
      {
        id: "metal-gold-antique",
        text: "앤틱하고 깊은 골드",
        colorWeights: { spring: 1, summer: 0, autumn: 3, winter: 0 }
      },
      {
        id: "metal-silver-bold",
        text: "선명하고 강한 실버",
        colorWeights: { spring: 0, summer: 1, autumn: 0, winter: 3 }
      }
    ]
  },
  {
    id: 6,
    question: "어떤 립 컬러가 가장 자연스럽게 어울리나요?",
    options: [
      {
        id: "lip-coral-peach",
        text: "코랄, 피치 톤",
        colorWeights: { spring: 3, summer: 0, autumn: 0, winter: 0 }
      },
      {
        id: "lip-rose-pink",
        text: "로즈, 소프트 핑크",
        colorWeights: { spring: 0, summer: 3, autumn: 0, winter: 0 }
      },
      {
        id: "lip-brick-brown",
        text: "브릭, 브라운 톤",
        colorWeights: { spring: 0, summer: 0, autumn: 3, winter: 0 }
      },
      {
        id: "lip-berry-red",
        text: "베리, 선명한 레드",
        colorWeights: { spring: 0, summer: 0, autumn: 0, winter: 3 }
      }
    ]
  },
  {
    id: 7,
    question: "햇볕에 탔을 때 어떻게 되나요?",
    options: [
      {
        id: "sun-tan-golden",
        text: "금방 황금빛으로 그을려요",
        colorWeights: { spring: 2, summer: 0, autumn: 2, winter: 0 }
      },
      {
        id: "sun-burn-pink",
        text: "빨갛게 달아오르다가 원래대로 돌아와요",
        colorWeights: { spring: 1, summer: 3, autumn: 0, winter: 1 }
      },
      {
        id: "sun-tan-olive",
        text: "서서히 올리브 톤으로 그을려요",
        colorWeights: { spring: 0, summer: 1, autumn: 3, winter: 0 }
      },
      {
        id: "sun-rarely-tan",
        text: "거의 타지 않고 원래 피부색을 유지해요",
        colorWeights: { spring: 0, summer: 2, autumn: 0, winter: 2 }
      }
    ]
  },
  {
    id: 8,
    question: "당신의 전체적인 분위기는?",
    options: [
      {
        id: "vibe-bright-youthful",
        text: "밝고 활기찬, 젊은 느낌",
        colorWeights: { spring: 3, summer: 1, autumn: 0, winter: 0 }
      },
      {
        id: "vibe-soft-elegant",
        text: "부드럽고 우아한, 로맨틱한 느낌",
        colorWeights: { spring: 0, summer: 3, autumn: 0, winter: 1 }
      },
      {
        id: "vibe-rich-sophisticated",
        text: "깊이 있고 세련된, 성숙한 느낌",
        colorWeights: { spring: 0, summer: 0, autumn: 3, winter: 1 }
      },
      {
        id: "vibe-sharp-charismatic",
        text: "샤프하고 카리스마 있는, 도시적인 느낌",
        colorWeights: { spring: 0, summer: 1, autumn: 0, winter: 3 }
      }
    ]
  }
];