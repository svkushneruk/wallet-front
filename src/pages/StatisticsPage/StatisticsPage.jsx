import css from './StatisticsPage.module.css';

import Board from 'components/Board/Board';

const StatisticsPage = () => {
  return (
    <div className={css.statistics}>
      <h2 className={css.pageTitle}>Statistics</h2>
      <div className={css.board}>
        <Board />
      </div>
    </div>
  );
};

export default StatisticsPage;
