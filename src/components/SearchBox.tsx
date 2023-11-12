import { FaCamera, FaSearch, FaTimes } from "react-icons/fa";

interface ISearchBoxProps {
  search: boolean;
  onToggleSearch: () => void;
}

export default function SearchBox({ search, onToggleSearch }: ISearchBoxProps) {
  return (
    <section
      className={
        "fixed left-0 w-full z-[4] px-4 lg:px-[100px] transition-all duration-300 " +
        (search ? " top-[80px]" : " opacity-0 -top-[200px]")
      }
    >
      <div className="relative bg-white flex items-center justify-center px-4 lg:px-0 py-[25px] lg:py-[40px] shadow-md border border-gray-200">
        <div className="absolute top-5 right-5 text-xl">
          <button onClick={onToggleSearch}>
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-3 mt-8">
            <input
              type="text"
              placeholder="Cari produk favorit Anda"
              className="border border-second placeholder-gray-500 text-second py-2 px-2 lg:px-4 lg:py-2 w-[200px] lg:w-[400px] bg-transparent text-xs lg:text-base"
            />
            <button className="primary-btn w-max">
              <FaSearch />
            </button>
          </div>

          <p className="text-xs lg:text-[14px] text-center">
            Atau unggah foto produk yang ingin Anda cari.
          </p>
          <button className="primary-btn w-max">
            <FaCamera />
            unggah foto
          </button>
        </div>
      </div>
    </section>
  );
}
