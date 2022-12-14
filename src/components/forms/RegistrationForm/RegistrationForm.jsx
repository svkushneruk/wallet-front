import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import logoMobile from '../../../images/logo-mobile.svg';

import { ReactComponent as EmailIcon } from '../../../images/forms/form-email.svg';
import { ReactComponent as PasswordIcon } from '../../../images/forms/form-password.svg';
import { ReactComponent as UserIcon } from '../../../images/forms/form-user.svg';

import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const emailId = nanoid();
  const passwordId = nanoid();
  const confirmPasswordId = nanoid();
  const userMessegeId = nanoid();

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().min(6, 'Length is not enough').max(16).required(),
    confirmPassword: yup
      .string()
      .label('confirmPassword')
      .required()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    userMessage: yup.string().min(1).max(16).required('Name is required'),
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
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          userMessage: '',
        }}
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
          <div className={css.form__group}>
            <PasswordIcon className={css.form__icon} />
            <Field
              id={confirmPasswordId}
              type="password"
              name="confirmPassword"
              className={css.form__input}
              placeholder=" "
            />
            <label htmlFor={confirmPasswordId} className={css.form__lable}>
              Confirm password
            </label>
            <ErrorMessage
              component="div"
              name="confirmPassword"
              className={css.error}
            />
          </div>
          <div className={css.form__group}>
            <UserIcon className={css.form__icon} />
            <Field
              id={userMessegeId}
              type="text"
              name="userMessage"
              className={css.form__input}
              placeholder=" "
            />
            <label htmlFor={userMessegeId} className={css.form__lable}>
              First name{' '}
            </label>
            <ErrorMessage
              component="div"
              name="userMessage"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.form__btn}>
            Register
          </button>
          <Link to="/login" className={css.form__link}>
            Log In
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
