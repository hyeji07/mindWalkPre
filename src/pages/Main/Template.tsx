import { useTranslation } from 'react-i18next';

/* 아직 안불러온 파일임, 작성만 해놓음. 본문 template */
export default function Template() {
  const { t } = useTranslation();

  return (
    <div className='contentWrap'>
      <div className='contentInner'>
        <div className='title'>
          <p>{t('footerAddress')}</p>
        </div>
      </div>
    </div>
  );
}
