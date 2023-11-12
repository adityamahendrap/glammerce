import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import Rating from "../components/Rating";
import ReviewCard from "../components/ReviewCard";
import Pagination from "../components/Pagination";
import { FaFilter, FaHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { IProduct, IProductCombination } from "../types";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

export default function Product() {
  return (
    <Layout>
      <main>
        <ProductDetail />
        <Reviews />
        <ProductsRecommendation />
      </main>
    </Layout>
  );
}

function Loading() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Skeleton height={30} className="mb-3" width={300} />
        <Skeleton height={20} className="mb-3" width={180} />
        <Skeleton height={30} className="mb-3" width={250} />
      </div>

      <div>
        <Skeleton className="mb-3" width={100} />
        <div className="flex gap-2">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} height={50} className="mb-3" width={50} />
            ))}
        </div>
      </div>

      <div>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <p key={index}>
              <Skeleton className="mb-3" />
            </p>
          ))}
      </div>
    </div>
  );
}

function ProductDetail() {
  const { id, slug } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [combination, setCombination] = useState([]);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct(id as string, slug as string);
  }, []);

  useEffect(() => {
    setCombination(getInitialCombination(product as IProduct) as never[]);
  }, [product]);

  useEffect(() => {
    setStock(getCombinationStock());
  }, [combination]);

  async function fetchProduct(id: string, slug: string) {
    try {
      const response = await axios.get(`/products/${id}/${slug}`);

      setProduct(response.data.payload);
    } catch (error: any) {
      console.log(error.response.data.message || error);
      if (error.response.status === 404) {
        navigate("/404");
      }
    }
  }

  function getInitialCombination(product: IProduct) {
    const combination: string[] = [];
    product?.product_attributes.forEach((attr) => {
      if (attr.product_attribute_values.length > 0) {
        combination.push(attr.product_attribute_values[0].id);
      }
    });
    return combination;
  }

  function changeCombination(attrIdx: number, valueId: number) {
    const newCombination: number[] = [...combination];
    newCombination[attrIdx] = valueId;
    setCombination(newCombination as never[]);
  }

  function getCombinationStock() {
    let stock = 0;
    product?.product_combinations.forEach((c: IProductCombination) => {
      if (c.key === combination.toString().replaceAll(",", " ")) {
        stock = c.stock;
      }
    });
    return stock;
  }

  async function addToCart() {
    try {
      const response = await axios.post("/carts", {
        product_id: product?.id,
        quantity: 1,
        key: combination.toString().replaceAll(",", " "),
      });

      alert(response.data.message);
      
    } catch (error: any) {
      console.log(error.response.data.message || error);
    }
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[40px] mt-[40px] lg:mt-[80px]">
      <div></div>

      {!product && <Loading />}
      {product && (
        <div className="flex flex-col gap-5">
          <h3>{product?.name}</h3>
          <div className="flex items-center gap-1">
            <span>
              <FaStar />
            </span>
            <p>
              {product?.rating} (80 Review) | Terjual {product?.total_sold}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <h3>Rp{product?.price}</h3>
            <p className="line-through">Rp 150.000</p>
            <p className="text-highlight font-bold">20% off</p>
          </div>

          <div className="flex flex-col gap-4">
            {product?.product_attributes.map((attr, attrIdx) => (
              <div key={attr.id}>
                <p className="font-bold">{attr.name}</p>
                <div className="flex gap-2">
                  {attr.product_attribute_values.map((value) => (
                    <button
                      onClick={() =>
                        changeCombination(attrIdx, Number(value.id))
                      }
                      key={value.id}
                      className={
                        "px-3 py-2 shadow-md rounded-md font-semibold" +
                        (combination[attrIdx] === value.id
                          ? " bg-brand text-white"
                          : " bg-gray-100 text-gray")
                      }
                    >
                      {value.value}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* <h1>{combination.toString().replaceAll(",", " ")}</h1> */}

          <div className="flex flex-col">
            <p className="font-bold">Stock Tersisa:</p>
            <p>{stock}</p>
          </div>

          <p className="text-[14px]">
            Tambahkan sentuhan elegan pada koleksi pakaian Anda dengan Kemeja
            Putih Klasik Wanita. Dibuat dengan bahan berkualitas tinggi, kemeja
            ini menghadirkan gaya yang tak lekang oleh waktu. Dengan desain yang
            sederhana namun mengesankan, kemeja putih klasik ini memberikan
            nuansa yang segar dan bersih pada setiap penampilan Anda. Cocok
            dipadukan dengan celana panjang formal atau bahkan rok midi yang
            lebih santai. Tidak hanya memberikan penampilan yang menawan, kemeja
            ini juga memberikan kenyamanan maksimal sepanjang hari. Kain ringan
            dan bernapas membuat Anda tetap merasa segar bahkan dalam cuaca
            hangat.
          </p>

          <div className="flex gap-3">
            <button
              className={stock == 0 ? "primary-btn-disabled" 
              : "primary-btn"}
              onClick={() => addToCart()}
            >
              Tambah Ke keranjang
            </button>
            <button className="px-3 shadow-md hover:shadow-sm py-1 border border-brand text-brand flex items-center">
              <FaHeart />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function Reviews() {
  const [rating, setRating] = useState(null);

  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[20px] items-start">
        <Rating />

        <div className="w-full">
          <div className="mt-8 mb-6">
            <div className="flex justify-between items-end">
              <h3>Ulasan Produk</h3>
              <select
                name="sort"
                id="sort"
                className="border cursor-pointer border-gray-200 text-xs lg:text-base lg:px-4 px-2 py-2"
              >
                <option value="terbaru">Terbaru</option>
                <option value="terpopuler">Terlama</option>
              </select>
            </div>
          </div>

          <button
            // x-data
            // @click="$store.isFilterOpen = ! $store.isFilterOpen"
            className="secondary-btn gap-1 lg:gap-0 lg:hidden mb-6"
          >
            <FaFilter />
          </button>

          <div className="flex flex-col gap-5">
            <ReviewCard />
          </div>

          <Pagination />
        </div>
      </div>
    </section>
  );
}

function ProductsRecommendation() {
  return (
    <section>
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-[8px] h-[28px] bg-brand"></span>
          <p className="text-brand font-semibold tracking-wide">
            Recommendation
          </p>
        </div>
        <h4 className="font-bold">Produk Terpopuler</h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-[10px] mt-8">
        <ProductCard product={{}} />
      </div>
    </section>
  );
}
