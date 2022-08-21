import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

import { categories } from "../../assets/data/categories";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <div className="sticky">
      <div className="nav__top flex items-center justify-between px-3 h-14 border-b-gray-600 border border-b-[0.5px]">
        <div className="nav__top--logo">
          <h3 className="font-bold text-2xl">
            KCIB<span className="secondary-color">ECOM</span>
          </h3>
        </div>
        <div className="nav__top--menu flex-1 ">
          <ul className="nav__menu--icons flex justify-end">
            <li className="nav__menu--icon search__icon">
              <BsSearch className="text-xl mr-4" />
            </li>
            <li className="nav__menu--icon account__icon">
              <Link href="/details">
                <FaUserAlt className="text-xl mr-4" />
              </Link>
            </li>
            <li className="nav__menu--icon cart__icon">
              <Link href="/search/jeans">
                <AiOutlineShoppingCart className="text-xl mr-4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav__bottom">
        <div className="nav__bottom--menu">
          <ul className="nav__botttom--categories flex snap-x  w-full overflow-x-auto">
            {categories.map((category, index) => (
              <li
                className="nav__bottom--category snap-center px-4 py-2 font-medium"
                key={index}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
