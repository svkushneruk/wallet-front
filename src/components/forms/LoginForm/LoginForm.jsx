import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import logoMobile from '../../../images/logo-mobile.svg';

import { ReactComponent as EmailIcon } from '../../../images/forms/form-email.svg';
import { ReactComponent as PasswordIcon } from '../../../images/forms/form-password.svg';

import css from './LoginForm.module.css';

const LoginForm = () => {
  const emailId = nanoid();
  const passwordId = nanoid();

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().min(6, 'Length is not enough').max(16).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className={css.wrap}>
      <a href="/" className={css.logo}>
        <img src={logoMobile} alt="Wallet" className={css.logo__img} />
      </a>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.form__group}>
            <EmailIcon className={css.form__icon} />
            <Field
              id={emailId}
              type="email"
              name="email"
              className={css.form__input}
              placeholder=" "
            />
            <label htmlFor={emailId} className={css.form__lable}>
              E-mail
            </label>
            <ErrorMessage component="div" name="email" className={css.error} />
          </div>
          <div className={css.form__group}>
            <PasswordIcon className={css.form__icon} />
            <Field
              id={passwordId}
              type="password"
              name="password"
              className={css.form__input}
              placeholder=" "
            />
            <label htmlFor={passwordId} className={css.form__lable}>
              Password
            </label>
            <ErrorMessage
              component="div"
              name="password"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.form__btn}>
            Log In
          </button>
          <Link to="/register" className={css.form__link}>
            Register
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
