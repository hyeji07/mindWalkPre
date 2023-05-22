import React from 'react';

export default function KakaoLogin() {
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;

  const KAKAO_TOKEN_URL = `https://kauth.kakao.com/oauth/token`;

  const code = new URL(window.location.href).searchParams.get('code');

  const data = {
    grant_type: 'authorization_code',
    client_id: KAKAO_REST_API_KEY,
    redirect_uri: KAKAO_REDIRECT_URI,
    code: code,
  };

  return <div>hisssssss</div>;
}
