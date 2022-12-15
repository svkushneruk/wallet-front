import css from './HomePage.module.css';

import Media from 'react-media';

import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Transactions from 'components/Transactions/Transactions';

const HomePage = () => {
  return (
    <div className={css.home}>
      <div className="container">
        <div className={css.pageWrap}>
          <div className={css.content}>
            <div className={css.contentInner}>
              <Navigation />
              <Balance />
            </div>

            <Media
              query="(min-width: 576px)"
              render={() => (
                <div className={css.currencyInner}>
                  <Currency />
                </div>
              )}
            />
          </div>
          <div className={css.board}>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
