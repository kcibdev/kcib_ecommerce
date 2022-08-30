import React from "react";
import Link from "next/link";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className="footer__top flex flex-col md:flex-row items-start md:items-center justify-between px-10 py-8 light-primary-bg mt-10">
        <div className="footer__logo mb-10 md:mb-0">
          <Link href="/">
            <h3 className="font-bold text-3xl primary-color cursor-pointer">
              KCIB<span className="secondary-color">ECOM</span>
            </h3>
          </Link>
        </div>
        <div className="footer__subscribe mb-10">
          <h3 className="font-bold text-xl mb-1">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm font-semibold mb-2 text-gray-700">
            Get the latest updates on new products and upcoming sales
          </p>
          <div className="footer__subscribe--input flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Enter your email address"
              className="outline-none border-none px-3 py-2 rounded md:rounded-l mb-2 md:mb-0 rounded-r-none"
            />
            <button className="primary-btn font-bold px-3 py-2 secondary-bg text-white rounded rounded-l-none md:rounded-r">
              Subscribe
            </button>
          </div>
        </div>
        <div className="footer__social">
          <h3 className="footer__social--header font-bold text-xl mb-2">
            Connect with us
          </h3>
          <div className="footer__social--icons flex items-center justify-between">
            <Link href="https://www.twitter.com" target="_blank">
              <a>
                <IoLogoTwitter className="footer__social--icon text-3xl cursor-pointer hover:scale-95 transition ease-in-out delay-150 duration-200" />
              </a>
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <a>
                <IoLogoFacebook className="footer__social--icon text-3xl cursor-pointer hover:scale-95 transition ease-in-out delay-150 duration-200" />
              </a>
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <a>
                <IoLogoInstagram className="footer__social--icon text-3xl cursor-pointer hover:scale-95 transition ease-in-out delay-150 duration-200" />
              </a>
            </Link>
            <Link href="https://www.whatsapp.com" target="_blank">
              <a>
                <IoLogoWhatsapp className="footer__social--icon text-3xl cursor-pointer hover:scale-95 transition ease-in-out delay-150 duration-200" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom"></div>
    </div>
  );
};

export default Footer;
