import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineFavoriteBorder, MdFavorite, MdStar } from "react-icons/md";
import { numberFormat } from "../utils/numberFormatter";

type Props = {};

const SearchItem = (props: Props) => {
  return (
    <div className="search__products--item transition duration-200 basis-0 grow flex flex-col w-full min-w-[200px] md:max-w-[230px] rounded overflow-hidden hover:scale-[0.97]">
      <div className="search__item--image h-[170px] w-full relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          width="100%"
          height="100%"
          layout="responsive"
          className="cursor-pointer"
          objectFit="cover"
        />

        <div className="search__actions w-[30px] h-[30px] bg-white rounded-full shadow flex items-center justify-center absolute top-2 right-2 cursor-pointer">
          <MdOutlineFavoriteBorder className="text-2xl secondary-color" />
        </div>
      </div>
      <div className="search__item--details p-2">
        <Link href="/product/1">
          <h3 className="search__item--name substring hover:underline cursor-pointer">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, cumque. Quibusdam, delectus officiis ex
          </h3>
        </Link>
        <div className="search__item--price md:pb-1 pt-1">
          <p className="text-base font-semibold">
            {numberFormat(100000)}
            <span className="text-xs font-normal ml-1">NGN</span>
          </p>
          <div className="search__price--discount text-gray-500 md:flex items-center hidden">
            <p className="text-xs font-medium line-through mr-2">
              {numberFormat(10000)}
            </p>
            <p className="text-xs secondary-bg rounded px-1 font-medium text-white">{`-10%`}</p>
          </div>
        </div>
        <div className="search__item--rating flex items-center mb-2">
          <MdStar className="text-lg secondary-color mr-1" />
          <p className="search__rating--number text-xs font-medium">
            4.5 <span className="ml-1">(20 Reviews)</span>
          </p>
        </div>
        <div className="search__item--btns h-[37px] flex items-center justify-between gap-2">
          <button
            className="search__btn--cart h-full w-full rounded secondary-bg text-white text-center text-sm font-semibold shadow hover:scale-[0.97] transition duration-200"
            disabled
          >
            Add to cart
          </button>
          <button className="search__btn--checkout w-full h-full text-center light-primary-color text-sm px-3 font-semibold hover:scale-[0.97] transition duration-200 shadow">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
