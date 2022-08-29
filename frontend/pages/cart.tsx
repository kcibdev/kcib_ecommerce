import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { BsFillShieldLockFill } from "react-icons/bs";

import Visa from "../assets/icons/visa.png";
import MasterCard from "../assets/icons/mastercard.png";
import CartProduct from "../components/CartProduct";
import { numberFormat } from "../utils/numberFormatter";
import Link from "next/link";
import { cartProducts } from "../assets/data/products";

type Props = {};

const Cart = (props: Props) => {
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [productPrice, setProductPrice] = useState([]);

  useEffect(() => {
    cartProducts.forEach((product) => {
      setSubTotal((prev) => prev + Number(product.price) * 414);
      console.log("top price");
      console.log(numberFormat(Number(product.price) * 414));
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Cart Page - KCIBECOM</title>
      </Head>
      <div className="cart__container mt-5 md:mt-20 mx-0 md:mx-10 flex flex-col md:flex-row">
        <div className="cart__contents mx-2 md:mx-5">
          <div className="cart__header bg-white rounded my-3 shadow-md py-3 px-5 flex items-center justify-between">
            <h1 className="text-2xl font-semibold ">Shopping Cart</h1>
            <h3 className="cart__header--number text-lg font-medium text-gray-600">
              <span>2</span> items
            </h3>
          </div>
          <div className="cart__items w-full">
            <CartProduct product="" />
            <CartProduct product="" />
            <CartProduct product="" />
          </div>
        </div>
        <div className="cart__info mx-2 mt-3">
          <div className="cart__summary bg-white p-3 rounded shadow-md min-w-[250px] w-full max-w-[350px]">
            <div className="cart__summary--header pb-2">
              <h3 className="cart__summary--title text-xl font-medium">
                Summary
              </h3>
            </div>
            <hr />
            <div className="cart__subtotal flex items-center justify-between my-3">
              <p className="">Subtotal:</p>
              <p className="">{numberFormat(10000)}</p>
            </div>
            <div className="cart__shippingFee flex items-center justify-between my-2">
              <p className="">Shipping Fee:</p>
              <p className="">{numberFormat(0)}</p>
            </div>
            <div className="cart__total flex items-center justify-between my-2">
              <p className="">Total:</p>
              <p className="">{numberFormat(10000)}</p>
            </div>
            <hr />
            <Link href="/checkout">
              <div className="cart__summary--btn my-3 w-full rounded py-[0.5rem] shadow-md primary-bg text-center font-semibold text-white hover:scale-95 transition ease-in-out delay-150 duration-200">
                <button className="btn btn-primary">Checkout (10,000)</button>
              </div>
            </Link>
            <div className="summary__info">
              <div className="summary__secured flex items-center mt-5 mb-4">
                <BsFillShieldLockFill className="text-lg text-[green] mr-2" />{" "}
                <p className="text-sm ">Secured Transaction</p>
              </div>

              <div className="summary__returns mb-4">
                <h3 className="text-lg font-bold">Returns</h3>
                <p className="text-sm text-gray-600">
                  Returns are accepted if the item is not as described or if the
                  item is defective and within 7 days of purchase.{" "}
                </p>
              </div>
              <div className="summary__payment">
                <h3 className="text-lg font-bold">Payment Method</h3>
                <div className="payment__methods flex gap-5">
                  <Image
                    src={Visa}
                    alt="Visa Payment Method"
                    width={45}
                    height={35}
                  />
                  <Image
                    src={MasterCard}
                    alt="MasterCard Payment Method"
                    width={45}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
