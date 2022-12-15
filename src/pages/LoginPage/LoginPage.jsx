import css from './LoginPage.module.css';

import img from '../../images/loginPage/LoginPageImg.png';
import img2 from '../../images/loginPage/LoginPageImgDesktop.png';
import lightEllips from '../../images/loginPage/Ellipse2.png';
import darkEllips from '../../images/loginPage/Ellipse1.png';

import LoginForm from 'components/forms/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div
      className={css.page}
      style={{
        backgroundImage: `url(${lightEllips}), url(${darkEllips})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'top right, bottom left',
      }}
    >
      <div className={css.page__sideWrap}>
        <div className={css.innerWrap}>
          <picture className={css.page__img}>
            <source
              srcSet={img2}
              type="image/png"
              media="(min-width: 1120px)"
            />
            <source srcSet={img} type="image/png" media="(min-width: 540px)" />
            <img src={img} alt="download metamask" />
          </picture>
          <h1 className={css.page__title}>Finance App</h1>
        </div>
      </div>
      <div className={css.page__formWrap}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
