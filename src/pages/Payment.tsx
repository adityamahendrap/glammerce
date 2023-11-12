import Layout from "../components/Layout";

export default function Payment() {
  return (
    <Layout>
      <main>
        <section className="mt-[40px]">
          <h3>Checkout Pesananmu</h3>
          <div className="flex flex-col lg:flex-row gap-[40px] justify-between mt-6">
            <div className="flex flex-col gap-5 w-full lg:w-[550px]">
              <div className="flex flex-col gap-1 w-full">
                <label
                  // for="text"
                  className="text-[14px]"
                >
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Masukan nama anda"
                  className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  // for="text"
                  className="text-[14px]"
                >
                  Alamat
                </label>
                <input
                  type="text"
                  placeholder="Masukan alamat anda"
                  className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                />
              </div>
              <div className="flex gap-[10px]">
                <div className="flex flex-col gap-1 w-full">
                  <label
                    // for="text"
                    className="text-[14px]"
                  >
                    Kota
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan kota anda"
                    className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label
                    // for="text"
                    className="text-[14px]"
                  >
                    Provinsi
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan provinsi anda"
                    className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label
                    // for="text"
                    className="text-[14px]"
                  >
                    Kode Pos
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan kode pos anda"
                    className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  // for="text"
                  className="text-[14px]"
                >
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  placeholder="Masukan nomor telepon anda"
                  className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  // for="email"
                  className="text-[14px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Masukan nomor telepon anda"
                  className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                />
              </div>
              <div className="flex gap-1 w-full">
                <input type="checkbox" id="save" name="save" value="save" />
                <label
                  // for="save"
                  className="text-[14px]"
                >
                  Simpan data untuk transaksi selanjutnya
                </label>
              </div>
            </div>
            <div className="w-full lg:w-[500px]">
              <div className="border border-gray-200 p-[20px] w-full flex flex-col gap-5">
                <p>Ringkasan Belanja</p>

                <div className="flex flex-col gap-3 w-full">
                  <div className="flex items-start gap-3">
                    <div className="overflow-hidden w-[65px] h-[95px]">
                      <img
                        width={500}
                        height={500}
                        src="/image/products/Kemeja Putih Klasik.png"
                        className="object-cover w-full h-full"
                        alt="kemeja"
                      />
                    </div>
                    <div>
                      <p>Kemeja Putih Klasik</p>
                      <p className="font-semibold">Rp 120.000</p>
                      <p className="text-[14px]">Ukuran: L</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="overflow-hidden w-[65px] h-[95px]">
                      <img
                        width={500}
                        height={500}
                        src="/image/products/Dress Maxi Bunga.png"
                        className="object-cover w-full h-full"
                        alt="kemeja"
                      />
                    </div>
                    <div>
                      <p>Dress Maxi Bunga</p>
                      <p className="font-semibold">Rp 500.000</p>
                      <p className="text-[14px]">Ukuran: M</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pb-5 border-b border-gray-200">
                  <p className="font-semibold">Subtotal</p>
                  <p className="font-semibold">Rp 120.000</p>
                </div>
                <div className="flex justify-between pb-5 border-b border-gray-200">
                  <p className="font-semibold">Pengiriman</p>
                  <p className="font-semibold">Rp 20.000</p>
                </div>
                <div className="flex justify-between pb-5 border-b border-gray-200">
                  <p className="font-semibold">Total</p>
                  <p className="font-semibold">Rp 140.000</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Metode Pembayaran</p>
                  <div>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      className="mt-1 block w-full cursor-pointer py-2 px-3 border border-gray-200 bg-white focus:outline-none focus:border-brand"
                    >
                      <option value="gopay">Gopay</option>
                      <option value="kredivo">Kredivo</option>
                      <option value="bca">BCA</option>
                      <option value="bni">BNI</option>
                      <option value="mandiri">Mandiri</option>
                      <option value="visa">Visa</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    className="primary-btn-full"
                    // x-data
                    // @click="$store.isConfirmOpen = true"
                  >
                    Bayar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
