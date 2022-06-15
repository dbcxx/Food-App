import { Fragment } from "react";

import headerMealImage from "../../assests/meals.jpg";
import Classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={Classes.header}>
        <h1>Meals</h1>
        {/* <button> Cart</button> */}
        <HeaderCartButton />
      </header>
      <div className={Classes['main-image']}>
        <img src={headerMealImage} alt='meals on table '/>
      </div>
    </Fragment>
  );
};

export default Header;
