import { FaRegStar, FaStar } from "react-icons/fa";

export default function ReviewCard() {
  return (
    <div className="p-[15px] border border-gray-200 flex flex-col lg:flex-row gap-5 lg:gap-10 items-start">
      <div className="flex flex-col gap-3 lg:gap-4">
        <p className="text-xs lg:text-[14px] font-semibold">David</p>
        <div className="flex gap-2 text-brand text-xs lg:text-base">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
        <p className="text-xs lg:text-[14px]">16/05/2023</p>
      </div>
      <div>
        <p>
          Saya suka desainnya, tetapi sayangnya ukurannya sedikit besar bagi
          saya. Bagaimanapun, kualitasnya sangat baik.
        </p>
      </div>
    </div>
  );
}
