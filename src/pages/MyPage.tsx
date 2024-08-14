import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/reducers/rootReducer';

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    // 쿠키에서 토큰 가져오기
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

    if (!token) {
      // 토큰이 없으면 로그인 페이지로 리다이렉트
      navigate('/hebimail/login');
    } else {
      // 토큰이 있으면 추가 작업 가능
      console.log('User is authenticated');
    }
  }, [navigate]);

  return (
    <div>
      <h1>My Page</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyPage;
