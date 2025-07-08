import { PersonalColorResult, PersonalColorType } from '@/types';

export const colorTypeData: Record<PersonalColorType, Omit<PersonalColorResult, 'score'>> = {
  spring: {
    type: 'spring',
    description: '봄 웜톤은 밝고 따뜻한 색상이 잘 어울리는 타입입니다. 생기 있고 활기찬 느낌을 주며, 맑고 투명한 색상이 특징입니다.',
    colorPalette: [
      '#FFB6C1', // Light Pink
      '#FF7F50', // Coral
      '#FFD700', // Gold
      '#98FB98', // Pale Green
      '#87CEEB', // Sky Blue
      '#DDA0DD', // Plum
      '#F0E68C', // Khaki
      '#FF6347', // Tomato
    ],
    characteristics: [
      '황금빛이 도는 밝은 피부톤',
      '따뜻한 느낌의 머리카락과 눈동자',
      '골드 액세서리가 잘 어울림',
      '밝고 화사한 색상에서 생기를 얻음',
      '코랄, 피치 계열 메이크업이 자연스러움'
    ],
    recommendations: {
      makeup: [
        '코랄, 피치 톤의 립스틱',
        '골든 베이스의 파운데이션',
        '따뜻한 브라운 계열 아이섀도',
        '피치나 애프리콧 블러셔'
      ],
      fashion: [
        '아이보리, 크림 화이트',
        '코랄, 피치, 살몬 핑크',
        '골든 옐로우, 카나리아 옐로우',
        '애플 그린, 민트 그린',
        '애쿠아 블루, 터쿼이즈'
      ],
      accessories: [
        '골드 톤 액세서리',
        '따뜻한 색상의 스카프',
        '밝은 색상의 가방',
        '코랄이나 피치 톤 네일'
      ]
    }
  },
  summer: {
    type: 'summer',
    description: '여름 쿨톤은 부드럽고 시원한 색상이 잘 어울리는 타입입니다. 우아하고 로맨틱한 느낌을 주며, 파스텔과 뮤트 톤이 특징입니다.',
    colorPalette: [
      '#E6E6FA', // Lavender
      '#FFB6C1', // Light Pink
      '#B0E0E6', // Powder Blue
      '#98FB98', // Pale Green
      '#D8BFD8', // Thistle
      '#F0F8FF', // Alice Blue
      '#E0E0E0', // Light Gray
      '#FFF0F5', // Lavender Blush
    ],
    characteristics: [
      '핑크빛이 도는 밝은 피부톤',
      '차가운 느낌의 머리카락과 눈동자',
      '실버 액세서리가 잘 어울림',
      '부드럽고 뮤트한 색상에서 우아함을 얻음',
      '로즈, 소프트 핑크 메이크업이 자연스러움'
    ],
    recommendations: {
      makeup: [
        '로즈, 소프트 핑크 톤의 립스틱',
        '핑크 베이스의 파운데이션',
        '시원한 브라운, 그레이 계열 아이섀도',
        '로즈나 핑크 블러셔'
      ],
      fashion: [
        '소프트 화이트, 오프 화이트',
        '로즈, 더스티 핑크',
        '라벤더, 소프트 퍼플',
        '민트, 세이지 그린',
        '파우더 블루, 스카이 블루'
      ],
      accessories: [
        '실버 톤 액세서리',
        '파스텔 색상의 스카프',
        '뮤트 톤의 가방',
        '로즈나 핑크 톤 네일'
      ]
    }
  },
  autumn: {
    type: 'autumn',
    description: '가을 웜톤은 깊고 따뜻한 색상이 잘 어울리는 타입입니다. 성숙하고 세련된 느낌을 주며, 어스 톤과 리치 컬러가 특징입니다.',
    colorPalette: [
      '#8B4513', // Saddle Brown
      '#B8860B', // Dark Goldenrod
      '#CD853F', // Peru
      '#A0522D', // Sienna
      '#800000', // Maroon
      '#556B2F', // Dark Olive Green
      '#B22222', // Fire Brick
      '#DAA520', // Goldenrod
    ],
    characteristics: [
      '황금빛이 도는 깊은 피부톤',
      '따뜻하고 진한 머리카락과 눈동자',
      '앤틱 골드 액세서리가 잘 어울림',
      '깊고 리치한 색상에서 세련됨을 얻음',
      '브릭, 브라운 메이크업이 자연스러움'
    ],
    recommendations: {
      makeup: [
        '브릭, 테라코타 톤의 립스틱',
        '골든 베이스의 파운데이션',
        '따뜻한 브라운, 구리 계열 아이섀도',
        '피치나 브론즈 블러셔'
      ],
      fashion: [
        '크림, 아이보리',
        '버건디, 와인 레드',
        '머스타드, 골든 옐로우',
        '올리브 그린, 포레스트 그린',
        '러스트, 번트 오렌지'
      ],
      accessories: [
        '골드, 브론즈 톤 액세서리',
        '어스 톤의 스카프',
        '브라운 계열 가방',
        '브릭이나 브라운 톤 네일'
      ]
    }
  },
  winter: {
    type: 'winter',
    description: '겨울 쿨톤은 선명하고 강렬한 색상이 잘 어울리는 타입입니다. 카리스마 있고 도시적인 느낌을 주며, 비비드 컬러와 모노톤이 특징입니다.',
    colorPalette: [
      '#000000', // Black
      '#FFFFFF', // White
      '#FF0000', // Red
      '#0000FF', // Blue
      '#800080', // Purple
      '#008000', // Green
      '#FF1493', // Deep Pink
      '#4B0082', // Indigo
    ],
    characteristics: [
      '핑크빛이 도는 깊은 피부톤',
      '차갑고 진한 머리카락과 눈동자',
      '실버 액세서리가 잘 어울림',
      '선명하고 강렬한 색상에서 카리스마를 얻음',
      '베리, 레드 메이크업이 자연스러움'
    ],
    recommendations: {
      makeup: [
        '베리, 레드 톤의 립스틱',
        '핑크 베이스의 파운데이션',
        '차가운 브라운, 그레이 계열 아이섀도',
        '로즈나 퓨시아 블러셔'
      ],
      fashion: [
        '퓨어 화이트, 블랙',
        '로얄 블루, 네이비',
        '에메랄드 그린',
        '마젠타, 퓨시아',
        '진한 퍼플, 바이올렛'
      ],
      accessories: [
        '실버, 플래티넘 톤 액세서리',
        '블랙 앤 화이트 스카프',
        '모노톤 가방',
        '레드나 베리 톤 네일'
      ]
    }
  }
};