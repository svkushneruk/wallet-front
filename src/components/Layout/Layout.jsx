import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';

import Media from 'react-media';

import css from './Layout.module.css';

import lightEllips from '../../images/loginPage/Ellipse2.png';
import darkEllips from '../../images/loginPage/Ellipse1.png';

import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

const Layout = () => {
  return (
    <div>
      <Header />
      <main
        className={css.main}
        style={{
          backgroundColor: '#E7EAF2',
          backgroundImage: ` url(${lightEllips}), url(${darkEllips})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: 'top right, bottom left',
        }}
      >
        <div className={css.backdrop}>
          <div className="container">
            <div className={css.wrap}>
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
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
