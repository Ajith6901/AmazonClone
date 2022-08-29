import React from "react";

import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export default function Header() {
  return (
    <div className="header">
      {/* // this is for the navigation bar , at the top ,which include order, add
      to cart and so on... */}
      <img className="header__logo" src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" alt="check header.js "
      />
      {/* // now for search bar , making new div:- //( div.header__search) */}
      <div className="header__search">


        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
        {/* adding the search icon here */}

      </div>
      <div className="header__nav">
        {/* // inside this div: we will have 3 more divs - which includes // sign
        in, orders, and basket */}


        <div className="header__option">
          {/* // this is for sign in option: */}
          <span className="header__optionLineOne">HELLO GUEST </span>
          <span className="header__optionLineTwo">SIGN IN</span>
       
        </div>


        <div className="header__option">
          <span className="header__optionLineOne">RETURN </span>
          <span className="header__optionLineTwo">& ORDERS</span>
        </div>


        <div className="header__option">
          <span className="header__optionLineOne">YOUR</span>
          <span className="header__optionLineTwo">PRIME</span>
        </div>

        {/* for adding the basket icon */}

        <div className="header__optionBasket">
            <ShoppingBasketIcon/>

            <span className="header__optionLineTwo header__basketCount">
                0
            </span>


        </div>


      </div>
    </div>
  );
}
