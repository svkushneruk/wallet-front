import css from './RegisterPage.module.css';

import img from '../../images/registerPage/user-tablet.png';
import img2 from '../../images/registerPage/user-desktop.png';
import lightEllips from '../../images/loginPage/Ellipse2.png';
import darkEllips from '../../images/loginPage/Ellipse1.png';

import RegistrationForm from 'components/forms/RegistrationForm/RegistrationForm';

const RegisterPage = () => {
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
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegisterPage;
