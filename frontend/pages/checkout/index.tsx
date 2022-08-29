import React from "react";
import Link from "next/link";
import CheckoutItem from "../../components/CheckoutItem";
import { numberFormat } from "../../utils/numberFormatter";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div>
      <div className="checkout__header w-full bg-white shadow-md px-5 py-3">
        <div className="checkout__logo">
          <Link href="/">
            <h3 className="font-bold text-3xl primary-color cursor-pointer">
              KCIB<span className="secondary-color">ECOM</span>
            </h3>
          </Link>
        </div>
      </div>
      <div className="checkout__container px-3 md:px-20 my-5 flex w-full flex-col md:flex-row">
        <div className="checkout__content mx-2 md:mx-5">
          <div className="checkout__address bg-white rounded px-3 py-2 shadow-md">
            <div className="checkout__address--header flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-700 py-2">
                Shipping Address
              </h3>
              <div className="checkout__address--change">
                <button className="change__address font-bold primary-color text-sm uppercase">
                  Change
                </button>
              </div>
            </div>
            <hr />
            <div className="address__info py-3">
              <h3 className="address__name font-semibold text-base uppercase">
                Bright Isaac
              </h3>
              <p className="address__mobile text-sm text-gray-600 font-medium">
                +2347016505681
              </p>
              <p className="address__street text-sm text-gray-500">
                1, Ogunlana Drive, Surulere, Lagos, Nigeria
              </p>
            </div>
            <div className="no__address"></div>
          </div>
          <div className="checkout__payment"></div>
          <h3 className="text-xl font-semibold text-gray-700 mt-5">Items</h3>
          <div className="checkout__items w-full">
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
          </div>
        </div>
        <div className="mx-2 mt-5 md:mt-0">
          <div className="checkout__summary bg-white rounded shadow-md min-w-[280px] w-full max-w-[350px] p-3">
            <div className="cart__summary--header pb-2">
              <h3 className="cart__summary--title text-base font-semibold uppercase">
                Summary (3 Items)
              </h3>
            </div>
            <hr />
            <div className="cart__subtotal flex items-center justify-between my-3">
              <p className="">Subtotal:</p>
              <p className="">{numberFormat(10000)}</p>
            </div>
            <div className="cart__shippingFee flex items-center justify-between my-2">
              <p className="">Delivery Fee:</p>
              <p className="">{numberFormat(1000)}</p>
            </div>
            <div className="cart__shippingFee flex items-center justify-between my-2">
              <p className="">Shipping Fee:</p>
              <p className="">{numberFormat(0)}</p>
            </div>
            <div className="cart__total flex items-center justify-between my-2">
              <p className="">Total:</p>
              <p className="">{numberFormat(11000)}</p>
            </div>
            <hr />
            <Link href="/checkout">
              <div className="cart__summary--btn my-3 w-full rounded py-[0.5rem] shadow-md primary-bg text-center font-semibold text-white hover:scale-95 transition ease-in-out delay-150 duration-200">
                <button className="btn btn-primary">Place Order</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
