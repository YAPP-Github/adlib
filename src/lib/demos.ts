export const demoSections = [
  {
    id: 'recommendation',
    label: '온보딩 · 채널 추천',
    title: '온보딩부터 추천 채널 비교까지',
    description: '서비스 정보와 광고 조건을 입력하고, 내 서비스에 맞는 채널을 찾아보세요.',
    videos: [
      {
        id: '1a-onboarding-complete',
        title: '온보딩 전체 입력과 추천 결과',
        description: '서비스 정보와 타깃, 광고 목표와 예산을 입력하고 맞춤 추천 결과를 확인합니다.',
      },
      {
        id: '1d-recommend-detail',
        title: '추천 상세의 네 탭과 광고 예시',
        description: '추천 채널의 핵심 요약, 광고 상품, 타깃층과 광고 예시를 살펴봅니다.',
      },
      {
        id: '1e-recommend-compare',
        title: '추천 채널로 비교하기',
        description: '추천받은 채널 세 개를 선택해 주요 지표와 예상 성과를 비교합니다.',
      },
    ],
  },
  {
    id: 'comparison',
    label: '채널 비교',
    title: '검색과 필터로 찾고, 나란히 비교하기',
    description: '원하는 광고 채널을 직접 탐색하고 최대 세 개 채널의 예상 성과를 비교해 보세요.',
    videos: [
      {
        id: 'search-filter-zoom',
        title: '검색과 카테고리 필터',
        description: '카테고리와 검색어로 원하는 광고 채널을 찾습니다.',
      },
      {
        id: '2b-channel-compare',
        title: '직접 선택한 채널 비교',
        description: '첫차, 번개장터, 11번가 광고를 선택해 예상 노출과 클릭을 나란히 비교합니다.',
      },
      {
        id: '2c-multi-filter',
        title: '여러 카테고리 선택과 초기화',
        description: '여러 카테고리를 함께 선택하고 필터를 초기화해 다시 탐색합니다.',
      },
      {
        id: '2d-replace-candidate',
        title: '비교 후보 교체',
        description: '선택한 채널을 해제하고 다른 후보를 추가해 비교 대상을 바꿉니다.',
      },
      {
        id: '2e-empty-recovery',
        title: '검색 결과가 없을 때',
        description: '검색어와 필터를 조정해 채널 목록을 다시 확인합니다.',
      },
    ],
  },
  {
    id: 'simulator',
    label: '시뮬레이터',
    title: '예산을 나누고 예상 성과 확인하기',
    description: '채널별 예산 배분을 바꿔보고, 다음 광고 계획에 활용할 결과를 저장하세요.',
    videos: [
      {
        id: '3a-simulator-setup',
        title: '조건 설정과 첫 계산',
        description: '총예산과 집행 기간을 설정하고 채널별 예산을 배분합니다.',
      },
      {
        id: '3b-budget-reallocation',
        title: '예산 재배분과 성과 변화',
        description: '같은 총예산에서 채널별 배분을 바꾸며 예상 노출과 클릭의 변화를 확인합니다.',
      },
      {
        id: '3c-table-save',
        title: '표로 확인하고 결과 저장',
        description: '계산 결과를 표로 살펴보고 이름을 붙여 저장합니다.',
      },
    ],
  },
  {
    id: 'saved-results',
    label: '저장된 결과',
    title: '저장한 광고 계획 이어서 살펴보기',
    description: '마이페이지에서 추천, 비교, 시뮬레이션 결과를 다시 열어보세요.',
    videos: [
      {
        id: '4a-saved-recommend',
        title: '저장된 추천 다시 보기',
        description: '저장 목록에서 추천 결과를 열고 추천 채널을 살펴봅니다.',
      },
      {
        id: '4b-saved-compare',
        title: '저장된 비교 다시 보기',
        description: '저장한 채널 비교 결과를 열어 이전에 검토한 후보를 확인합니다.',
      },
      {
        id: '4c-saved-simulation',
        title: '저장된 시뮬레이션 다시 보기',
        description: '저장한 시뮬레이션을 열어 예산 배분과 예상 성과를 확인합니다.',
      },
    ],
  },
] as const;
