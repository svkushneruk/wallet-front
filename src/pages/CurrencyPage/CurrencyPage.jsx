import css from './CurrencyPage.module.css';

import Media from 'react-media';

import Currency from 'components/Currency/Currency';

const CurrencyPage = () => {
  return (
    <Media
      query="(max-width: 575px)"
      render={() => (
        <div className={css.page}>
          <div className={css.wrap}>
            <Currency />
          </div>
        </div>
      )}
    />
  );
};

export default CurrencyPage;
