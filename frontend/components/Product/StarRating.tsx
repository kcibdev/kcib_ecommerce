import React, { Component } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type Props = {
  rating: number;
  textSize?: string;
};

class StarRating extends Component<Props> {
  state = {
    rating: this.props.rating,
    totalStars: 5,
    iconClass: this.props.textSize
      ? `text-[#f8b944] ${this.props.textSize}`
      : "text-[#f8b944] text-lg",
  };

  fullEmpty = () => {
    const { rating, totalStars } = this.state;
    return [...Array(totalStars)].map((el, i) =>
      i < rating ? (
        <FaStar className={this.state.iconClass} />
      ) : (
        <FaRegStar className={this.state.iconClass} />
      )
    );
  };

  fullHalfEmpty = () => {
    // implement the code for full, empty and half stars here.
    const { rating, totalStars } = this.state;
    return [...Array(totalStars)].map((el, i) =>
      // check if current star should be half
      i < rating && i + 1 > rating ? (
        <FaStarHalfAlt className={this.state.iconClass} />
      ) : // check if current star should be full
      i < rating ? (
        <FaStar className={this.state.iconClass} />
      ) : (
        // else, current star should be empty
        <FaRegStar className={this.state.iconClass} />
      )
    );
  };

  render() {
    const { rating } = this.state;
    return (
      <div className="product__rate flex items-center">
        {Number.isInteger(rating) ? this.fullEmpty() : this.fullHalfEmpty()}
      </div>
    );
  }
}
export default StarRating;
