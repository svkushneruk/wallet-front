import css from './StatisticsPage.module.css';

import Navigation from 'components/Navigation/Navigation';

const StatisticsPage = () => {
  return (
    <div className={css.statistics}>
      <div className="container">
        <Navigation />
      </div>
    </div>
  );
};

export default StatisticsPage;
