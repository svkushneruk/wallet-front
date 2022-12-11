import { nanoid } from 'nanoid';

import logoMobile from '../../../images/logo-mobile.svg';

import { ReactComponent as EmailIcon } from '../../../images/forms/form-email.svg';
import { ReactComponent as PasswordIcon } from '../../../images/forms/form-password.svg';
import { ReactComponent as UserIcon } from '../../../images/forms/form-user.svg';

import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const emailId = nanoid();
  const passwordId = nanoid();
  const confirmPasswordId = nanoid();
  const userId = nanoid();
  return (
    <div className={css.wrap}>
      <a href="/" className={css.logo}>
        <img src={logoMobile} alt="Wallet" className={css.logo__img} />
      </a>
      <form className={css.form}>
        <div className={css.form__group}>
          <EmailIcon className={css.form__icon} />
          <input
            id={emailId}
            type="email"
            name="email"
            className={css.form__input}
          />
          <label htmlFor={emailId} className={css.form__lable}>
            E-mail
          </label>
        </div>
        <div className={css.form__group}>
          <PasswordIcon className={css.form__icon} />
          <input
            id={passwordId}
            type="password"
            name="password"
            className={css.form__input}
          />
          <label htmlFor={passwordId} className={css.form__lable}>
            Password
          </label>
        </div>
        <div className={css.form__group}>
          <PasswordIcon className={css.form__icon} />
          <input
            id={confirmPasswordId}
            type="password"
            name="password"
            className={css.form__input}
          />
          <label htmlFor={confirmPasswordId} className={css.form__lable}>
            Confirm password
          </label>
        </div>
        <div className={css.form__group}>
          <UserIcon className={css.form__icon} />
          <input
            id={userId}
            type="text"
            name="user"
            className={css.form__input}
          />
          <label htmlFor={userId} className={css.form__lable}>
            First name{' '}
          </label>
        </div>
        <button type="submit" className={css.form__btn}>
          Register
        </button>
        <a href="/login" className={css.form__link}>
          Log In
        </a>
      </form>
    </div>
  );
};

export default RegistrationForm;
