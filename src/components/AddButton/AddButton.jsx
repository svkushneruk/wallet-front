import css from './AddButton.module.css';

import plusSvg from '../../images/homePage/plus.svg';

const AddButton = ({ onClick }) => {
  // console.log(onClick);
  return (
    <button type="button" className={css.btn} onClick={onClick}>
      <img src={plusSvg} alt="Plus" className={css.img} />
    </button>
  );
};

export default AddButton;
