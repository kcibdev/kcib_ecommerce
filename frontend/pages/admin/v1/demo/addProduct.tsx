import React, { useState } from "react";
import Image from "next/image";
import { PulseLoader } from "react-spinners";

import { AiFillCloseCircle } from "react-icons/ai";
import { categories, Category } from "../../../../assets/data/categories";
import { toast } from "react-toastify";
import { createProduct } from "../../../../services/product";
import { Product } from "../../../../types/productTypes";
import { NODE_CREATE_PRODUCT_URL } from "../../../../utils/constants";

type Props = {};

const AddProduct = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState<{
    title: string;
    description: string;
    price: string;
    discount: string;
    brand: string;
    image: File[];
    category: string;
    subCategory: string;
    quantity: string;
    sizes: string[];
    colors: string[];
    url: string;
  }>({
    title: "",
    description: "",
    price: "",
    discount: "",
    brand: "",
    image: [],
    category: "",
    subCategory: "",
    quantity: "",
    sizes: [],
    colors: [],
    url: NODE_CREATE_PRODUCT_URL,
  });

  const btnStyles =
    "login__btn w-full rounded flex items-center justify-center py-[0.6rem] shadow-md relative font-semibold text-white hover:scale-95 transition ease-in-out delay-150 duration-200";

  const onInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setProductData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (
      !productData.title ||
      !productData.description ||
      !productData.price ||
      !productData.category ||
      !productData.subCategory ||
      !productData.quantity
    ) {
      toast.error("Please fill all fields");
      return;
    }
    if (!productData.image.length) {
      toast.error("Please select product images");
      return;
    }

    setIsLoading(true);

    createProduct(setIsLoading, productData as Product);

    // setProductData({
    //   title: "",
    //   description: "",
    //   price: "",
    //   discount: "",
    //   brand: "",
    //   image: [],
    //   category: "",
    //   subCategory: "",
    //   quantity: "",
    //   sizes: [],
    //   colors: [],
    // });

    setIsLoading(false);
  };
  return (
    <div className="flex items-center justify-center my-10">
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
              className="addProduct__label cursor-text title absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
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
              className="addProduct__label cursor-text price absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
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
              className="addProduct__label cursor-text discount absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
            >
              Discount
            </label>
          </div>
          <div className="addProduct__form-group form__input relative w-full h-auto my-4">
            <label
              htmlFor="images"
              className="addProduct__label cursor-text discount"
            >
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
          <div className="addProduct__form-group form__input relative w-full h-[45px] my-4">
            <select
              name="category"
              id="category"
              className="addProduct__select w-full h-full outline-none"
              onChange={onInputChange}
            >
              <option className="text-gray-400 text-sm">Select Category</option>
              {categories.map((category: Category) => {
                if (category.category !== "All") {
                  return (
                    <option key={category.id} value={category.category}>
                      {category.category}
                    </option>
                  );
                }
              })}
            </select>
          </div>
          <div className="addProduct__form-group form__input relative w-full h-[45px] my-4">
            <select
              name="subCategory"
              id="subCategory"
              className="addProduct__select w-full h-full outline-none"
              onChange={onInputChange}
            >
              <option className="text-gray-400 text-sm">
                Select SubCategory
              </option>
              {categories.map((category: Category) => {
                if (category.category === productData.category) {
                  return category.subCategories.map((subCategory) => (
                    <option key={subCategory} value={subCategory}>
                      {subCategory}
                    </option>
                  ));
                }
              })}
            </select>
          </div>
          <div className="addProduct__form-group form__input relative w-full h-[45px] my-4">
            <input
              type="number"
              className="addProduct__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
              id="quantity"
              required
              name="quantity"
              value={productData.quantity}
              onChange={onInputChange}
            />
            <div className="underline"></div>
            <label
              htmlFor="quantity"
              className="addProduct__label cursor-text quantity absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
            >
              Quantity Available
            </label>
          </div>
          <div className="addProduct__form-group form__input relative w-full h-[45px] mt-4 mb-2">
            <input
              type="text"
              className="addProduct__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
              id="sizes"
              required
              name="sizes"
              value={productData.sizes.join(",")}
              onChange={(e) => {
                e.preventDefault();
                setProductData((prev) => ({
                  ...prev,
                  sizes: e.target.value.replaceAll(" ", "").split(","),
                }));
              }}
            />
            <div className="underline"></div>
            <label
              htmlFor="sizes"
              className="addProduct__label cursor-text size absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
            >
              Sizes (Seperated by Comma)
            </label>
          </div>
          <div className="sizes__badge flex flex-wrap gap-3 mb-2">
            {productData.sizes.map((size, index) => (
              <div
                key={index}
                className="size__badge--display flex items-center justify-center gap-1 px-2 py-1 rounded-full text-sm font-semibold text-gray-600 bg-gray-200"
              >
                <p>{size}</p>
                <button
                  className="delete__btn outline-none border-none"
                  onClick={(e) => {
                    e.preventDefault();
                    setProductData((prev) => ({
                      ...prev,
                      sizes: prev.sizes.filter((s, i) => i !== index),
                    }));
                  }}
                >
                  <AiFillCloseCircle className="text-xl text-gray-600" />
                </button>
              </div>
            ))}
          </div>
          <div className="addProduct__form-group form__input relative w-full h-[45px] mt-4 mb-2">
            <input
              type="text"
              className="addProduct__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
              id="colors"
              required
              name="colors"
              value={productData.colors.join(",")}
              onChange={(e) => {
                e.preventDefault();
                setProductData((prev) => ({
                  ...prev,
                  colors: e.target.value.replaceAll(" ", "").split(","),
                }));
              }}
            />
            <div className="underline"></div>
            <label
              htmlFor="colors"
              className="addProduct__label cursor-text size absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
            >
              Colors (Seperated by Comma)
            </label>
          </div>
          <div className="colors__badge flex flex-wrap gap-3 mb-2">
            {productData.colors.map((color, index) => (
              <div
                key={index}
                className="color__badge--display flex items-center justify-center gap-1 px-2 py-1 rounded-full text-sm font-semibold text-gray-600 bg-gray-200"
              >
                <p>{color}</p>
                <button
                  className="delete__btn outline-none border-none"
                  onClick={(e) => {
                    e.preventDefault();
                    setProductData((prev) => ({
                      ...prev,
                      colors: prev.colors.filter((s, i) => i !== index),
                    }));
                  }}
                >
                  <AiFillCloseCircle className="text-xl text-gray-600" />
                </button>
              </div>
            ))}
          </div>
          <div className="addProduct__form-group form__input relative h-auto w-full mt-5 mb-4">
            <textarea
              className="addProduct__input w-full h-full outline-none px-1"
              id="description"
              required
              name="description"
              value={productData.description}
              onChange={onInputChange}
              cols={0}
              rows={7}
            ></textarea>
            <div className="underline"></div>
            <label
              htmlFor="description"
              className="addProduct__label cursor-text description absolute top-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
            >
              Description
            </label>
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
