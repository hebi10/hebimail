# 해비 몰 (Hebi Mall)

## 개요

해비 몰은 사용자에게 편리한 온라인 쇼핑 환경을 제공하고, 관리자에게 효율적인 관리 도구를 제공하는 전자상거래 애플리케이션입니다. 무신사와 같은 쇼핑몰 사이트를 목표로 하며, 다양한 기능을 포함하고 있습니다.

## 목차

- [개요](#개요)
- [주요 기능](#주요-기능)
- [프로젝트 구조](#프로젝트-구조)
- [설치](#설치)
- [사용 방법](#사용-방법)
- [기술 스택](#기술-스택)
- [설정](#설정)
- [기여](#기여)
- [라이선스](#라이선스)

## 주요 기능

1. **제품 검색 및 구매**: 사용자가 제품을 검색하고 상세 정보를 확인하며 구매할 수 있습니다.
2. **장바구니 관리**: 사용자가 장바구니에 제품을 추가하고 수량을 조절하거나 삭제할 수 있습니다.
3. **주문 및 결제**: 사용자가 장바구니에 담긴 제품을 주문하고 다양한 결제 수단을 통해 결제할 수 있습니다.
4. **회원 관리**: 사용자가 회원가입, 로그인, 프로필 관리 등을 할 수 있습니다.
5. **관리자 페이지**: 관리자가 제품, 주문, 회원, 게시판 등을 관리할 수 있습니다.
6. **게시판 기능**: 사용자가 게시판에 글을 작성하고 댓글을 달 수 있습니다.
7. **고객 지원 및 FAQ**: 사용자가 고객 지원을 요청하고 자주 묻는 질문을 조회할 수 있습니다.

## 프로젝트 구조(초기 기획)

src/
├── assets/                     # 이미지, 폰트, 아이콘 등의 정적 파일
│   ├── images/                 # 이미지 파일
│   │   ├── img_logo01.png      # 로고 이미지
│   │   └── ...                 # 기타 이미지 파일들
│   ├── svg/                    # SVG 아이콘 파일
│   │   ├── icon_cart.svg       # 장바구니 아이콘
│   │   └── icon_search.svg     # 검색 아이콘
├── components/                 # 재사용 가능한 UI 컴포넌트
│   ├── common/                 # 버튼, 입력 필드 등 공통 컴포넌트
│   ├── layout/                 # 레이아웃 관련 컴포넌트 (헤더, 푸터 등)
│   │   ├── FullLayout.tsx      # 전체 레이아웃 컴포넌트
│   │   ├── Header.module.css   # 헤더 스타일링 파일
│   │   ├── Header.tsx          # 헤더 컴포넌트
│   │   ├── LandingLayout.tsx   # 랜딩 페이지 레이아웃 컴포넌트
│   │   ├── MyPageLayout.tsx    # 마이 페이지 레이아웃 컴포넌트
│   │   ├── UserLayout.tsx      # 유저 페이지 레이아웃 컴포넌트
│   └── specific/               # 특정 페이지 관련 컴포넌트
├── hooks/                      # 커스텀 훅
│   ├── useAuth.ts              # 인증 관련 커스텀 훅
│   └── useFetch.ts             # 데이터 fetch 관련 커스텀 훅
├── pages/                      # 각 페이지 컴포넌트
│   ├── HomePage.tsx            # 홈페이지
│   ├── CategoryPage.tsx        # 카테고리 페이지
│   ├── ProductPage.tsx         # 제품 상세 페이지
│   ├── CartPage.tsx            # 장바구니 페이지
│   ├── CheckoutPage.tsx        # 결제 페이지
│   ├── LoginPage.tsx           # 로그인 페이지
│   ├── SignUpPage.tsx          # 회원가입 페이지
│   ├── ProfilePage.tsx         # 마이 페이지
│   ├── BoardPage.tsx           # 게시판 페이지
│   ├── AdminPage.tsx           # 관리자 페이지
│   ├── SupportPage.tsx         # 고객 지원 페이지
│   ├── NoticePage.tsx          # 공지사항 페이지
│   ├── FAQPage.tsx             # FAQ 페이지
│   └── ReviewPage.tsx          # 리뷰 페이지
├── services/                   # API 호출 서비스
│   └── api.ts                  # API 관련 함수
├── store/                      # Redux 등의 상태 관리 관련 파일
│   ├── actions/                # 액션
│   ├── reducers/               # 리듀서
│   └── store.ts                # 스토어 설정
├── styles/                     # 전역 스타일
│   ├── variables.css           # CSS 변수
│   └── global.css              # 전역 스타일
├── utils/                      # 유틸리티 함수
│   └── helpers.ts              # 헬퍼 함수
├── Main.tsx                    # 메인 엔트리 파일
├── index.tsx                   # 진입점 파일
└── reportWebVitals.ts          # 웹 성능 측정

## 작업 계획 정리

