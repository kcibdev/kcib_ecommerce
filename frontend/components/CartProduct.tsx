import Image from "next/image";
import React, { useState } from "react";
import {
  MdAddCircleOutline,
  MdOutlineFavoriteBorder,
  MdOutlineStore,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { TbTrashX } from "react-icons/tb";
import { numberFormat } from "../utils/numberFormatter";

type Props = {};

const CartProduct = (props: Props) => {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (type: boolean) => {
    if (type) {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };
  return (
    <div className="cart__item flex my-1 bg-white rounded shadow-md p-2 md:p-3 items-center gap-2 md:gap-5 w-full">
      <div className="cart__item--image w-[150px] min-w-[85px] rounded overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </div>
      <div className="cart__item--details px-3">
        <div className="cart__item--header flex flex-col md:flex-row items-start justify-between mb-2">
          <h3 className="cart__item--name font-medium text-base substring">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, cumque. Quibusdam, delectus officiis ex
          </h3>
          <div className="cart__item--btn flex md:mx-2 items-center justify-between">
            <div className="cart__btn--save cursor-pointer">
              <MdOutlineFavoriteBorder className="text-2xl secondary-color mr-3" />
            </div>
            <div className="cart__btn--delete cursor-pointer">
              <TbTrashX className="text-2xl text-red-500" />
            </div>
          </div>
        </div>
        <div className="cart__item--seller flex items-center">
          <MdOutlineStore className="text-xl text-gray-500 mr-2" />{" "}
          <p className="text-base font-medium primary-color">Bright Store</p>
        </div>
        <div className="cart__item--pq flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
          <div className="cart__item--price md:pb-2 pt-2">
            <p className="text-[1.3rem] font-semibold">
              {numberFormat(100000)}
              <span className="text-xs font-normal ml-1">NGN</span>
            </p>
            <div className="cart__price--discount text-gray-500 md:flex items-center hidden">
              <p className="text-sm font-medium line-through mr-2">
                {numberFormat(10000)}
              </p>
              <p className="text-xs secondary-bg rounded px-1 font-medium text-white">{`-10%`}</p>
            </div>
          </div>
          <div className="cart__item--quantity flex items-center mb-4 mt-2">
            <p className="text-base font-medium mr-2">Quantity:</p>
            <div className="flex items-center">
              <button
                className="cart__quantity--input minus mr-2"
                onClick={() => changeQuantity(false)}
              >
                <MdRemoveCircleOutline className="text-2xl secondary-color" />
              </button>
              <input
                type="number"
                className="cart__quantity--input number max-w-[50px] border-none outline-none bg-white text-center"
                value={quantity}
                disabled
              />
              <button
                className="cart__quantity--input plus ml-2"
                onClick={() => changeQuantity(true)}
              >
                <MdAddCircleOutline className="text-2xl secondary-color" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
