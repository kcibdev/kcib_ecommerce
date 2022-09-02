import React, { useState } from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import ReactCountryFlag from "react-country-flag";
import { FaUserAlt } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import SearchModal from "./SearchModal";
import useAuthStore from "../../store/useAuthStore";
import { toast } from "react-toastify";

type Props = {};

const DesktopNav = (props: Props) => {
  const { isAuthenticated: isLoggedIn, logoutUser } = useAuthStore(
    (state) => state
  );
  const [mounted, setMounted] = useState(false);
  const [userCountry, setUserCountry] = useState("NG");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = (type: boolean) => {
    if (isLoggedIn) {
      setIsPopupOpen(type);
    }
  };
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <>
        <nav
          className="hidden md:flex justify-between items-center h-16 w-full shadow-md fixed z-40 top-0 left-0 px-7 bg-white"
          id="nav_id"
        >
          <div className="nav__menu--logo">
            <Link href="/">
              <h3 className="font-bold text-3xl primary-color cursor-pointer">
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
              <li className="nav__action account__icon relative">
                {!isLoggedIn ? (
                  <Link href="/auth/login">
                    <a>
                      <FaUserAlt className="text-xl mr-5 cursor-pointer" />
                    </a>
                  </Link>
                ) : (
                  <div
                    className="flex items-center mr-5 cursor-pointer"
                    onClick={() => openPopup(!isPopupOpen)}
                  >
                    <FaUserAlt className="text-xl" />
                    <IoIosArrowDown className="text-sm ml-2" />
                  </div>
                )}
                {isPopupOpen && (
                  <div className="nav__account--popup absolute top-10 left-0 bg-white rounded-sm shadow w-[130px]">
                    <ul className="nav__popup--lists">
                      <li className="nav__popup--item border-b-[0.3px] border-b-gray-300 px-3 py-2 cursor-pointer ">
                        <Link href="/customer/account">
                          <h3 className="text-sm">My Account</h3>
                        </Link>
                      </li>
                      <li className="nav__popup--item border-b-[0.3px] border-b-gray-300 px-3 py-2 cursor-pointer ">
                        <Link href="/customer/order">
                          <h3 className="text-sm">My Orders</h3>
                        </Link>
                      </li>
                      <li className="nav__popup--item border-b-[0.3px] border-b-gray-300 px-3 py-2 cursor-pointer ">
                        <Link href="/customer/wishlist">
                          <h3 className="text-sm">My Wishlist</h3>
                        </Link>
                      </li>
                      <li
                        className="nav__popup--item px-3 py-2 cursor-pointer text-center"
                        onClick={() => {
                          logoutUser();
                          toast.success("Logout Successful");
                          setIsPopupOpen(false);
                        }}
                      >
                        <p className="font-medium text-sm primary-color">
                          Logout
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <Link href="/cart">
                <li className="nav__action cart__icon relative cursor-pointer">
                  <span className="cart__counter absolute primary-bg rounded-full w-2 h-2 flex items-center justify-center p-[10px] text-white -top-2 -right-0">
                    0
                  </span>
                  <RiShoppingCartLine className="text-xl mr-5" />
                </li>
              </Link>
            </ul>
          </div>
        </nav>
        <SearchModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </>
    )
  );
};

export default DesktopNav;
