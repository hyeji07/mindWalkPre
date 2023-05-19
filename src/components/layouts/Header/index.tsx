/* import stLogo from '@assets/images/stLogo.png';
import MobileMenu from '@components/mobileMenu/MobileMenu';
import MenuTrigger from '@components/mobileMenu/MenuTrigger'; */

import ChangeLanguage from '@ChangeLanguage/index';
import headerLists from './headerList'; //Menu List

import { Link } from 'react-scroll';

export default function Header() {
  /*   const handleClickTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }; */

  return (
    <header className='header'>
      <div className='headerInner'>
        {/*  <div className='logo' onClick={handleClickTop}>
            <img src={stLogo} alt='secret town 로고' />
        </div> */}

        {/* Menu */}
        {/* 나중에 div id 주기 */}
        <div className='headerMenu'>
          <ul className='headerLists'>
            {headerLists.map((item, idx) => (
              <Link to={item.list} spy={false} smooth={true} key={idx}>
                <li>{item.list}</li>
              </Link>
            ))}
          </ul>
          <ChangeLanguage />
        </div>

        {/* Mobile Menu */}
        {/*    <MenuTrigger />
        <MobileMenu /> */}
      </div>
    </header>
  );
}
