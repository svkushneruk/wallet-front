import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { ReactComponent as Icon } from '../../images/homePage/calendar.svg';
import { ReactComponent as Plus } from '../../images/homePage/plus.svg';
import { ReactComponent as Minus } from '../../images/homePage/minus.svg';

import css from './AddTransaction.module.css';

import categories from './categories';

const AddTransaction = ({ onClose }) => {
  const [isChecked, setIsChecked] = useState(true);

  const elements = categories.map(item => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // resetForm();
  };

  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Add transaction</h3>
      <Formik
        initialValues={{
          isProfit: true,
          sum: '',
          time: '',
          comment: '',
          category: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={`${css.form__group} ${css.form__groupChek}`}>
            <label
              htmlFor="profit"
              className={`${css.form__checkLabel} ${
                isChecked ? css.form__checkLabel_income : false
              }`}
            >
              Income
            </label>
            <label htmlFor="profit" className={css.chekOut}>
              <Field
                className={css.form__checkbox}
                checked={isChecked}
                type="checkbox"
                name="isProfit"
                id="profit"
                onChange={handleCheck}
              />
              <div className={css.chekInner}>
                {isChecked ? <Plus /> : <Minus />}
              </div>
            </label>
            <label
              htmlFor="profit"
              className={`${css.form__checkLabel} ${
                isChecked ? false : css.form__checkLabel_expense
              }`}
            >
              Expense
            </label>
          </div>
          <Field name="category" as="select">
            {elements}
          </Field>
          <div className={css.form__group}>
            <Field
              type="number"
              name="sum"
              className={css.form__text}
              placeholder="0.00"
            />
          </div>
          <div className={`${css.form__group} ${css.form__date}`}>
            <Datetime
              className={`${css.form__input} ${css.form__date}`}
              closeOnSelect={true}
              timeFormat={false}
              dateFormat={'DD.MM.YYYY'}
            />
            <Icon className={css.form__icon} />
          </div>
          <div className={css.form__group}>
            <Field
              component="textarea"
              name="comment"
              placeholder="Comment"
              className={css.form__textarea}
            ></Field>
          </div>
          <div className={css.form__buttons}>
            <button
              type="submit"
              className={`${css.form__btn} ${css.form__btn_add}`}
            >
              Add
            </button>
            <button
              type="button"
              className={`${css.form__btn} ${css.form__btn_cancel}`}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTransaction;
