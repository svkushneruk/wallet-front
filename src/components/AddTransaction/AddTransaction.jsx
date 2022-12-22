import { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { ReactComponent as Icon } from '../../images/homePage/calendar.svg';
import { ReactComponent as Plus } from '../../images/homePage/plus.svg';
import { ReactComponent as Minus } from '../../images/homePage/minus.svg';

import css from './AddTransaction.module.css';

import categories from './categories';

const AddTransaction = ({ onClose }) => {
  const [state, setState] = useState({
    income: true,
    category: '',
    sum: 0,
    date: '',
  });

  const elements = categories.map(item => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const handleCheck = () => {
    setState(prevState => ({
      ...prevState,
      income: !prevState.income,
    }));
  };

  const onDateChange = e => {
    setState(prevState => ({
      ...prevState,
      date: e._d,
    }));
  };

  const onHandleChange = ({ target }) => {
    setState(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log({ ...state });
  };

  const { income } = state;

  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Add transaction</h3>

      <form className={css.form} onSubmit={onSubmit}>
        <div className={`${css.form__group} ${css.form__groupChek}`}>
          <label
            htmlFor="profit"
            className={`${css.form__checkLabel} ${
              income ? css.form__checkLabel_income : false
            }`}
          >
            Income
          </label>
          <label htmlFor="profit" className={css.chekOut}>
            <input
              className={css.form__checkbox}
              checked={income}
              type="checkbox"
              name="isProfit"
              id="profit"
              onChange={handleCheck}
            />
            <div className={css.chekInner}>{income ? <Plus /> : <Minus />}</div>
          </label>
          <label
            htmlFor="profit"
            className={`${css.form__checkLabel} ${
              income ? false : css.form__checkLabel_expense
            }`}
          >
            Expense
          </label>
        </div>

        {!income && (
          <select
            className={css.form__select}
            name="category"
            onChange={onHandleChange}
          >
            {elements}
          </select>
        )}

        <div className={css.form__group}>
          <input
            type="number"
            name="sum"
            className={css.form__text}
            placeholder="0.00"
            onChange={onHandleChange}
          />
        </div>

        <div className={`${css.form__group} ${css.form__date}`}>
          <Datetime
            className={`${css.form__input} ${css.form__date}`}
            closeOnSelect={true}
            timeFormat={false}
            dateFormat={'DD.MM.YYYY'}
            onChange={onDateChange}
          />
          <Icon className={css.form__icon} />
        </div>

        <div className={css.form__group}>
          <textarea
            component="textarea"
            name="comment"
            placeholder="Comment"
            className={css.form__textarea}
            onChange={onHandleChange}
          ></textarea>
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
      </form>
    </div>
  );
};

export default AddTransaction;
