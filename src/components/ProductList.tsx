import { FaFilter } from "react-icons/fa";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import { IProduct } from "@/types";

interface IProductListProps {
  products: IProduct[];
}

export default function ProductList({ products }: IProductListProps) {
  return (
    <>
      <section className="lg:w-10/12">
        <div className="flex justify-between items-end">
          <h3>Produk kami</h3>
          <select
            name="sort"
            id="sort"
            className="border cursor-pointer border-gray-200 px-4 py-2"
          >
            <option value="terbaru">Terbaru</option>
            <option value="terpopuler">Terpopuler</option>
          </select>
        </div>

        <button
          // @click="$store.isFilterOpen = ! $store.isFilterOpen"
          className="secondary-btn gap-1 lg:gap-0 lg:hidden mt-2"
        >
          <FaFilter />
          Filter
        </button>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] mt-8">
          {products.map((p, index) => (
            <ProductCard product={p} key={index} />
          ))}
        </div>

        <Pagination />
      </section>
    </>
  );
}
