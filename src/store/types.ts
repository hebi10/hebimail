// Auth 관련 타입 정의
export enum AuthActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT = 'LOGOUT',
  SET_USER_INFO = 'SET_USER_INFO',
}

// User 관련 타입 정의
export enum UserActionTypes {
  USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST',
  USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS',
  USER_DETAILS_FAILURE = 'USER_DETAILS_FAILURE',
}

export interface User {
  id: string;
  email: string;
  name: string;
  token: string;
}

export interface AuthState {
  loading: boolean;
  userInfo: any;  // 혹은 실제 유저 타입을 지정
  user: User | null;  // user 속성을 추가
  error: string | null;
  token: string | null;
}

export interface UserState {
  loading: boolean;
  userDetails: User | null; // 사용자 상세 정보
  error: string | null;
}

// Product 관련 타입 정의
export enum ProductActionTypes {
  FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

export interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

// Auth 액션 정의
interface LoginRequestAction {
  type: AuthActionTypes.LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: User; // 로그인 성공 시 사용자 정보
}

interface LoginFailureAction {
  type: AuthActionTypes.LOGIN_FAILURE;
  payload: string; // 오류 메시지
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

// User 액션 정의
interface UserDetailsRequestAction {
  type: UserActionTypes.USER_DETAILS_REQUEST;
}

interface UserDetailsSuccessAction {
  type: UserActionTypes.USER_DETAILS_SUCCESS;
  payload: User; // 사용자 상세 정보
}

interface UserDetailsFailureAction {
  type: UserActionTypes.USER_DETAILS_FAILURE;
  payload: string; // 오류 메시지
}

interface SetUserInfoAction {
  type: AuthActionTypes.SET_USER_INFO;
  payload: User;
}

// Product 액션 정의
interface FetchProductsRequestAction {
  type: ProductActionTypes.FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[]; // 제품 목록
}

interface FetchProductsFailureAction {
  type: ProductActionTypes.FETCH_PRODUCTS_FAILURE;
  payload: string; // 오류 메시지
}

// 액션 타입을 통합하여 내보내기
export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | SetUserInfoAction;

export type UserAction = 
  | UserDetailsRequestAction 
  | UserDetailsSuccessAction 
  | UserDetailsFailureAction;

export type ProductAction = 
  | FetchProductsRequestAction 
  | FetchProductsSuccessAction 
  | FetchProductsFailureAction;
