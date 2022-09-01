import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { banners } from "../../assets/data/banner";
import { categories, Category } from "../../assets/data/categories";

type Props = {};

const HomeSection = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageCarousel = () => {
    if (currentIndex === banners.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      imageCarousel();
    }, 7000);

    return () => clearInterval(interval);
  });

  return (
    <section className="home__container background-bg md:mt-16">
      <div className="home__categories hidden md:block bg-white rounded-sm mx-2">
        <ul className="home__categories--lists pr-4 py-3 px-3">
          {categories.map(
            (category: Category, index) =>
              category.category !== "All" && (
                <Link href={`/category/${category}`} key={index}>
                  <li
                    className="home__categories--list px-4 py-[0.35rem] hover:underline cursor-pointer font-medium text-base"
                    key={category.id}
                  >
                    {category.category}
                  </li>
                </Link>
              )
          )}
        </ul>
      </div>
      <div className="home__banner carousel md:mx-2">
        {banners.map((banner, index) => (
          <div
            className="home__banner--image rounded"
            style={{
              transform: `translateX(${currentIndex * -100}%)`,
            }}
            title={banner.title}
            key={banner.id}
          >
            <Image
              src={banner.banner}
              alt={banner.title}
              layout="fill"
              priority={index === currentIndex}
              className=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;
