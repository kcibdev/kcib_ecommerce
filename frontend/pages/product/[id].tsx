import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdOutlineFavoriteBorder,
  MdFavorite,
  MdStar,
  MdStarHalf,
  MdStarOutline,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";

import { numberFormat } from "../../utils/numberFormatter";

type Props = {};

const Product = (props: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavourite, setIsFavourite] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [prevMainImage, setPrevMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const images = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://ae01.alicdn.com/kf/H47ae7ff5c98941c2ae35d879979fdf0bX/Hotwav-Cyber-9-Pro-4G-Rugged-Smartphone-Helio-P60-Octa-Core-6-3-8GB-128GB-7500mAh.jpg_Q90.jpg_.webp",
  ];
  const colors = ["red", "blue", "green", "yellow", "white"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const changeQuantity = (type: boolean) => {
    if (type) {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const setMainImageHandler = (
    image: string,
    isHover: boolean,
    type: string
  ) => {
    if (isHover) {
      setPrevMainImage(mainImage);
      if (type === "enter") {
        setMainImage(image);
      } else if (type === "leave") {
        if (prevMainImage !== "") {
          setMainImage(prevMainImage);
        }
      }
    } else {
      setMainImage(image);
      setPrevMainImage("");
    }
  };

  useEffect(() => {
    setMainImage(images[0]);
    setSelectedColor(colors[0]);
    setSelectedSize(sizes[0]);
  }, []);
  return (
    <div className="mt-5 md:mt-20">
      <div className="product__container m-4 md:m-10">
        <div className="product__content p-4 bg-white rounded shadow-md flex flex-col md:flex-row w-full gap-5">
          <div className="product__images w-full md:w-[40%]">
            <div className="product__image--main max-w-[450px] w-full min-w-[200px] overflow-hidden rounded-md">
              <Image
                src={mainImage}
                alt="product"
                layout="responsive"
                width="100%"
                height="100%"
                objectFit="contain"
              />
            </div>
            <div className="product__image--others flex flex-wrap gap-3 mt-3">
              {images.map((image, index) => (
                <div
                  className="product__image--other w-[40px] md:w-[60px] h-[40px] md:h-[60px] overflow-hidden rounded-md cursor-pointer hover:border hover:border-gray-300"
                  onMouseEnter={() => setMainImageHandler(image, true, "enter")}
                  onMouseLeave={() => setMainImageHandler(image, true, "leave")}
                  onClick={() => setMainImageHandler(image, false, "")}
                >
                  <Image
                    src={image}
                    alt="product"
                    layout="responsive"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="product__details w-full md:w-[60%] px-0 md:px-5">
            <div className="product__details--top mb-2 md:mb-1 flex items-center justify-between">
              <h1 className="product__details--title text-lg md:text-2xl font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis, cumque. Quibusdam, delectus officiis ex
              </h1>
              <span className="product__details--save mx-2 cursor-pointer">
                {isFavourite && (
                  <MdFavorite className="text-3xl secondary-color" />
                )}
                {!isFavourite && (
                  <MdOutlineFavoriteBorder className="text-3xl secondary-color" />
                )}
              </span>
            </div>
            <div className="product__details--brand mb-2 md:mb-1">
              <p className="text-base font-semibold">
                Brand:{" "}
                <Link href="">
                  <span className="primary-color font-medium hover:underline cursor-pointer">
                    Apple
                  </span>
                </Link>
              </p>
            </div>
            <div className="product__details--rating flex items-center mb-2 cursor-pointer">
              <div className="product__rating--stars flex items-center mr-2">
                <MdStar className="text-xl secondary-color" />
                <MdStar className="text-xl secondary-color" />
                <MdStar className="text-xl secondary-color" />
                <MdStarHalf className="text-xl secondary-color" />
                <MdStarOutline className="text-xl secondary-color" />
              </div>
              <div className="product__rating--reviews text-sm md:text-base font-normal light-primary-color hover:underline">
                <p>(23 ratings | 10 Reviews)</p>
              </div>
            </div>
            <hr />
            <div className="product__details--price pb-2 pt-2">
              <p className="text-[1.5rem] font-semibold mb-1">
                {numberFormat(100000)}
                <span className="text-xs font-normal ml-1">NGN</span>
              </p>
              <div className="product__price--discount text-gray-500 flex items-center">
                <p className="text-sm font-medium line-through mr-2">
                  {numberFormat(10000)}
                </p>
                <p className="text-xs secondary-bg rounded px-1 font-medium text-white">{`-10%`}</p>
              </div>
            </div>
            <hr />
            <div className="product__details--misc">
              <div className="product__misc--availability flex items-center my-4">
                <p className="text-base font-medium">
                  Availability:{" "}
                  <span className="ml-3 primary-color">In Stock</span>
                </p>
              </div>
              <div className="product__misc--quantity flex items-center mb-4 mt-2">
                <p className="text-base font-medium mr-3">Quantity:</p>
                <div className="product__misc--quantity--input flex items-center">
                  <button
                    className="product__quantity--input minus mr-2"
                    onClick={() => changeQuantity(false)}
                  >
                    <MdRemoveCircleOutline className="text-2xl secondary-color" />
                  </button>
                  <input
                    type="number"
                    className="product__quantity--input number max-w-[80px] border-none outline-none bg-white text-center"
                    value={quantity}
                    disabled
                  />
                  <button
                    className="product__quantity--input plus ml-2"
                    onClick={() => changeQuantity(true)}
                  >
                    <MdAddCircleOutline className="text-2xl secondary-color" />
                  </button>
                </div>
              </div>
              {colors.length && (
                <div className="product__misc--colors flex items-center mb-4">
                  <p className="text-base font-medium mr-3">Colors:</p>
                  <div className="product__color--list flex items-center flex-wrap">
                    {colors.map((color, index) => (
                      <div
                        className="product__color w-7 h-7 rounded-full border border-gray-200 cursor-pointer hover:border-gray-500 mr-2 md:mr-4"
                        style={{
                          backgroundColor: color,
                        }}
                        onClick={() => setSelectedColor(color)}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
              {sizes && (
                <div className="product__misc--sizes flex items-center">
                  <p className="text-base font-medium mr-3">Size:</p>
                  <div className="product__size--list flex items-center flex-wrap">
                    {sizes.map((size, index) => (
                      <div
                        className="product__size text-sm md:text-base font-semibold px-3 py-1 rounded border border-gray-200 cursor-pointer hover:border-gray-500 mr-2 md:mr-4 "
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="product__btns mt-5 flex items-center">
              <button className="product__btn--cart mr-3 md:mr-4 hover:scale-95 transition ease-in-out delay-150 duration-200 px-5 py-3 md:py-2 border border-[#f8b944] rounded flex items-center shadow-sm">
                <FaShoppingCart className="mr-2 md:mr-4 text-lg md:text-xl secondary-color" />
                <span className="text-sm md:text-base font-semibold secondary-color">
                  Add To Cart
                </span>
              </button>
              <button className="product__btn--cart shadow-md hover:scale-95 transition ease-in-out delay-150 duration-200 px-5 py-3 md:py-2 bg-[#f8b944] rounded flex items-center">
                <BsBagCheckFill className="mr-2 md:mr-4 text-lg md:text-xl text-white" />
                <span className="text-sm md:text-base font-semibold text-white">
                  Checkout
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
