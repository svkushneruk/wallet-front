import css from './HomePage.module.css';

import Navigation from 'components/Navigation/Navigation';

const HomePage = () => {
  return (
    <div className={css.home}>
      <Navigation />
    </div>
  );
};

export default HomePage;
