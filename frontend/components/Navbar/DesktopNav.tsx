import React, { useState } from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import ReactCountryFlag from "react-country-flag";
import { FaUserAlt } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import SearchModal from "./SearchModal";

type Props = {};

const DesktopNav = (props: Props) => {
  const [userCountry, setUserCountry] = useState("NG");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <nav
        className="hidden md:flex justify-between items-center h-16 w-full shadow-md fixed z-50 top-0 left-0 px-7 bg-white"
        id="nav_id"
      >
        <div className="nav__menu--logo">
          <Link href="/">
            <h3 className="font-bold text-3xl primary-color">
              KCIB<span className="secondary-color">ECOM</span>
            </h3>
          </Link>
        </div>
        <div className="nav__menu--search">
          <div
            className="nav__search cursor-pointer hover:bg-gray-300 flex items-center h-9 bg-gray-200 rounded-md px-4"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="nav__search--input pr-20 pl-3 text-sm text-gray-400">
              Search for products...
            </div>
            <button className="nav__search--btn pl-5">
              <BsSearch className="text-lg text-gray-500 " />
            </button>
          </div>
        </div>
        <div className="nav__menu--actions">
          <ul className="nav__actions flex justify-end">
            <li className="nav__action userCountry">
              <ReactCountryFlag
                countryCode={userCountry}
                svg
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  marginRight: "1.25rem",
                  position: "relative",
                  bottom: "3px",
                }}
                title="US"
              />
            </li>
            <li className="nav__action account__icon">
              <Link href="/details">
                <FaUserAlt className="text-xl mr-5" />
              </Link>
            </li>
            <Link href="/cart">
              <li className="nav__action cart__icon relative">
                <span className="cart__counter absolute primary-bg rounded-full w-2 h-2 flex items-center justify-center p-[10px] text-white -top-2 -right-0">
                  0
                </span>
                <RiShoppingCartLine className="text-xl mr-5" />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <SearchModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default DesktopNav;
