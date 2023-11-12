import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <section className="border-t border-gray-200 px-4 lg:px-[100px] py-[25px] flex lg:flex-row flex-col gap-[25px]">
        <div className="flex flex-col gap-6">
          <h4 className="font-medium">Brand Paling Populer</h4>
          <div className="grid grid-cols-3 lg:gap-0 gap-3">
            <ul className="w-auto lg:w-[205px] lg:text-[13px] text-xs">
              <li>
                <Link to="#" className="hover:underline">
                  Zara
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  H&M
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Nike
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Gucci
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Adidas
                </Link>
              </li>
            </ul>
            <ul className="w-auto lg:w-[205px] lg:text-[13px] text-xs">
              <li>
                <Link to="#" className="hover:underline">
                  Louis Vuitton
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Chanel
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Forever 21
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Calvin Klein
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Ralph Lauren
                </Link>
              </li>
            </ul>
            <ul className="w-auto lg:w-[205px] lg:text-[13px] text-xs">
              <li>
                <Link to="#" className="hover:underline">
                  Tommy Hilfiger
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Versace
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Prada
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Balenciaga
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Levi&apos;s
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 lg:gap-0 gap-3">
            <ul className="w-auto lg:w-[205px] lg:text-[13px] text-xs">
              <li>
                <Link to="#" className="hover:underline">
                  Puma
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Burberry
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Fendi
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Michael Kors
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  ASOS
                </Link>
              </li>
            </ul>
            <ul className="w-auto lg:w-[205px] lg:text-[13px] text-xs">
              <li>
                <Link to="#" className="hover:underline">
                  Gap
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Topshop{" "}
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Uniqlo
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Coach
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Victoria&apos;s Secret
                </Link>
              </li>
            </ul>
            <ul className="w-auto lg:w-[205px] lg:text-[13px] text-xs">
              <li>
                <Link to="#" className="hover:underline">
                  Mango
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Diesel
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Under Armour
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Converse
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Reebok
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="font-medium">Pencarian Paling Populer</h4>
          <div className="grid grid-cols-3 lg:gap-0 gap-3">
            <ul className="w-[100px] lg:w-[205px] lg:text-[13px] text-xs whitespace-normal">
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian wanita
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian pria
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Sepatu fashion
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Tas trendi
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Aksesori gaya
                </Link>
              </li>
            </ul>
            <ul className="w-[100px] lg:w-[205px] lg:text-[13px] text-xs whitespace-normal">
              <li>
                <Link to="#" className="hover:underline">
                  Gaun elegan
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Kemeja modern
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Jeans terbaru
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian atasan trend
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Sepatu sneakers
                </Link>
              </li>
            </ul>
            <ul className="w-[100px] lg:w-[205px] lg:text-[13px] text-xs whitespace-normal">
              <li>
                <Link to="#" className="hover:underline">
                  Celana panjang chino
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Baju anak-anak
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian olahraga
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Jaket fashion
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian berkebaya
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 lg:gap-0 gap-3">
            <ul className="w-[100px] lg:w-[205px] lg:text-[13px] text-xs whitespace-normal">
              <li>
                <Link to="#" className="hover:underline">
                  Baju renang trend
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian maternity modis
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Baju pesta elegan
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian musim panas
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Baju tidur trendy
                </Link>
              </li>
            </ul>
            <ul className="w-[100px] lg:w-[205px] lg:text-[13px] text-xs whitespace-normal">
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian tradisional
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Dress malam{" "}
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Sepatu hak tinggi
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian kerja profesional
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Aksesoris perhiasan
                </Link>
              </li>
            </ul>
            <ul className="w-[100px] lg:w-[205px] lg:text-[13px] text-xs whitespace-normal">
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian plus size
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Baju busana muslim
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian musim dingin
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian formal elegan
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Pakaian ala selebriti
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-second px-4 lg:px-[100px] py-[25px] grid grid-cols-1 lg:grid-cols-5 gap-6 justify-between text-white">
        <div className="flex flex-col gap-4">
          <h3>Glammerce</h3>
          <div className="flex items-center gap-4 text-2xl">
            <Link to="#">
              <FaFacebook />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
            <Link to="#">
              <FaYoutube />
            </Link>
            <Link to="#">
              <FaTwitter />
            </Link>
          </div>
          <div className="text-[13px] lg:text-[14px]">
            <p>Jalan Sudirman, Jakarta, Indonesia.</p>
            <p>+62-812-3456-7890</p>
            <p>cs@glammerce.co.id</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4>Pembayaran</h4>
          {/* <div className="flex flex-wrap gap-2 lg:w-[150px]">
            <div className="bg-white p-1 w-max">
              <img
                src="/image/pembayaran/bca.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="bca"
              />
            </div>
            <span className="bg-white p-1 w-max">
              <img
                src="/image/pembayaran/bni.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="bni"
              />
            </span>
            <span className="bg-white p-1 w-max">
              <img
                src="/image/pembayaran/mandiri.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="mandiri"
              />
            </span>
            <span className="bg-white p-1 w-max">
              <img
                src="/image/pembayaran/gopay.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="gopay.png"
              />
            </span>
            <span className="bg-white p-1 w-max">
              <img
                src="/image/pembayaran/kredivo.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="kredivo.png"
              />
            </span>
            <span className="bg-white p-1 w-max">
              <img
                src="/image/pembayaran/visa.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="visa.png"
              />
            </span>
          </div> */}
        </div>
        <div className="flex flex-col gap-4">
          <h4>Pengiriman</h4>
          {/* <div className="flex flex-wrap gap-2">
            <span className="bg-white p-1 w-max">
              <img
                src="/image/pengiriman/jne.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="jne.png"
              />
            </span>
            <span className="bg-white p-1 w-max">
              <img
                src="/image/pengiriman/jnt.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="jnt.png"
              />
            </span>
            <span className="bg-white p-1 w-max">
              <img
                src="/image/pengiriman/lion-parcel.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="lion-parcel.png"
              />
            </span>
            <span className="bg-white p-1 w-max">
              <img
                src="/image/pengiriman/ninja.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="ninja.png"
              />
            </span>
            <span className="bg-white p-1 w-max">
              <img
                src="/image/pengiriman/sicepat.png"
                width={500}
                height={500}
                className="h-[16px]"
                alt="sicepat.png"
              />
            </span>
          </div> */}
        </div>
        <div className="flex flex-col gap-4">
          <h4>Tautan</h4>
          <ul className="text-[13px] lg:text-[14px]">
            <li>
              <Link to="#" className="hover:underline">
                Produk
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Artikel
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Kebijakan Privasi
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4>Download App</h4>
          {/* <div className="flex gap-2">
            <img
              src="/image/footer/qrcode.png"
              width={500}
              height={500}
              alt="qrcode"
              className="h-[80px] w-6/12"
            />
            <div className="flex gap-1 flex-col w-6/12">
              <img
                src="/image/footer/playstore.png"
                width={500}
                height={500}
                alt="playstore.png"
                className="h-[30px] cursor-pointer"
              />
              <img
                src="/image/footer/appstore.png"
                width={500}
                height={500}
                alt="appstore.png"
                className="h-[30px] cursor-pointer"
              />
            </div>
          </div> */}
        </div>
      </section>
      <section className="border-t border-gray-200 py-[20px] text-center text-xs lg:text-[14px] bg-second">
        <p className="text-gray-200">
          &copy; Glammerce 2023. Hak Cipta Dilindungi
        </p>
      </section>
    </footer>
  );
}
