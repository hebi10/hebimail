import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../store/reducers/rootReducer';
import { AppDispatch } from '../store/store';  // store.ts에서 가져옴
import { login } from '../store/actions/authActions';
import styles from './LoginPage.module.css';
import logo from '../assets/images/img/img_logo01.png';

const LoginPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();  // AppDispatch 타입 지정
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const [data, setData] = useState({
    id: '',
    pw: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    dispatch(login({ id: data.id, password: data.pw }));
  };

  if (isAuthenticated) {
    navigate('/');
  }

  return (
    <>
      <h2 className={styles.loginLogo}>
        <Link to="/">
          <img src={logo} alt="메인 로고" />
        </Link>
      </h2>
      <div className={`${styles.loginBox}`}>
        <h2 className={`pt7_24`}>Login Page</h2>
        <div className={`${styles.inputBox}`}>
          <input
            type="text"
            name="id"
            placeholder="아이디를 입력해주세요"
            value={data.id}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="pw"
            placeholder="비밀번호를 입력해주세요"
            value={data.pw}
            onChange={handleInputChange}
          />
          <button className={`btn`} onClick={handleLogin} disabled={loading}>
            {loading ? '로그인 중...' : '로그인'}
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
