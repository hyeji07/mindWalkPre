import { Routes, Route } from 'react-router-dom';

import LayoutDefault from '@layout/LayoutDefault';
import Main from '@pages/Main';
import KakaoLogin from '@pages/login/KakaoLogin';
/* import NotFound from '@pages/error/NotFound'; */

export default function AppRoute(): JSX.Element {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path='/' element={<Main />} />
        <Route path='/auth' element={<KakaoLogin />} />
      </Route>
    </Routes>
  );
}
