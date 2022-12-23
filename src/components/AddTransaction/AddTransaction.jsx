import { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { ReactComponent as Icon } from '../../images/homePage/calendar.svg';
import { ReactComponent as Plus } from '../../images/homePage/plus.svg';
import { ReactComponent as Minus } from '../../images/homePage/minus.svg';

import css from './AddTransaction.module.css';

import Select from 'components/Select/Select';

import categories from './categories';

const AddTransaction = ({ onClose }) => {
  const [state, setState] = useState({
    isIncome: true,
    category: 'Other expences',
    sum: '',
    date: new Date(),
  });

  const handleCheck = () => {
    setState(prevState => ({
      ...prevState,
      isIncome: !prevState.isIncome,
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

  const onGetCategory = newCategory => {
    console.log(newCategory);
    setState(prevState => ({
      ...prevState,
      category: newCategory,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log({ ...state });
    setState(prevState => ({
      ...prevState,
      category: 'Other expences',
      sum: '',
      date: new Date(),
    }));
  };

  const { isIncome, category, sum } = state;

  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Add transaction</h3>

      <form className={css.form} onSubmit={onSubmit}>
        <div className={`${css.form__group} ${css.form__groupChek}`}>
          <label
            htmlFor="profit"
            className={`${css.form__checkLabel} ${
              isIncome ? css.form__checkLabel_income : false
            }`}
          >
            Income
          </label>
          <label htmlFor="profit" className={css.chekOut}>
            <input
              className={css.form__checkbox}
              checked={isIncome}
              type="checkbox"
              name="isProfit"
              id="profit"
              onChange={handleCheck}
            />
            <div className={css.chekInner}>
              {isIncome ? <Plus /> : <Minus />}
            </div>
          </label>
          <label
            htmlFor="profit"
            className={`${css.form__checkLabel} ${
              isIncome ? false : css.form__checkLabel_expense
            }`}
          >
            Expense
          </label>
        </div>

        {!isIncome && (
          <Select
            items={categories}
            currentItem={category}
            onHandleChange={onGetCategory}
          />
        )}

        <div className={css.form__group}>
          <div className={css.form__group_wrap}>
            <input
              type="number"
              name="sum"
              className={`${css.form__text} ${css.form__item}`}
              placeholder="0.00"
              onChange={onHandleChange}
              value={sum}
            />

            <div
              className={`${css.form__group} ${css.form__date} ${css.form__item}`}
            >
              <Datetime
                className={`${css.form__input} ${css.form__date}`}
                closeOnSelect={true}
                timeFormat={false}
                dateFormat={'DD.MM.YYYY'}
                onChange={onDateChange}
              />
              <Icon className={css.form__icon} />
            </div>
          </div>
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
