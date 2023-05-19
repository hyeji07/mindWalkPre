import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { changeLng } from '@stores/changeLng';
/* import { mobileMenuTrigger } from '@stores/mobileMenuTrigger'; */

export default function ChangeLanguage() {
  const [isOn, setIsOn] = useRecoilState(changeLng);
  /* const [isOnMobileMenu, setIsOnMobileMenu] = useRecoilState(mobileMenuTrigger);
   */
  const { i18n } = useTranslation();

  const handleClickLang = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOn(lng);

    /* setIsOnMobileMenu(!isOnMobileMenu); */
  };

  useEffect(() => {
    i18n.changeLanguage(isOn);
    /*   setIsOnMobileMenu(!isOn); */
  }, [i18n, isOn]);

  return (
    <ul className='langContainer'>
      <li
        className={isOn === 'ko-KR' ? 'langKo onLang' : 'langKo'}
        onClick={() => handleClickLang('ko-KR')}
      >
        KOR
      </li>
      <li
        className={isOn === 'en-US' ? 'onLang' : ''}
        onClick={() => handleClickLang('en-US')}
      >
        ENG
      </li>
    </ul>
  );
}
