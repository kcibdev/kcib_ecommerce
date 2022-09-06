import React, { Component } from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  rating: number;
  percentage: number;
  totalRating: number;
};

export default class RatingProgressBar extends Component<Props> {
  rating = this.props.rating;
  percent = this.props.percentage;
  totalRating = this.props.totalRating;

  render() {
    return (
      <li className="flex my-1 items-center justify-start">
        <span className="font-semibold text-base pt-[2px] mr-[3px]">
          {this.rating}
        </span>{" "}
        <FaStar className="text-[#f8b944] text-base" />
        <div className="rating__progress mx-1 w-[200px] overflow-hidden bg-gray-300 rounded-sm relative h-[10px]">
          <div
            className={`rating__progress--bar absolute w-[${this.percent}%] bg-[#f8b944] left-0 top-0 h-full`}
          ></div>
        </div>
        <span className="text-base font-semibold text-gray-500">
          ({this.totalRating})
        </span>
      </li>
    );
  }
}
