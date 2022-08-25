import React from "react";
import ProductCard from "./ProductCard";

type Props = {};

const FeaturedSection = (props: Props) => {
  return (
    <div>
      <div className="popular__content p-2 flex flex-col justify-start my-4 md:mx-4">
        <h3 className="popular__header text-xl font-bold py-2">
          Featured Products
        </h3>
        <div className="popular__products flex overflow-x-auto overflow-hidden md:gap-4 gap-3">
          <ProductCard
            product={{
              id: 3,
              image:
                "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
              title: "Red T Shirt for Unisex Large and Smaller Sized",
              price: 7000,
              discount: 5,
              rating: 2,
              isSaved: false,
            }}
          />
          <ProductCard
            product={{
              id: 2,
              image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
              title: "Iphone 13 pro max 12GB Ram 128GB Rom",
              price: 10000,
              discount: 0,
              rating: 2.5,
              isSaved: true,
            }}
          />
          <ProductCard
            product={{
              id: 1,
              image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
              title: "Iphone 13 pro max 12GB Ram 128GB Rom",
              price: 120000,
              discount: 22,
              rating: 4.5,
              isSaved: false,
            }}
          />
          <ProductCard
            product={{
              id: 3,
              image:
                "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
              title: "Red T Shirt for Unisex Large and Smaller Sized",
              price: 499000,
              discount: 19,
              rating: 3.5,
              isSaved: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
