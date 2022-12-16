import css from './Transactions.module.css';

const Transactions = ({ transactions }) => {
  const elements = transactions.map(
    ({ id, data, isProfit, category, comment, total, balance }) => {
      const totalClasses = isProfit
        ? `${css.table__td} ${css.light}`
        : `${css.table__td} ${css.dark}`;

      return (
        <tr className={css.table__row} key={id}>
          <td className={css.table__td}>{data}</td>
          <td className={css.table__td}>{isProfit ? '+' : '-'}</td>
          <td className={css.table__td}>{category}</td>
          <td className={css.table__td}>{comment}</td>
          <td className={totalClasses}>{total}</td>
          <td className={css.table__td}>{balance}</td>
        </tr>
      );
    }
  );

  return (
    <table className={css.table}>
      <thead className={css.table__head}>
        <tr className={css.table__headRow}>
          <th className={css.table__title}>Date</th>
          <th className={css.table__title}>Type</th>
          <th className={css.table__title}>Category</th>
          <th className={css.table__title}>Comment</th>
          <th className={css.table__title}>Sum</th>
          <th className={css.table__title}>Balance</th>
        </tr>
      </thead>
      <tbody className={css.table__body}>{elements}</tbody>
    </table>
  );
};

export default Transactions;
