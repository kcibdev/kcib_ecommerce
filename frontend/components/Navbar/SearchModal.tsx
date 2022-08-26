import React, { useState } from "react";
import { AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import Link from "next/link";

if (typeof window !== "undefined") {
  Modal.setAppElement(document.getElementById("root")!);
}

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchModal = (props: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const { isModalOpen, setIsModalOpen } = props;

  const onChangeValue = (
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    const data = event?.target?.value;
    setSearchValue(data!);
  };

  const clearValue = () => {
    setSearchValue("");
  };
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onAfterClose={() => {}}
        contentLabel="Search Modal"
        ariaHideApp={false}
        className="top-0 left-0 right-0 bottom-0 fixed z-50 md:top-[50%] md:left-[50%] md:right-auto md:bottom-auto md:mr-[-50%] md:-translate-x-[50%] md:-translate-y-[50%] md:border-none md:max-w-[500px] md:w-full md:bg-none"
      >
        <div className="flex flex-col items-center justify-start z-50 w-full md:rounded-xl shadow-lg bg-white border overflow-hidden h-screen md:min-h-[350px] md:max-h-[370px]">
          <div className="searchInput flex items-center w-full px-2 py-1 shadow-lg">
            <AiOutlineArrowLeft
              onClick={() => setIsModalOpen(false)}
              className="text-lg mx-3 cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search"
              autoFocus
              value={searchValue}
              className="w-[90%] p-3 border-none outline-none font-medium text-sm"
              onChange={onChangeValue}
            />
            {searchValue && (
              <AiFillCloseCircle
                onClick={clearValue}
                className="w-[10%] text-lg cursor-pointer mx-2"
              />
            )}
          </div>
          <div className="modalContent py-4 px-4">
            <ul className="modal__search--lists">
              <Link href="/search/labore">
                <li className="modal__search--item text-sm font-medium text-gray-600 py-2 border-b-[0.2px] border-b-gray-300">
                  labore non anim Lorem cupidatat qui. Incididunt labore eu
                  dolore pariatur fugiat. Ad
                </li>
              </Link>
              <Link href="/search/labore">
                <li className="modal__search--item text-sm font-medium text-gray-600 py-2 border-b-[0.2px] border-b-gray-300">
                  labore non anim Lorem cupidatat qui.
                </li>
              </Link>
              <Link href="/search/labore">
                <li className="modal__search--item text-sm font-medium text-gray-600 py-2 border-b-[0.2px] border-b-gray-300">
                  Lorem cupidatat qui. Incididunt labore eu dolore pariatur
                  fugiat. Ad
                </li>
              </Link>
              <Link href="/search/labore">
                <li className="modal__search--item text-sm font-medium text-gray-600 py-2 border-b-[0.2px] border-b-gray-300">
                  Incididunt la
                </li>
              </Link>
              <Link href="/search/labore">
                <li className="modal__search--item text-sm font-medium text-gray-600 py-2 border-b-[0.2px] border-b-gray-300">
                  labore non anim Lorem cupidatat qui. Incididunt labore eu
                  dolore pariatur fugiat. Ad
                </li>
              </Link>
              <Link href="/search/labore">
                <li className="modal__search--item text-sm font-medium text-gray-600 py-2 border-b-[0.2px] border-b-gray-300">
                  labore non anim Lorem cupidatat qui. Incididunt labore eu
                  dolore pariatur fugiat. Ad
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchModal;
