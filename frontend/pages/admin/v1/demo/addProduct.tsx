import React, { useState } from "react";
import Image from "next/image";
import { PulseLoader } from "react-spinners";

import { AiFillCloseCircle } from "react-icons/ai";

type Props = {};

const AddProduct = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState<{
    title: string;
    description: string;
    price: string;
    discount: string;
    image: File[];
    category: string;
    subCategory: string;
    quantity: string;
    sizes: string[];
    colors: string[];
  }>({
    title: "",
    description: "",
    price: "",
    discount: "",
    image: [],
    category: "",
    subCategory: "",
    quantity: "",
    sizes: [],
    colors: [],
  });

  const btnStyles =
    "login__btn w-full rounded flex items-center justify-center py-[0.6rem] shadow-md relative font-semibold text-white hover:scale-95 transition ease-in-out delay-150 duration-200";

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log(productData);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="addProduct__container bg-white p-4 shadow-md rounded-md w-full max-w-[400px]">
        <div className="login__header text-center mt-3">
          <h1 className="text-2xl font-bold mb-2">Add Product</h1>
        </div>
        <form className="addProduct__form">
          <div className="addProduct__form-group form__input relative w-full h-[45px] my-4">
            <input
              type="text"
              className="addProduct__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
              id="title"
              required
              name="title"
              value={productData.title}
              onChange={onInputChange}
            />
            <div className="underline"></div>
            <label
              htmlFor="title"
              className="addProduct__label title absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
            >
              Title
            </label>
          </div>
          <div className="addProduct__form-group form__input relative w-full h-[45px] my-4">
            <input
              type="number"
              className="addProduct__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
              id="price"
              required
              name="price"
              value={productData.price}
              onChange={onInputChange}
            />
            <div className="underline"></div>
            <label
              htmlFor="price"
              className="addProduct__label price absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
            >
              Price
            </label>
          </div>
          <div className="addProduct__form-group form__input relative w-full h-[45px] my-4">
            <input
              type="number"
              className="addProduct__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
              id="discount"
              required
              name="discount"
              value={productData.discount}
              onChange={onInputChange}
            />
            <div className="underline"></div>
            <label
              htmlFor="discount"
              className="addProduct__label discount absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
            >
              Discount
            </label>
          </div>
          <div className="addProduct__form-group form__input relative w-full h-auto my-4">
            <label htmlFor="images" className="addProduct__label discount">
              <input
                className="hidden"
                id="images"
                name="images"
                type="file"
                multiple
                onChange={(event) => {
                  Array.from(event.target.files!).forEach((file) => {
                    setProductData((prev) => ({
                      ...prev,
                      image: [...prev.image, file],
                    }));
                  });
                }}
              />
              <div className="addProduct__images--design flex items-center cursor-pointer">
                <div className="images__design--header text-center primary-bg px-3 py-2 rounded-tl rounded-bl ">
                  <p className="text-sm font-semibold text-white">
                    Choose Images
                  </p>
                </div>
                <div className="images__design--body px-3 py-2 bg-gray-200 rounded-tr rounded-br w-full flex-1">
                  <p className="text-sm">
                    {productData.image.length > 1
                      ? `${productData.image.length} Image Files`
                      : !productData.image.length
                      ? "No Files Choosen"
                      : productData.image[0].name}
                  </p>
                </div>
              </div>
            </label>
            <div className="addProduct__images--display flex overflow-x-auto items-center gap-2 mt-3 relative">
              {productData.image.length > 1 &&
                productData.image.map((image, index) => (
                  <div
                    key={index}
                    className="addProduct__image--display h-[60px] w-[65px] rounded overflow-hidden relative border-b-2 border-gray-200"
                  >
                    <Image
                      src={URL.createObjectURL(image)}
                      alt=""
                      height="100%"
                      width="100%"
                      layout="responsive"
                      objectFit="cover"
                    />
                    <div className="image__display--delete">
                      <button
                        className="delete__btn absolute top-1 right-1 outline-none border-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setProductData((prev) => ({
                            ...prev,
                            image: prev.image.filter((img, i) => i !== index),
                          }));
                        }}
                      >
                        <AiFillCloseCircle className="text-xl text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="addProduct__form-group form__input flex justify-center flex-col">
            {!isLoading && (
              <button
                type="submit"
                className={`login__btn--email primary-bg ${btnStyles}`}
                onClick={onSubmit}
              >
                Add
              </button>
            )}
            <PulseLoader
              size={15}
              className="mx-auto my-3"
              color={"#192a56"}
              loading={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
