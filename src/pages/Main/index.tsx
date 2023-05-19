import Login from '@pages/login';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function Main() {
  return (
    <div className='mainContainer'>
      <Login />
    </div>
  );
}
