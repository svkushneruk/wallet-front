import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';

import css from './Layout.module.css';

import lightEllips from '../../images/loginPage/Ellipse2.png';
import darkEllips from '../../images/loginPage/Ellipse1.png';

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
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
