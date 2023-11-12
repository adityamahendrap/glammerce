import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { IProduct, IProductCombination } from "@/types";
import { CgArrowsExchange } from "react-icons/cg";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart() {
  return (
    <>
      <Layout>
        <main>
          <section className="flex flex-col lg:flex-row gap-[60px] lg:gap-[40px] mt-[40px]">
            <ProductsInCart />
            <CartOrder />
          </section>
        </main>
      </Layout>
    </>
  );
}

function VariationModal({
  product,
  initialCombinationKey,
  combinationString,
  cartItemId,
  fetchCart,
}: {
  product: IProduct;
  initialCombinationKey?: string;
  combinationString?: string;
  cartItemId?: number;
  fetchCart: () => void;
}) {
  const [showModal, setShowModal] = useState(false);
  const [combination, setCombination] = useState([]);
  const [stock, setStock] = useState(0);

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

  async function updateItemVariation() {
    try {
      const response = await axios.patch(
        `/carts/${cartItemId}?key=${combination
          .toString()
          .replaceAll(",", " ")}`
      );

      alert(response.data.message);
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setCombination(initialCombinationKey?.split(" ") as never[]);
  }, [product]);

  useEffect(() => {
    setStock(getCombinationStock());
  }, [combination]);

  return (
    <>
      <button
        className="bg-gray-200 text-gray-500 text-sm px-2 py-1 rounded shadow outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex justify-center items-center gap-1">
          {combinationString}
          <CgArrowsExchange size={20} />
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center gap-2 m-6">
                  <h3>Rp{product?.price}</h3>
                  <p className="line-through">Rp 150.000</p>
                  <p className="text-highlight font-bold">20% off</p>
                </div>

                <div className="flex flex-col gap-4 m-6">
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
                              (Number(combination[attrIdx]) === Number(value.id)
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

                <div className="flex flex-col m-6">
                  <p className="font-bold">Stock Tersisa:</p>
                  <p>{stock}</p>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      updateItemVariation();
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

function ProductsInCart() {
  const [cart, setCart] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  async function fetchCart() {
    try {
      const response = await axios.get("/carts");
      console.log(response.data.payload);
      setCart(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  }

  async function changeQuantity(
    cartItemId: number,
    type: string,
    oldQuantity: number
  ) {
    try {
      if (type === "decrement" && oldQuantity === 1) {
        return;
      }
      const response = await axios.patch(`/carts/${cartItemId}`, {
        quantity: type === "increment" ? oldQuantity + 1 : oldQuantity - 1,
      });

      setCart((prevCart: any) => {
        const newCart = { ...prevCart };
        newCart.cart_items.forEach((item) => {
          if (item.id === response.data.payload.id) {
            item.quantity = response.data.payload.quantity;
          }
        });
        return newCart;
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteItemInCart(cartItemId: number) {
    try {
      const response = await axios.delete(`/carts/${cartItemId}`);
      setCart((prevCart: any) => {
        const newCart = { ...prevCart };
        newCart.cart_items = newCart.cart_items.filter(
          (item) => item.id !== response.data.payload.id
        );
        return newCart;
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="lg:min-w-[650px]">
      <h3>Keranjang Anda ({cart?.cart_items.length})</h3>
      <div className="flex flex-col gap-4 mt-6">
        {cart?.cart_items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-[15px] w-full flex gap-6 border border-gray-200"
          >
            <div className="lg:w-[125px] w-[100px] h-[125px] lg:h-[155px] overflow-hidden flex gap-4">
              <input type="checkbox" name="" id="" />
              <img
                src="/image/products/Kemeja Putih Klasik.png"
                alt="produk"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 w-full justify-between">
              <div className="flex items-start justify-between">
                <Link to={`/products/${item.product.id}/${item.product.slug}`}>
                  <p className="font-semibold hover:underline">
                    {item.product.name}
                  </p>
                </Link>
                <div>
                  <button className="cursor-pointer relative z-[3] text-lg mr-2">
                    <FaHeart />
                  </button>
                  <button
                    onClick={() => deleteItemInCart(item.id)}
                    className="cursor-pointer relative z-[3] text-lg"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
              <p>
                Variasi: &nbsp;
                <VariationModal
                  product={item.product}
                  initialCombinationKey={item.product_combination.key}
                  combinationString={item.product_combination.combination}
                  cartItemId={item.id}
                  fetchCart={fetchCart}
                />
              </p>
              <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center justify-between justify-items-end">
                <div className="flex justify-center items-center gap-3">
                  <button
                    className="w-8 h-8 border-2 rounded-full border-brand font-bold text-brand"
                    onClick={() =>
                      changeQuantity(item.id, "decrement", item.quantity)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="w-8 h-8 border-2 rounded-full border-brand font-bold text-brand"
                    onClick={() =>
                      changeQuantity(item.id, "increment", item.quantity)
                    }
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center align-middle gap-2">
                  <p className="font-semibold text-highlight">
                    Rp{item.product_combination.price}
                  </p>
                  <p className="line-through text-[14px]">Rp 150.000</p>
                  <p className="text-[14px]">-20%</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartOrder() {
  const [couponToggle, setCouponToggle] = useState(false);

  return (
    <div className="flex flex-col gap-5 w-full lg:mt-[58px]">
      <div
        // x-data="{ open: false }"
        className="shadow-sm text-[14px] border border-gray-200"
      >
        <div
          // @click="open = ! open."
          onClick={() => setCouponToggle(!couponToggle)}
          className="w-full p-[15px] flex justify-between items-center cursor-pointer"
        >
          <p>Masukan kode diskon</p>
          <i
            className={
              "fas fa-chevron-down transition-all duration-100 " +
              (couponToggle ? "rotate-180" : "")
            }
            // :className="open ? 'rotate-180' : '' "
          ></i>
        </div>
        <div
          // x-show="open"
          className={"bg-white p-[15px] " + (couponToggle ? "hidden" : "")}
        >
          <input
            type="text"
            placeholder="Masukan kode diskon"
            className="w-full p-2 placeholder-gray-500 border border-gray-200 focus:outline-none focus:border-brand"
          />
          <button className="text-center mt-3 p-2 tracking-[3%] font-semibold uppercase border hover:border-brand shadow-md hover:shadow-sm transition duration-100 border-second cursor-pointer text-second w-full">
            Gunakan
          </button>
        </div>
      </div>
      <div className="border border-gray-200 p-[15px] flex flex-col gap-5">
        <p>Jumlah Pesanan</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Subtotal (2 produk)</p>
          <p className="font-semibold">Rp 620.000</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Pengiriman</p>
          <p className="font-semibold">Rp 20.000</p>
        </div>
        <div className="border-t border-gray-200">
          <div className="flex justify-between items-center mt-5">
            <p className="font-bold">
              Total
              <span className="font-normal text-xs">(Termasuk GST)</span>
            </p>
            <p className="font-semibold">Rp 640.000</p>
          </div>
          <a href="/payment">
            <button className="primary-btn-full mt-5">Lanjutkan</button>
          </a>
        </div>
      </div>
    </div>
  );
}
