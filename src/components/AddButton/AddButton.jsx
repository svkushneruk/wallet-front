import css from './AddButton.module.css';

import plusSvg from '../../images/homePage/plus.svg';

const AddButton = () => {
  return (
    <button type="button" className={css.btn}>
      <img src={plusSvg} alt="Plus" className={css.img} />
    </button>
  );
};

export default AddButton;
