import { useState, useEffect } from 'react';

interface DecodedToken {
  userId: string;
  role: string;
  iat: number;
  exp: number;
}

const decodeJWT = (token: string): DecodedToken | null => {
  try {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = atob(payloadBase64);
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};

const useDecodedToken = (): DecodedToken | null => {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo.token;

      if (token) {
        const decoded = decodeJWT(token);
        if (decoded) {
          if (decoded.exp * 1000 > Date.now()) {
            setDecodedToken(decoded);
          } else {
            console.warn('Token is expired');
            localStorage.removeItem('userInfo');
          }
        }
      }
    }
  }, []);

  return decodedToken;
};

export default useDecodedToken;
