import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineFavoriteBorder, MdFavorite, MdStar } from "react-icons/md";
import { numberFormat } from "../../utils/numberFormatter";

type Props = {
  product: {
    id: number;
    image: string;
    title: string;
    price: number;
    discount: number;
    rating: number;
    isSaved: boolean;
  };
};

const ProductCard = (props: Props) => {
  const {
    product: { id, image, title, price, discount, rating, isSaved },
  } = props;
  const discountPrice = ((discount * price) / 100).toFixed(0);

  const savedProduct = () => {};
  return (
    <div>
      <div className="product__card rounded-lg bg-white max-w-[200px] overflow-hidden cursor-pointer hover:scale-95 transition ease-in-out delay-150 duration-200 min-w-[200px] min-h-[310px]">
        <div className="product__image h-[60%] w-full relative">
          <Link href="/product/[id]" as={`/product/${id}`}>
            <Image
              src={image}
              alt="product"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Link>
          <div className="product__discount absolute top-2 right-2 text-xs secondary-bg rounded px-1 font-medium text-white">
            {discount > 0 && `-${discount}%`}
          </div>
        </div>
        <div className="product__data p-2">
          <div className="product__data--top flex justify-between items-center mb-2">
            <Link href="/product/[id]" as={`/product/${id}`}>
              <h3 className="product__title text-sm font-normal substring">
                {title}
              </h3>
            </Link>
            <div className="product__saved mx-2">
              {isSaved && <MdFavorite className="text-xl secondary-color" />}
              {!isSaved && (
                <MdOutlineFavoriteBorder className="text-xl secondary-color" />
              )}
            </div>
          </div>
          <div className="product__data--bottom flex items-center justify-between">
            <div className="product__prices">
              <p className="product__price text-lg font-semibold">
                {`${
                  Number(discountPrice) > 0
                    ? numberFormat(price - Number(discountPrice))
                    : numberFormat(price)
                }`}
              </p>
              <p className="product__price text-xs line-through text-gray-500">
                {Number(discountPrice) > 0 && numberFormat(price)}
              </p>
            </div>
            <div className="product__rating flex items-center">
              <MdStar className="text-xl secondary-color mr-1" />{" "}
              <p className="font-semibold text-base">{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
