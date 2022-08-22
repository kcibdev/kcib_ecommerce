import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { banners } from "../../assets/data/banner";

type Props = {};

const HomeSection = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  return (
    <section className="flex w-full">
      <div className="home__categories w-1/3 bg-white h-[500px]"></div>
      <div className="home__banner w-8/12">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div
              className="home__banner--image w-full"
              title={banner.title}
              key={banner.id}
            >
              <Image
                src={banner.banner}
                alt={banner.title}
                width="100%"
                height="500px"
                className="w-[200px] h-[200px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeSection;
