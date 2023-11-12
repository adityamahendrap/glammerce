import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating() {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <div className="w-full lg:w-[240px] lg:pt-0 flex flex-col gap-2">
      <div className="w-full pt-[98px] hidden lg:flex flex-col gap-2">
        <div
          // x-data="{ open: false }"
          className="shadow-sm text-[14px] border border-gray-200"
        >
          <div
            onClick={() => setToggleOpen(!toggleOpen)}
            className="w-full p-2 flex justify-between items-center cursor-pointer"
          >
            <p>Rating</p>
            <i
              className={
                "fas fa-chevron-down transition-all duration-100 " +
                (toggleOpen ? "rotate-180" : "")
              }
            ></i>
          </div>
          <div
            // x-show="open"
            className={
              "bg-white flex flex-col gap-2 px-2 py-3 " +
              (toggleOpen ? "" : "hidden")
            }
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gray-300 border-none focus:ring-transparent"
              />
              <label
                // for="safeAdress"
                className="block ml-2 text-sm text-gray-900"
              >
                <FaStar />5
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gray-300 border-none focus:ring-transparent"
              />
              <label
                // for="safeAdress"
                className="block ml-2 text-sm text-gray-900"
              >
                <FaStar />4
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gray-300 border-none focus:ring-transparent"
              />
              <label
                // for="safeAdress"
                className="block ml-2 text-sm text-gray-900"
              >
                <FaStar />3
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gray-300 border-none focus:ring-transparent"
              />
              <label
                // for="safeAdress"
                className="block ml-2 text-sm text-gray-900"
              >
                <FaStar />2
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gray-300 border-none focus:ring-transparent"
              />
              <label
                // for="safeAdress"
                className="block ml-2 text-sm text-gray-900"
              >
                <FaStar />1
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
