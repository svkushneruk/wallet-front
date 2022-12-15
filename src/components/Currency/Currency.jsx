import css from './Currency.module.css';

import Bg from '../../images/currency-bg.png';

const Currency = () => {
  return (
    <table className={css.table}>
      <thead className={css.table__head}>
        <tr className={css.table__row}>
          <th className={css.table__title}>Currency</th>
          <th className={css.table__title}>Purchase</th>
          <th className={css.table__title}>Sale</th>
        </tr>
      </thead>
      <tbody
        className={css.table__body}
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: 'center bottom',
        }}
      >
        <tr className={css.table__row}>
          <td className={css.table__td}>USD</td>
          <td className={css.table__td}>27.55</td>
          <td className={css.table__td}>27.65</td>
        </tr>
        <tr className={css.table__row}>
          <td className={css.table__td}>EUR</td>
          <td className={css.table__td}>30.00</td>
          <td className={css.table__td}>30.10</td>
        </tr>
        <tr className={css.table__row}>
          <td className={css.table__td}>FRK</td>
          <td className={css.table__td}>35.00</td>
          <td className={css.table__td}>37.10</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Currency;
