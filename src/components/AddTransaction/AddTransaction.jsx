import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { ReactComponent as Icon } from '../../images/homePage/calendar.svg';
import { ReactComponent as Plus } from '../../images/homePage/plus.svg';

import css from './AddTransaction.module.css';

const AddTransaction = ({ onClose }) => {
  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Add transaction</h3>
      <form className={css.form}>
        <div className={`${css.form__group} ${css.form__groupChek}`}>
          <label htmlFor="profit" className={css.form__checkLabel}>
            Income
          </label>
          <label htmlFor="profit" className={css.chekOut}>
            <input
              className={css.form__checkbox}
              type="checkbox"
              name="isProfit"
              id="profit"
            />
            <div className={css.chekInner}>
              <Plus />
            </div>
          </label>
          <label htmlFor="profit" className={css.form__checkLabel}>
            Expense
          </label>
        </div>
        <div className={css.form__group}>
          <input type="text" name="sum" className={css.form__text} />
        </div>
        <div className={`${css.form__group} ${css.form__date}`}>
          <Datetime
            className={`${css.form__input} ${css.form__date}`}
            timeFormat={false}
            dateFormat={'DD.MM.YYYY'}
          />
          <Icon className={css.form__icon} />
        </div>
        <div className={css.form__group}>
          <textarea
            placeholder="Comment"
            className={css.form__textarea}
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
