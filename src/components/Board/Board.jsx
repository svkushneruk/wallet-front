import css from './Board.module.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import Select from 'components/Select/Select';
import { useState } from 'react';

import StatisticButton from 'components/StatisticButton/StatisticButton';

const statistic = [
  { title: 'Main expenses', value: 8700, color: '#FED057' },
  { title: 'Products', value: 3800, color: '#FFD8D0' },
  { title: 'Car', value: 1500, color: '#FD9498' },
  { title: 'Self care', value: 800, color: '#C5BAFF' },
  { title: 'Child care', value: 2200, color: '#6E78E8' },
  { title: 'Household products', value: 300, color: '#4A56E2' },
  { title: 'Education', value: 3400, color: '#81E1FF' },
  { title: 'Leisure', value: 123, color: '#24CCA7' },
  { title: 'Other expenses', value: 610, color: '#00AD84' },
];

const data = {
  datasets: [
    {
      // label: '# of Votes',
      data: statistic.map(item => item.value),
      backgroundColor: statistic.map(item => item.color),
      borderColor: statistic.map(item => item.color),
      borderWidth: 1,
    },
  ],
};

const months = [
  'January',
  'Fabruary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Augast',
  'September',
  'October',
  'November',
  'December',
];

const years = [
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
];

ChartJS.register(ArcElement, Tooltip, Legend);

const Board = () => {
  const [state, setState] = useState({
    month: months[new Date().getMonth()],
    year: 2022,
  });

  const onMonthChange = currentMonth => {
    console.log(currentMonth);
    setState(prevState => ({
      ...prevState,
      month: currentMonth,
    }));
  };

  const onYearChange = currentYear => {
    console.log(currentYear);
    setState(prevState => ({
      ...prevState,
      year: currentYear,
    }));
  };

  const { month, year } = state;

  const elements = statistic.map(({ title, value, color }) => (
    <tr key={title} className={css.table__row}>
      <td className={css.table__td}>
        <span
          style={{ backgroundColor: color }}
          className={css.table__span}
        ></span>
        {title}
      </td>
      <td className={css.table__td}>{value}</td>
    </tr>
  ));

  return (
    <div className={css.board}>
      <div className={css.diagram__controls}>
        <div className={css.diagram}>
          <Doughnut data={data} />
        </div>
        <div className={css.content}>
          <div className={css.content__btns}>
            <StatisticButton
              items={months}
              onHandleChange={onMonthChange}
              currentItem={month}
            />
            <StatisticButton
              items={years}
              onHandleChange={onYearChange}
              currentItem={year}
            />
          </div>

          <div className={css.diagram__table}>
            <table className={css.table}>
              <thead className={css.table__head}>
                <tr className={css.table__head_row}>
                  <th className={css.table__head_th}>Category</th>
                  <th className={css.table__head_th}>Sum</th>
                </tr>
              </thead>
              <tbody className={css.table__body}>{elements}</tbody>
            </table>
            <div className={css.total}>
              <p className={css.total__price}>
                Expenses:{' '}
                <span
                  className={`${css.total__current} ${css.total__expenses}`}
                >
                  22 549.24
                </span>
              </p>
              <p className={css.total__price}>
                Income:{' '}
                <span className={`${css.total__current} ${css.total__income}`}>
                  27 350.00
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
