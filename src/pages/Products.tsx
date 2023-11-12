import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { FaStar } from "react-icons/fa";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProducts() {
    try {
      const response = await axios.get("/products");
      setProducts(response.data.payload);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <main>
        <div className="w-full flex mt-8 gap-x-8 justify-center">
          <Filter />
          <ProductList products={products} />
        </div>
      </main>
    </Layout>
  );
}

function Filter() {
  const [open, setOpen] = useState({
    discount: false,
    brand: false,
    price: false,
    rating: false,
    category: false,
  });

  return (
    <>
      {/* filter mobile */}
      {/* <section
        className="lg:hidden fixed bottom-0 left-0 w-full h-[300px] border-t border-gray-200 overflow-y-scroll bg-white z-[8] shadow-lg px-4 py-4 transition-all duration-300"
        // x-data
        // :className="$store.isFilterOpen ? 'bottom-0 opacity-100' : 'opacity-0 bottom-[-300px]'"
      >
        <div className="flex items-center justify-between py-[10px] mb-2">
          <h4>Filter</h4>
          <button
          // @click="$store.isFilterOpen = false"
          >
            <FaHeart/>
          </button>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div
            // x-data="{ open: false }"
            className="shadow-sm text-[14px] border border-gray-200"
          >
            <div
              // @click="open = ! open"
              className="w-full p-2 flex justify-between items-center cursor-pointer"
            >
              <p>Diskon</p>
              <i
                className="fas fa-chevron-down transition-all duration-100"
                // :className="open ? 'rotate-180' : '' "
              ></i>
            </div>
            <div
              // x-show="open"
              className="bg-white px-2 py-3"
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
                  Produk dengan diskon
                </label>
              </div>
            </div>
          </div>
          <div
            // x-data="{ open: false }"
            className="shadow-sm text-[14px] border border-gray-200"
          >
            <div
              // @click="open = ! open"
              className="w-full p-2 flex justify-between items-center cursor-pointer"
            >
              <p>Brand</p>
              <i
                className="fas fa-chevron-down transition-all duration-100"
                // :className="open ? 'rotate-180' : '' "
              ></i>
            </div>
            <div
              // x-show="open"
              className="bg-white px-2 py-3"
            >
              <input
                type="text"
                placeholder="Masukan nama brand"
                className="w-full p-1 placeholder-gray-500 border border-gray-200 focus:outline-none focus:border-brand"
              />
              <p className="text-xs mt-2">
                tekan enter untuk menambahkan nama brand
              </p>
            </div>
          </div>
          <div
            // x-data="{ open: false }"
            className="shadow-sm text-[14px] border border-gray-200"
          >
            <div
              // @click="open = ! open"
              className="w-full p-2 flex justify-between items-center cursor-pointer"
            >
              <p>Harga</p>
              <i
                className="fas fa-chevron-down transition-all duration-100"
                // :className="open ? 'rotate-180' : '' "
              ></i>
            </div>
            <div
              // x-show="open"
              className="bg-white px-2 py-3"
            >
              <div className="flex">
                <span className="inline-flex text-xs lg:text-base items-center bg-gray-100 px-2 border border-r-0 border-gray-200">
                  Rp
                </span>
                <input
                  type="text"
                  className="border placeholder-gray-500 block flex-1 w-full text-xs lg:text-base border-gray-200 p-[6px] focus:border-brand focus:outline-none"
                  placeholder="harga minimum"
                />
              </div>
              <div className="flex mt-3">
                <span className="inline-flex text-xs lg:text-base items-center bg-gray-100 px-2 border border-r-0 border-gray-200">
                  Rp
                </span>
                <input
                  type="text"
                  className="border text-xs lg:text-base block placeholder-gray-500 flex-1 w-full border-gray-200 p-[6px] focus:border-brand focus:outline-none"
                  placeholder="harga maksimum"
                />
              </div>
              <div className="relative flex items-start mt-4">
                <input
                  id="56"
                  type="checkbox"
                  className="hidden peer"
                  value="56"
                />
                <label
                  // for="56"
                  className="inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
                >
                  <div className="flex items-center text-xs lg:text-base justify-center w-full">
                    <p>Rp100 rb - Rp300 rb</p>
                  </div>
                </label>
              </div>
              <div className="relative flex items-start mt-2">
                <input
                  id="57"
                  type="checkbox"
                  className="hidden peer"
                  value="57"
                />
                <label
                  // for="57"
                  className="inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
                >
                  <div className="flex text-xs lg:text-base items-center justify-center w-full">
                    <p>Rp300 rb - Rp500 rb</p>
                  </div>
                </label>
              </div>
              <div className="relative flex items-start mt-2">
                <input
                  id="58"
                  type="checkbox"
                  className="hidden peer"
                  value="58"
                />
                <label
                  // for="58"
                  className="text-xs lg:text-base inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
                >
                  <div className="flex items-center justify-center w-full">
                    <p>Rp500 rb - Rp800 rb</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div
            // x-data="{ open: false }"
            className="shadow-sm text-[14px] border border-gray-200"
          >
            <div
              // @click="open = ! open"
              className="w-full p-2 flex justify-between items-center cursor-pointer"
            >
              <p>Rating</p>
              <i
                className="fas fa-chevron-down transition-all duration-100"
                // :className="open ? 'rotate-180' : '' "
              ></i>
            </div>
            <div
              // x-show="open"
              className="bg-white px-2 py-3"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-xs lg:text-base bg-gray-300 border-none focus:ring-transparent"
                />
                <label
                  // for="safeAdress"
                  className="block ml-2 text-sm text-gray-900"
                >
                  <i className="fas fa-star text-xs lg:text-base text-brand"></i>
                  4 ke atas
                </label>
              </div>
            </div>
          </div>
          <div
            // x-data="{ open: false }"
            className="shadow-sm text-[14px] border border-gray-200"
          >
            <div
              // @click="open = ! open"
              className="w-full p-2 flex justify-between items-center cursor-pointer"
            >
              <p>Kategori</p>
              <i
                className="fas fa-chevron-down transition-all duration-100"
                // :className="open ? 'rotate-180' : '' "
              ></i>
            </div>
            <div
              // x-show="open"
              className="bg-white px-2 py-3"
            >
              <div className="relative flex items-start mt-2">
                <input
                  id="32"
                  type="checkbox"
                  className="hidden peer"
                  value="32"
                />
                <label
                  // for="32"
                  className="text-xs lg:text-base inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
                >
                  <div className="flex items-center justify-center w-full">
                    <p>Pakaian Pria</p>
                  </div>
                </label>
              </div>
              <div className="relative flex items-start mt-2">
                <input
                  id="60"
                  type="checkbox"
                  className="hidden peer"
                  value="60"
                />
                <label
                  // for="60"
                  className="text-xs lg:text-base inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
                >
                  <div className="flex items-center justify-center w-full">
                    <p>Pakaian Wanita</p>
                  </div>
                </label>
              </div>
              <div className="relative flex items-start mt-2">
                <input
                  id="70"
                  type="checkbox"
                  className="hidden peer"
                  value="70"
                />
                <label
                  // for="70"
                  className="text-xs lg:text-base inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
                >
                  <div className="flex items-center justify-center w-full">
                    <p>Pakaian Anak-anak</p>
                  </div>
                </label>
              </div>
              <div className="relative flex items-start mt-2">
                <input
                  id="80"
                  type="checkbox"
                  className="hidden peer"
                  value="80"
                />
                <label
                  // for="80"
                  className="text-xs lg:text-base inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
                >
                  <div className="flex items-center justify-center w-full">
                    <p>Aksesori</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="hidden lg:flex flex-col gap-2 w-2/12 mt-[73px]">
        <div className="shadow-sm text-[14px] border border-gray-200">
          <div
            onClick={() => setOpen({ ...open, discount: !open.discount })}
            className="w-full p-2 flex justify-between items-center cursor-pointer"
          >
            <p>Diskon</p>
            <i
              className={
                "fas fa-chevron-down transition-all duration-100 " +
                (open.discount ? "rotate-180" : "")
              }
            ></i>
          </div>
          <div
            className={"bg-white px-2 py-3 " + (open.discount ? "" : "hidden")}
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
                Produk dengan diskon
              </label>
            </div>
          </div>
        </div>
        <div className="shadow-sm text-[14px] border border-gray-200">
          <div
            onClick={() => setOpen({ ...open, brand: !open.brand })}
            className="w-full p-2 flex justify-between items-center cursor-pointer"
          >
            <p>Brand</p>
            <i
              className={
                "fas fa-chevron-down transition-all duration-100 " +
                (open.brand ? "rotate-180" : "")
              }
            ></i>
          </div>
          <div className={"bg-white px-2 py-3 " + (open.brand ? "" : "hidden")}>
            <input
              type="text"
              placeholder="Masukan nama brand"
              className="w-full p-1 placeholder-gray-500 border border-gray-200 focus:outline-none focus:border-brand"
            />
            <p className="text-xs mt-2">
              tekan enter untuk menambahkan nama brand
            </p>
          </div>
        </div>
        <div className="shadow-sm text-[14px] border border-gray-200">
          <div
            onClick={() => setOpen({ ...open, price: !open.price })}
            className="w-full p-2 flex justify-between items-center cursor-pointer"
          >
            <p>Harga</p>
            <i
              className={
                "fas fa-chevron-down transition-all duration-100 " +
                (open.price ? "rotate-180" : "")
              }
            ></i>
          </div>
          <div className={"bg-white px-2 py-3 " + (open.price ? "" : "hidden")}>
            <div className="flex">
              <span className="inline-flex items-center bg-gray-100 px-2 border border-r-0 border-gray-200">
                Rp
              </span>
              <input
                type="text"
                className="border placeholder-gray-500 block flex-1 w-full text-xs lg:text-base border-gray-200 p-[6px] focus:border-brand focus:outline-none"
                placeholder="harga minimum"
              />
            </div>
            <div className="flex mt-3">
              <span className="inline-flex items-center bg-gray-100 px-2 border border-r-0 border-gray-200">
                Rp
              </span>
              <input
                type="text"
                className="border block placeholder-gray-500 flex-1 w-full border-gray-200 p-[6px] focus:border-brand focus:outline-none"
                placeholder="harga maksimum"
              />
            </div>
            <div className="relative flex items-start mt-4">
              <input id="1" type="checkbox" className="hidden peer" value="1" />
              <label
                // for="1"
                className="inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
              >
                <div className="flex items-center justify-center w-full">
                  <p>Rp100 rb - Rp300 rb</p>
                </div>
              </label>
            </div>
            <div className="relative flex items-start mt-2">
              <input id="2" type="checkbox" className="hidden peer" value="1" />
              <label
                // for="2"
                className="inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
              >
                <div className="flex items-center justify-center w-full">
                  <p>Rp300 rb - Rp500 rb</p>
                </div>
              </label>
            </div>
            <div className="relative flex items-start mt-2">
              <input id="3" type="checkbox" className="hidden peer" value="1" />
              <label
                // for="3"
                className="inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
              >
                <div className="flex items-center justify-center w-full">
                  <p>Rp500 rb - Rp800 rb</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="shadow-sm text-[14px] border border-gray-200">
          <div
            onClick={() => setOpen({ ...open, rating: !open.rating })}
            className="w-full p-2 flex justify-between items-center cursor-pointer"
          >
            <p>Rating</p>
            <i
              className={
                "fas fa-chevron-down transition-all duration-100 " +
                (open.rating ? "rotate-180" : "")
              }
            ></i>
          </div>
          <div
            className={"bg-white px-2 py-3 " + (open.rating ? "" : "hidden")}
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
                <FaStar />4 ke atas
              </label>
            </div>
          </div>
        </div>
        <div
          // x-data="{ open: false }"
          className="shadow-sm text-[14px] border border-gray-200"
        >
          <div
            onClick={() => setOpen({ ...open, category: !open.category })}
            className="w-full p-2 flex justify-between items-center cursor-pointer"
          >
            <p>Kategori</p>
            <i
              className={
                "fas fa-chevron-down transition-all duration-100 " +
                (open.category ? "rotate-180" : "")
              }
            ></i>
          </div>
          <div
            className={"bg-white px-2 py-3 " + (open.category ? "" : "hidden")}
          >
            <div className="relative flex items-start mt-2">
              <input id="5" type="checkbox" className="hidden peer" value="5" />
              <label
                // for="5"
                className="inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
              >
                <div className="flex items-center justify-center w-full">
                  <p>Pakaian Pria</p>
                </div>
              </label>
            </div>
            <div className="relative flex items-start mt-2">
              <input id="6" type="checkbox" className="hidden peer" value="6" />
              <label
                // for="6"
                className="inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
              >
                <div className="flex items-center justify-center w-full">
                  <p>Pakaian Wanita</p>
                </div>
              </label>
            </div>
            <div className="relative flex items-start mt-2">
              <input id="7" type="checkbox" className="hidden peer" value="7" />
              <label
                // for="7"
                className="inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
              >
                <div className="flex items-center justify-center w-full">
                  <p>Pakaian Anak-anak</p>
                </div>
              </label>
            </div>
            <div className="relative flex items-start mt-2">
              <input id="8" type="checkbox" className="hidden peer" value="8" />
              <label
                // for="8"
                className="inline-flex items-center justify-between w-auto p-2 tracking-[3%] border border-second cursor-pointer text-second peer-checked:border-brand peer-checked:bg-brand peer-checked:bg-opacity-10"
              >
                <div className="flex items-center justify-center w-full">
                  <p>Aksesori</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <button className="primary-btn-full w-max">Apply Filter</button>
      </div>
    </>
  );
}
