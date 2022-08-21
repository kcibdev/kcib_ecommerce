import React from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

type Props = {};

const DesktopNav = (props: Props) => {
  return (
    <nav className="hidden md:block">
      <div className="nav__menu--logo">
        <Link href="/">
          <h3 className="font-bold text-3xl primary-color">
            KCIB<span className="secondary-color">ECOM</span>
          </h3>
        </Link>
      </div>
      <div className="nav__menu--search">
        <div className="nav__search">
          <span className="nav__search--input">Search for products...</span>
          <button className="nav__search--btn">
            <BsSearch className="text-xl" />
          </button>
        </div>
      </div>
      <div className="nav__menu--actions"></div>
    </nav>
  );
};

export default DesktopNav;
