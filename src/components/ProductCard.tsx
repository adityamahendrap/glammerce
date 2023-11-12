import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { IProduct } from "@/types";

interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  function getRupiahFormat(num: number) {
    return "Rp" + new Intl.NumberFormat("id-ID").format(num);
  }

  return (
    <Link to={`/products/${product.id}/${product.slug}`}>
      <div className="w-full h-full border border-gray-200 rounded-lg shadow-md ">
        <div className="overflow-hidden relative">
          <div className="absolute top-0 left-0 p-3 w-full flex items-start justify-between">
            <div
              className={
                "block bg-highlight py-1 px-3 h-max text-white text-xs " +
                (product.Diskon ? "" : "opacity-0")
              }
            >
              <p>{product.Diskon ? product.Diskon : ""}</p>
            </div>
            <div className="flex flex-col gap-3 items-end">
              <span className="bg-white bg-opacity-80 cursor-pointer p-2 flex items-center w-max rounded-full">
                <FaHeart />
              </span>
              <span className="bg-white bg-opacity-80 cursor-pointer p-2 flex justify-center items-center w-max rounded-full">
                <FaShoppingCart />
              </span>
            </div>
          </div>
          <img
            src={"/image/products/" + product.NamaProduk + ".png"}
            width={240}
            height={240}
            alt="product"
            className="h-[180px] lg:h-[240px] object-cover w-full"
          />
        </div>
        <div className="p-[10px] flex flex-col gap-[5px]">
          <p>{product.name}</p>
          <div>
            <p className="font-bold">
              {product.HargaSetelahDiskon
                ? product.HargaSetelahDiskon
                : getRupiahFormat(product.price)}
            </p>
            <p className="line-through text-xs lg:text-[14px]">
              {product.HargaSetelahDiskon ? getRupiahFormat(product.price) : ""}
            </p>
          </div>
          <div className="flex items-end lg:items-center gap-1">
            <FaStar />
            <p className="text-xs lg:text-[14px]">
              {product.rating + " | Terjual " + product.total_sold}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
