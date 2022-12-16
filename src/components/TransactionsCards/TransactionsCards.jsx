import css from './TransactionsCards.module.css';

const TransactionsCards = () => {
  return (
    <ul className={css.transactionsList}>
      <li className={css.transactionsList__item}>
        <a href="/" className={`${css.transactionsList__link} ${css.card}`}>
          <ul className={css.cardList}>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Date</h3>
              <p className={css.cardList__text}>04.01.19</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Type</h3>
              <p className={css.cardList__text}>-</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Category</h3>
              <p className={css.cardList__text}>Other</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Comment</h3>
              <p className={css.cardList__text}>Gift for your wife</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Sum</h3>
              <p className={css.cardList__text}>300.00</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Balance</h3>
              <p className={css.cardList__text}>6 900.00</p>
            </li>
          </ul>
        </a>
      </li>
      <li className={css.transactionsList__item}>
        <a href="/" className={`${css.transactionsList__link} ${css.card}`}>
          <ul className={css.cardList}>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Date</h3>
              <p className={css.cardList__text}>04.01.19</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Type</h3>
              <p className={css.cardList__text}>-</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Category</h3>
              <p className={css.cardList__text}>Other</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Comment</h3>
              <p className={css.cardList__text}>Gift for your wife</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Sum</h3>
              <p className={css.cardList__text}>300.00</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Balance</h3>
              <p className={css.cardList__text}>6 900.00</p>
            </li>
          </ul>
        </a>
      </li>
      <li className={css.transactionsList__item}>
        <a href="/" className={`${css.transactionsList__link} ${css.card}`}>
          <ul className={css.cardList}>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Date</h3>
              <p className={css.cardList__text}>04.01.19</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Type</h3>
              <p className={css.cardList__text}>-</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Category</h3>
              <p className={css.cardList__text}>Other</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Comment</h3>
              <p className={css.cardList__text}>Gift for your wife</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Sum</h3>
              <p className={css.cardList__text}>300.00</p>
            </li>
            <li className={css.cardList__item}>
              <h3 className={css.cardList__title}>Balance</h3>
              <p className={css.cardList__text}>6 900.00</p>
            </li>
          </ul>
        </a>
      </li>
    </ul>
  );
};

export default TransactionsCards;
