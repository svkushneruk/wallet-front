import css from './Transactions.module.css';

const Transactions = () => {
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
      <tbody className={css.table__body}>
        <tr className={css.table__row}>
          <td className={css.table__td}>04.01.19</td>
          <td className={css.table__td}>-</td>
          <td className={css.table__td}>Other</td>
          <td className={css.table__td}>Gift for your wife</td>
          <td className={css.table__td}>300.00</td>
          <td className={css.table__td}>6 900.00</td>
        </tr>
        <tr className={css.table__row}>
          <td className={css.table__td}>04.01.19</td>
          <td className={css.table__td}>+</td>
          <td className={css.table__td}>Other</td>
          <td className={css.table__td}>Gift for your wife</td>
          <td className={css.table__td}>300.00</td>
          <td className={css.table__td}>6 900.00</td>
        </tr>
        <tr className={css.table__row}>
          <td className={css.table__td}>04.01.19</td>
          <td className={css.table__td}>-</td>
          <td className={css.table__td}>Other</td>
          <td className={css.table__td}>Gift for your wife</td>
          <td className={css.table__td}>300.00</td>
          <td className={css.table__td}>6 900.00</td>
        </tr>
        <tr>
          <td className={css.table__td}>04.01.19</td>
          <td className={css.table__td}>+</td>
          <td className={css.table__td}>Other</td>
          <td className={css.table__td}>Gift for your wife</td>
          <td className={css.table__td}>300.00</td>
          <td className={css.table__td}>6 900.00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transactions;
