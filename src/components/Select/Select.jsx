import css from './Select.module.css';

import { ReactComponent as ArrowDown } from '../../images/categories/arrow-down.svg';
import { useState } from 'react';

const Select = ({ items, onHandleChange, currentItem }) => {
  const [state, setState] = useState({
    isOpen: false,
  });

  const onHandleOpen = () => {
    setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  };

  const onPickElem = ({ target }) => {
    onHandleChange(target.textContent);
  };

  const elements = items.map(item => (
    <li className={css.list__item} key={item} onClick={onPickElem}>
      {item}
    </li>
  ));

  const classes = state.isOpen ? `${css.list} ${css.active}` : css.list;

  return (
    <div className={css.select}>
      <div className={css.currentItem} onClick={onHandleOpen}>
        {currentItem} <ArrowDown className={css.currentItem__icon} />
        <ul className={classes}>{elements}</ul>
      </div>
    </div>
  );
};

export default Select;
