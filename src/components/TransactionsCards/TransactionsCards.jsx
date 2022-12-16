import css from './TransactionsCards.module.css';

const TransactionsCards = ({ transactions }) => {
  const elements = transactions.map(
    ({ id, data, isProfit, category, comment, total, balance }) => {
      const itemClasses = isProfit
        ? `${css.cardList__item} ${css.light}`
        : `${css.cardList__item} ${css.dark}`;

      const totalClasses = isProfit
        ? `${css.cardList__text} ${css.light}`
        : `${css.cardList__text} ${css.dark}`;

      return (
        <li className={css.transactionsList__item} key={id}>
          <a href="/" className={`${css.transactionsList__link} ${css.card}`}>
            <ul className={css.cardList}>
              <li className={itemClasses}>
                <h3 className={css.cardList__title}>Date</h3>
                <p className={css.cardList__text}>{data}</p>
              </li>
              <li className={itemClasses}>
                <h3 className={css.cardList__title}>Type</h3>
                <p className={css.cardList__text}>{isProfit ? '+' : '-'}</p>
              </li>
              <li className={itemClasses}>
                <h3 className={css.cardList__title}>Category</h3>
                <p className={css.cardList__text}>{category}</p>
              </li>
              <li className={itemClasses}>
                <h3 className={css.cardList__title}>Comment</h3>
                <p className={css.cardList__text}>{comment}</p>
              </li>
              <li className={itemClasses}>
                <h3 className={css.cardList__title}>Sum</h3>
                <p className={totalClasses}>{total}</p>
              </li>
              <li className={itemClasses}>
                <h3 className={css.cardList__title}>Balance</h3>
                <p className={css.cardList__text}>{balance}</p>
              </li>
            </ul>
          </a>
        </li>
      );
    }
  );

  return <ul className={css.transactionsList}>{elements}</ul>;
};

export default TransactionsCards;
