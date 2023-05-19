import { useTranslation } from 'react-i18next';

/* import stLogo from '@assets/images/stLogo.png'; */
/* import TopBtn from '@components/btns/TopBtn'; */
import ftFamilyLists from './footerList';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className='ft'>
      <div className='ftInner'>
        <div className='ftText'>
          WE LOOK FORWARD TO WORKING
          <br />
          WITH YOU TO MAKE METAVERSE
        </div>

        <div className='ftContent'>
          <div className='ftCompany'>
            <div className='ftLogo'>
              {/* <img src={stLogo} alt='secret town logo' /> */}
            </div>

            <div className='ftInfo'>
              <span>Address : {t('footerAddress')}</span>
              <span>Contact us : 070-4736-0002</span>
              <span>
                E-mail : ceo@secrettown.co.kr | wisereport@gmail.com |
                maxmook@naver.com
              </span>
              <span>{t('footerCorporateTitle')} : 220-88-90031</span>
              <span>
                {t('footerCeoTitle')} : {t('footerCeo')}
              </span>
            </div>

            <div className='ftCopy'>
              Copyright ⓒ 2014 SECRET TOWN . ALL RIGHTS RESERVED.
            </div>
          </div>

          <dl className='ftFamily'>
            <dt className='ftFamilyTitle'>Family Site</dt>
            <dd>
              <ul className='ftFamilLists'>
                {ftFamilyLists.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      window.open(item.url);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </div>
      </div>

      {/* <TopBtn /> */}
    </div>
  );
}
