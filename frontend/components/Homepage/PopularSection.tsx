import React from "react";
import ProductCard from "./ProductCard";

type Props = {};

const PopularSection = (props: Props) => {
  return (
    <div>
      <div className="featured__content p-2 flex flex-col justify-start">
        <h3 className="featured__header text-xl font-bold py-2">
          Featured Products
        </h3>
        <div className="featured__products flex flex-wrap gap-2">
          <ProductCard
            product={{
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
              image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
              title: "Iphone 13 pro max 12GB Ram 128GB Rom",
              price: 10000,
              discount: 0,
              rating: 2.5,
              isSaved: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
