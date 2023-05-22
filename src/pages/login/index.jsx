import React from 'react';
import KakaoLogin from './KakaoLogin';

export default function Login() {
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;

  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  console.log(KAKAO_REST_API_KEY);

  return <button onClick={kakaoLoginHandler}>카카오 로그인</button>;
}
