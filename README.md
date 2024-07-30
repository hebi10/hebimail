src/
├── assets/                 # 이미지, 폰트, 아이콘 등의 정적 파일
├── components/             # 재사용 가능한 UI 컴포넌트
│   ├── common/             # 버튼, 입력 필드 등 공통 컴포넌트
│   ├── layout/             # 레이아웃 관련 컴포넌트 (헤더, 푸터 등)
│   └── App.tsx             # 최상위 컴포넌트
│   └── specific/           # 특정 페이지 관련 컴포넌트
├── hooks/                  # 커스텀 훅
├── pages/                  # 각 페이지 컴포넌트
│   ├── HomePage.tsx        # 홈페이지
│   ├── CategoryPage.tsx    # 카테고리 페이지
│   ├── ProductPage.tsx     # 제품 상세 페이지
│   ├── CartPage.tsx        # 장바구니 페이지
│   ├── CheckoutPage.tsx    # 결제 페이지
│   ├── LoginPage.tsx       # 로그인 페이지
│   ├── SignUpPage.tsx      # 회원가입 페이지
│   ├── ProfilePage.tsx     # 마이 페이지
│   ├── BoardPage.tsx       # 게시판 페이지
│   ├── AdminPage.tsx       # 관리자 페이지
│   ├── SupportPage.tsx     # 고객 지원 페이지
│   ├── NoticePage.tsx      # 공지사항 페이지
│   ├── FAQPage.tsx         # FAQ 페이지
│   └── ReviewPage.tsx      # 리뷰 페이지
├── services/               # API 호출 서비스
│   └── api.ts              # API 관련 함수
├── store/                  # Redux 등의 상태 관리 관련 파일
│   ├── actions/            # 액션
│   │   └── userActions.ts  # 유저 관련 액션
│   ├── reducers/           # 리듀서
│   │   ├── userReducer.ts  # 유저 관련 리듀서
│   │   └── rootReducer.ts  # 루트 리듀서
│   └── store.ts            # 스토어 설정
├── styles/                 # 전역 스타일
│   ├── variables.css       # CSS 변수
│   └── global.css          # 전역 스타일
├── utils/                  # 유틸리티 함수
│   └── helpers.ts          # 헬퍼 함수
├── Main.tsx                # 새로운 진입점 파일
├── index.tsx               # 기존 진입점 파일 (Main.tsx를 불러옴)
└── reportWebVitals.ts      # 웹 성능 측정
