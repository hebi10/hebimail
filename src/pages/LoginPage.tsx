import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../store/store';
import { login } from '../store/actions/authActions';
import styles from './LoginPage.module.css';
import logo from '../assets/images/img/img_logo01.png';
import { RootState } from '../store/reducers/rootReducer';
import useDecodedToken from "../hooks/useDecodedToken";

const LoginPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const decodedToken = useDecodedToken();
  const { loading, error, token } = useSelector((state: RootState) => state.auth); // token 추가

  const [data, setData] = useState<{ id: string; pw: string }>({
    id: '',
    pw: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(login({ id: data.id, password: data.pw }));
  };

  useEffect(() => {
    if (decodedToken) {
      navigate('/me'); // 이미 로그인된 사용자는 마이페이지로 이동
    }
  }, [decodedToken, navigate]);

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
            disabled={loading}
          />
          <input
            type="password"
            name="pw"
            placeholder="비밀번호를 입력해주세요"
            value={data.pw}
            onChange={handleInputChange}
            disabled={loading}
          />
          <button className={`btn`} onClick={handleLogin} disabled={loading}>
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <div className={`${styles.account} pt7_18`}>
          <h2>테스트 계정 정보</h2>
          <p>
            "id": "admin1234",<br />
            "password": "adminpassword",<br />
            "nickname": "Admin"<br />
            <br />
            "id": "user1234",<br />
            "password": "userpassword",<br />
            "nickname": "User1"<br />
            <br />
            "id": "user5678",<br />
            "password": "userpassword",<br />
            "nickname": "User2"<br />
            <br />
            "id": "user91011",<br />
            "password": "userpassword",<br />
            "nickname": "User3"<br />
            <br />
            "id": "user1213",<br />
            "password": "userpassword",<br />
            "nickname": "User4"<br />
            <br />
            "id": "user1415",<br />
            "password": "userpassword",<br />
            "nickname": "User5"
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
