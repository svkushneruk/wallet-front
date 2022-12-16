import css from './Navigation.module.css';

import { NavLink } from 'react-router-dom';
import Media from 'react-media';

import { FaDollarSign } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

const Navigation = () => {
  const getClasses = ({ isActive }) => {
    const classes = isActive
      ? `${css.menu__link} ${css.active}`
      : css.menu__link;
    return classes;
  };

  return (
    <nav className={css.nav}>
      <ul className={css.menu}>
        <NavLink to="/home" className={getClasses}>
          <div className={css.iconWrap}>
            <FaHome />
          </div>

          <Media
            query="(min-width: 576px)"
            render={() => <p className={css.menu__text}>Home</p>}
          />
        </NavLink>

        <NavLink to="/diagram" className={getClasses}>
          <div className={css.iconWrap}>
            <FaChartLine />
          </div>

          <Media
            query="(min-width: 576px)"
            render={() => <p className={css.menu__text}>Statistics</p>}
          />
        </NavLink>

        <Media
          query="(max-width: 575px)"
          render={() => (
            <NavLink to="/current" className={getClasses}>
              <div className={css.iconWrap}>
                <FaDollarSign />
              </div>
            </NavLink>
          )}
        />
      </ul>
    </nav>
  );
};

export default Navigation;
