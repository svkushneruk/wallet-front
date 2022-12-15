import css from './Balance.module.css';

const Balance = () => {
  return (
    <div className={css.balance}>
      <h3 className={css.balance__title}>Your Balance</h3>
      <p className={css.balance__price}>
        ₴ <span className={css.balance__total}> 24 000.00</span>
      </p>
    </div>
  );
};

export default Balance;
