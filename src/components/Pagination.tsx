import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const arr = [1, 1, 1];

interface IPaginationProps {
  pageLength: number;
  activePage: number;
}

export default function Pagination() {
  const [value, setValue] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get("page");

  useEffect(() => {
    setValue(Number(page) ?? 1);
  }, [page]);

  return (
    <div className="flex justify-center mt-8">
      <ul className="flex items-center">
        <li className="px-[6px]">
          <Link
            to={`/products?page=${value - 1}`}
            className={
              value === 1
                ? "w-9 h-9 flex items-center justify-center border border-gray-200 text-base cursor-not-allowed opacity-50"
                : "w-9 h-9 flex items-center justify-center border border-gray-200 text-base hover:bg-brand hover:bg-opacity-10 hover:border-brand"
            }
          >
            <span>
              <FaChevronLeft />
            </span>
          </Link>
        </li>
        {arr.map((a, index) => (
          <li key={index} className="px-[6px]">
            <Link
              to={`/products?page=${index + 1}`}
              className={
                index + 1 === value
                  ? "w-9 h-9 flex items-center justify-center border text-base bg-brand border-brand"
                  : "w-9 h-9 flex items-center justify-center border border-gray-200 text-base hover:bg-brand hover:bg-opacity-10 hover:border-brand"
              }
            >
              {index + 1}
            </Link>
          </li>
        ))}
        <li className="px-[6px]">
          <Link
            to={`/products?page=${value + 1}`}
            className={
              value === arr.length
                ? "w-9 h-9 flex items-center justify-center border border-gray-200 text-base cursor-not-allowed opacity-50"
                : "w-9 h-9 flex items-center justify-center border border-gray-200 text-base hover:bg-brand hover:bg-opacity-10 hover:border-brand"
            }
          >
            <span>
              <FaChevronRight />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
