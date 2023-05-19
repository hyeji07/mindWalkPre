import { Outlet } from 'react-router';

import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';

export default function LayoutDefault() {
  return (
    <>
      {/*   <Header /> */}
      <Outlet />
      {/*   <Footer /> */}
    </>
  );
}
