import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";

import { categories } from "../../assets/data/categories";
import ReactCountryFlag from "react-country-flag";
import axios from "axios";
import SearchModal from "./SearchModal";

type Props = {};

const MobileNav = (props: Props) => {
  const [userCountry, setUserCountry] = useState("NG");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   const getUserCountry = async () => {
  //     const response = await axios.get("https://ipapi.co/json/");
  //     setUserCountry(response?.data?.country);
  //   };
  //   getUserCountry();
  // }, []);

  return (
    <>
      <nav className="sticky shadow-lg md:hidden bg-white top-0 left-0 z-40">
        <div className="nav__top flex items-center justify-between px-3 h-14 border-b-gray-400 border border-b-[0.2px]">
          <div className="nav__top--logo">
            <Link href="/">
              <h3 className="font-bold text-2xl primary-color">
                KCIB<span className="secondary-color">ECOM</span>
              </h3>
            </Link>
          </div>
          <div className="nav__top--menu flex-1 ">
            <ul className="nav__menu--icons flex justify-end">
              <li className="nav__menu--icon flag__icon">
                <ReactCountryFlag
                  countryCode={userCountry}
                  svg
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "1rem",
                    position: "relative",
                    bottom: "3px",
                  }}
                  title="US"
                />
              </li>
              <li
                className="nav__menu--icon search__icon"
                onClick={() => setIsModalOpen(true)}
              >
                <BsSearch className="text-[1.125rem] mr-4 text-gray-700" />
              </li>
              <li className="nav__menu--icon account__icon">
                <Link href="/details">
                  <FaUserAlt className="text-[1.125rem] mr-4 text-gray-700" />
                </Link>
              </li>
              <Link href="/search/jeans">
                <li className="nav__menu--icon cart__icon relative">
                  <span className="cart__counter absolute primary-bg rounded-full w-2 h-2 flex items-center justify-center p-[10px] text-white -top-2 -right-0">
                    0
                  </span>
                  <RiShoppingCartLine className="text-[1.125rem] mr-4 text-gray-700" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="nav__bottom">
          <div className="nav__bottom--menu">
            <ul className="nav__botttom--categories flex snap-x overflow-x-auto">
              {categories.map((category, index) => (
                <Link href={`/category/${category}`} key={index}>
                  <li
                    className="nav__bottom--category snap-center px-4 py-3 font-medium whitespace-nowrap"
                    key={index}
                  >
                    {category}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <SearchModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default MobileNav;
