import css from './Header.module.css';

import Media from 'react-media';

import Wallet from '../../images/header/Wallet.svg';
import WalletText from '../../images/header/Wallet-text.png';
import Quit from '../../images/header/quit.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrap}>
          <a className={css.logo} href="/">
            <img className={css.logo__img} src={Wallet} alt="Wallet" />
            <img className={css.logo__img} src={WalletText} alt="WalletText" />
          </a>
          <div className={css.auth}>
            <p className={css.auth__name}>Name</p>
            <Media
              query="(min-width: 599px)"
              render={() => <span className={css.auth__text}>|</span>}
            />
            <button className={css.auth__btn}>
              <img className={css.auth__img} src={Quit} alt="quit" />
              <Media
                query="(min-width: 599px)"
                render={() => <p className={css.auth__text}>Exit</p>}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
