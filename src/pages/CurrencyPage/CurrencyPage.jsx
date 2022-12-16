import css from './CurrencyPage.module.css';

import Media from 'react-media';

import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';

const CurrencyPage = () => {
  return (
    <Media
      query="(max-width: 575px)"
      render={() => (
        <div className={css.page}>
          <div className="container">
            <Navigation />
            <div className={css.wrap}>
              <Currency />
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default CurrencyPage;
