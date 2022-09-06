import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Review } from "../../types/reviewTypes";
import StarRating from "./StarRating";

type Props = {
  review: Review;
};

const ReviewComponent = (props: Props) => {
  return (
    <div className="product__user--review py-2 border-b border-b-gray-300">
      <StarRating rating={props.review.rating} />
      <div className="flex items-center font-semibold text-gray-500 text-sm mt-2">
        <p className="user__review--name italic mr-2">by Bright Isaac</p>
        {" - "}
        <span className="user__review--date ml-2">August 13, 2012</span>
      </div>
      <p className="user__review--message mt-1 font-semibold text-base text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nisi
        tenetur repellendus
      </p>
    </div>
  );
};

export default ReviewComponent;
