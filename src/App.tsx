import Layout from "./components/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaChevronLeft,
  FaChevronRight,
  FaCommentDots,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import Slider from "./components/Slider";

export default function Home() {
  const [chatbot, setChatbot] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  function handleToggleChatbot() {
    setChatbot(!chatbot);
  }

  return (
    <Layout>
      <Hero />
      <main>
        <Promo />
        <BestSeller />
        <Category />
        <Feature />
        <About />
        <SubscribeNewsLetter />
      </main>
      <ScrollToTopButton isVisible={isVisible} />
      <ChatbotButton onToggleChatbot={handleToggleChatbot} />
      <ChatbotWindow chatbot={chatbot} onToggleChatbot={handleToggleChatbot} />
    </Layout>
  );
}

function Hero() {
  return (
    <div className="mx-4 lg:mx-[100px] bg-opacity-10 mt-[95px] rounded-lg overflow-hidden">
      <Slider />
    </div>
  );

  // <div
  //   className="relative h-screen"
  // >
  //   <div
  //     id="hero"
  //     className="keen-slider"
  //   >
  //     <div className="keen-slider__slide">
  //       <section className="h-screen px-4 lg:px-[100px] bg-brand bg-opacity-10 flex items-center lg:items-end justify-between">
  //         <div className="flex flex-col mb-[100px] lg:mb-[190px]">
  //           <div>
  //             <h1>Temukan Gaya Anda</h1>
  //             <p className="max-w-[280px] lg:max-w-[500px] mt-8 mb-6 relative z-[3] lg:static text-base lg:text-[18px]">
  //               Jelajahi koleksi produk fashion terbaru kami yang
  //               menggabungkan gaya modern dengan kenyamanan. Dapatkan pilihan
  //               terbaik untuk tampil sempurna setiap hari.
  //             </p>
  //             <Link href="/products" className="primary-btn w-max">
  //               LIHAT KOLEKSI
  //               <FaChevronRight />
  //             </Link>
  //           </div>
  //         </div>
  //         <div className="absolute lg:relative bottom-0 -right-[100px] lg:right-0 w-full lg:w-max">
  //           <img
  //             src="/image/hero/circle1.svg"
  //             width={400}
  //             height={400}
  //             alt="circle1"
  //             className="absolute lg:-left-[120px] left-[90px] z-[2] top-[25px] h-[190px] lg:h-[390px]"
  //           />
  //           <img
  //             src="/image/hero/circle2.svg"
  //             width={400}
  //             height={400}
  //             alt="circle2"
  //             className="absolute right-0 bottom-0 z-[1] w-[127px] lg:w-[327px]"
  //           />
  //           {/* <img
  //             src="/image/hero/hero-slider-1.png"
  //             width={400}
  //             height={400}
  //             alt="person1"
  //             className="h-[320px] lg:h-[560px] relative z-[3] bottom-0 lg:right-[50px] -right-[130px]"
  //           /> */}
  //         </div>
  //       </section>
  //     </div>
  //     {/* <div className="keen-slider__slide">
  //       <section className="h-screen px-4 lg:px-[100px] bg-brand bg-opacity-10 flex items-center lg:items-end justify-between">
  //         <div className="flex flex-col mb-[100px] lg:mb-[190px]">
  //           <div>
  //             <h1 className="max-w-[320px] lg:max-w-[500px]">
  //               Penawaran Spesial Bulan Ini
  //             </h1>
  //             <p className="max-w-[280px] lg:max-w-[500px] mt-8 mb-6 text-base lg:text-[18px]">
  //               Jangan lewatkan kesempatan untuk mendapatkan penawaran spesial
  //               bulan ini. Dapatkan diskon eksklusif untuk produk pilihan
  //               kami. Belanja cerdas dan hemat sekarang!
  //             </p>
  //             <a href="#" className="primary-btn w-max">
  //               LIHAT PENAWARAN  <FaChevronRight/>
  //             </a>
  //           </div>
  //         </div>
  //         <div className="absolute lg:relative bottom-0 -right-[100px] lg:right-0 w-full lg:w-max">
  //           <img
  //             src="/image/hero/circle1.svg"
  //             width={500}
  //             height={500}
  //             alt="circle1"
  //             className="absolute lg:-left-[80px] left-[90px] z-[2] top-[25px] h-[170px] lg:h-[370px]"
  //           />
  //           <img
  //             src="/image/hero/circle2.svg"
  //             width={500}
  //             height={500}
  //             alt="circle2"
  //             className="absolute right-0 bottom-0 z-[1] w-[127px] lg:w-[317px]"
  //           />
  //           <img
  //             src="/image/hero/hero-slider-2.png"
  //             width={500}
  //             height={500}
  //             alt="person1"
  //             className="h-[300px] lg:h-[550px] relative z-[3] bottom-0 lg:right-[50px] -right-[80px]"
  //           />
  //         </div>
  //       </section>
  //     </div> */}
  //     {/* <div className="keen-slider__slide">
  //       <section className="h-screen px-4 lg:px-[100px] bg-brand bg-opacity-10 flex items-center lg:items-end justify-between">
  //         <div className="flex flex-col mb-[100px] lg:mb-[190px]">
  //           <div>
  //             <h1 className="max-w-[320px] lg:max-w-[500px]">
  //               Koleksi Aksesori Eksklusif
  //             </h1>
  //             <p className="max-w-[280px] lg:max-w-[500px] mt-8 mb-6 text-base lg:text-[18px]">
  //               Temukan aksesori eksklusif yang akan menambah sentuhan
  //               istimewa pada gaya Anda. Mulai dari perhiasan hingga tas,
  //               pilihlah aksesori yang mencerminkan kepribadian Anda.
  //             </p>
  //             <a href="./products.html  " className="primary-btn w-max">
  //               jelajahi aksesori  <FaChevronRight/>
  //             </a>
  //           </div>
  //         </div>
  //         <div className="absolute lg:relative bottom-0 -right-[100px] lg:right-0 w-full lg:w-max">
  //           <img
  //             src="/image/hero/circle1.svg"
  //             width={500}
  //             height={500}
  //             alt="circle1"
  //             className="absolute lg:-left-[60px] left-[105px] z-[2] top-[25px] h-[170px] lg:h-[360px]"
  //           />
  //           <img
  //             src="/image/hero/circle2.svg"
  //             width={500}
  //             height={500}
  //             alt="circle2"
  //             className="absolute right-0 bottom-0 z-[1] w-[107px] lg:w-[307px]"
  //           />
  //           <img
  //             src="/image/hero/hero-slider-3.png"
  //             width={500}
  //             height={500}
  //             alt="person1"
  //             className="h-[300px] lg:h-[530px] relative z-[3] bottom-0 lg:right-[50px] -right-[100px]"
  //           />
  //         </div>
  //       </section>
  //     </div> */}
  //   </div>
  //   <div
  //     // x-ref="dots"
  //     className="flex items-center gap-2 absolute bottom-[32px] lg:left-[100px] left-4"
  //   >
  //     {/* <template x-for="(slide, index) in slides" :key="index"> */}
  //     <button
  //       className="lg:h-4 h-3 lg:w-4 w-3 bg-brand rounded-full cursor-pointer"
  //       // x-bind:className="{ 'bg-opacity-100': index === currentSlide, 'bg-opacity-50': index !== currentSlide }"
  //       // @click="goToSlide(index)"
  //     ></button>
  //     {/* </template> */}
  //   </div>
  // </div>
  // );
}

function Feature() {
  return (
    <section className="text-center">
      <h2>Mengapa Memilih Kami?</h2>
      <p className="mt-4 mb-20">
        Temukan pengalaman belanja unggul melalui inovasi dan keamanan terdepan
        dari pilihan kami.
      </p>
      <div className="flex flex-col lg:flex-row justify-between gap-[60px] lg:gap-[30px]">
        <div className="flex flex-col gap-[10px] items-center text-center lg:w-[400px]">
          <img
            src="/image/fitur/fitur1.svg"
            width={500}
            height={500}
            alt="livechat"
            className="h-[45px]"
          />
          <h3 className="max-w-[180px] lg:max-w-[240px]">
            Koneksi Langsung Solusi Cepat
          </h3>
          <p>
            Temukan kenyamanan berkomunikasi langsung melalui livechat atau
            chatbot.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] items-center text-center lg:w-[400px]">
          <img
            src="/image/fitur/fitur2.svg"
            width={500}
            height={500}
            alt="livechat"
            className="h-[45px]"
          />
          <h3 className="max-w-[200px] lg:max-w-full">
            Pembayaran dengan Sentuhan Anda
          </h3>
          <p>
            Nikmati pengalaman belanja aman dan mutakhir dengan teknologi
            pembayaran biometrik.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] items-center text-center lg:w-[400px]">
          <img
            src="/image/fitur/fitur3.svg"
            width={500}
            height={500}
            alt="livechat"
            className="h-[45px]"
          />
          <h3 className="max-w-[180px] lg:max-w-[240px]">
            Cari dengan Pandangan Anda
          </h3>
          <p>
            Temukan produk impian dengan mudah lewat pencarian berbasis gambar
            kami.
          </p>
        </div>
      </div>
    </section>
  );
}

function Promo() {
  return (
    <section
      id="promo-product"
      className="glide"
      // x-data
    >
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-[8px] h-[28px] bg-brand"></span>
            <p className="text-brand font-semibold tracking-wide">
              This Month&apos;s
            </p>
          </div>
          <h4 className="font-bold">Flash Sales</h4>
        </div>
        <div
          className="flex gap-3 glide__arrows items-center"
          data-glide-el="controls"
        >
          <div
            // :className="{ &apos;opacity-20&apos;: $store.position.promoMinReached }"
            className="glide__arrow glide__arrow--left bg-brand bg-opacity-25 text-brand text-base p-2 cursor-pointer flex items-center"
            data-glide-dir="<"
          >
            <FaChevronLeft />
          </div>
          <div
            // :className="{ &apos;opacity-20&apos;: $store.position.promoMaxReached }"
            className="glide__arrow glide__arrow--right bg-brand bg-opacity-25 text-brand text-base p-2 cursor-pointer flex items-center"
            data-glide-dir=">"
          >
            <FaChevronRight />
          </div>
        </div>
      </div>

      <div className="glide__track overflow-hidden" data-glide-el="track">
        <div className="glide__slides promo-product-container flex gap-[10px] h-max">
          {/* <!-- Berisikan element product card dari javascript --> */}
        </div>
      </div>
    </section>
  );
}

function BestSeller() {
  return (
    <section
      id="best-seller"
      className="glide"
      // x-data
    >
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-[8px] h-[28px] bg-brand"></span>
            <p className="text-brand font-semibold tracking-wide">
              This Month&apos;s
            </p>
          </div>
          <h4 className="font-bold">Produk Terpopuler</h4>
        </div>
        <div
          className="flex gap-3 glide__arrows items-center"
          data-glide-el="controls"
        >
          <div
            // :className="{ 'opacity-20': $store.position.bestMinReached }"
            className="glide__arrow glide__arrow--left l bg-brand bg-opacity-25 text-brand text-base p-2 cursor-pointer flex items-center"
            data-glide-dir="<"
          >
            <FaChevronLeft />
          </div>
          <div
            // :className="{ 'opacity-20': $store.position.bestMaxReached }"
            className="glide__arrow glide__arrow--right r bg-brand bg-opacity-25 text-brand text-base p-2 cursor-pointer flex items-center"
            data-glide-dir=">"
          >
            <FaChevronRight />
          </div>
        </div>
      </div>

      <div className="glide__track overflow-hidden" data-glide-el="track">
        <div className="glide__slides best-seller-container flex gap-[10px] h-max">
          {/* <!-- Berisikan element product card dari javascript --> */}
        </div>
      </div>
    </section>
  );
}

function Category() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-[8px] h-[28px] bg-brand"></span>
        <p className="text-brand font-semibold tracking-wide">Categories</p>
      </div>
      <h4 className="font-bold">Jelajahi Berdasarkan Kategori</h4>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px] mt-8">
        <div className="h-[240px] lg:h-[360px] bg-[url('/image/kategori/men.png')] bg-cover bg-center">
          <div className="w-full h-full flex justify-center items-end pb-8 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]">
            <div className="text-white text-center">
              <h3 className="font-semibold mb-1">Fashion Pria</h3>
              <a
                href="products.html"
                className="uppercase tracking-[3%] justify-center font-medium text-[14px] flex gap-2 items-center text-white hover:underline"
              >
                Lihat koleksi
                <FaChevronRight />
              </a>
            </div>
          </div>
        </div>
        <div className="h-[240px] lg:h-[360px] bg-[url('/image/kategori/women.png')] bg-cover bg-center">
          <div className="w-full h-full flex justify-center items-end pb-8 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]">
            <div className="text-white text-center">
              <h3 className="font-semibold mb-1">Fashion Wanita</h3>
              <a
                href="products.html"
                className="uppercase tracking-[3%] justify-center font-medium text-[14px] flex gap-2 items-center text-white hover:underline"
              >
                Lihat koleksi
                <FaChevronRight />
              </a>
            </div>
          </div>
        </div>
        <div className="h-[240px] lg:h-[360px] bg-[url('/image/kategori/kids.png')] bg-cover bg-center">
          <div className="w-full h-full flex justify-center items-end pb-8 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]">
            <div className="text-white text-center">
              <h3 className="font-semibold mb-1">Fashion Anak-anak</h3>
              <a
                href="products.html"
                className="uppercase tracking-[3%] justify-center font-medium text-[14px] flex gap-2 items-center text-white hover:underline"
              >
                Lihat koleksi
                <FaChevronRight />
              </a>
            </div>
          </div>
        </div>
        <div className="h-[240px] lg:h-[360px] bg-[url('/image/kategori/accesories.png')] bg-cover bg-center">
          <div className="w-full h-full flex justify-center items-end pb-8 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]">
            <div className="text-white text-center">
              <h3 className="font-semibold mb-1">Aksesoris</h3>
              <a
                href="products.html"
                className="uppercase tracking-[3%] justify-center font-medium text-[14px] flex gap-2 items-center text-white hover:underline"
              >
                Lihat koleksi
                <FaChevronRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:relative">
        <img
          src="/image/about/about1.png"
          width={500}
          height={500}
          className="w-full lg:w-[712px]"
          alt="about"
        />
        <div className="pt-4 lg:p-[60px] bg-white lg:absolute lg:w-[680px] lg:bottom-0 lg:right-0 flex flex-col gap-5">
          <p className="uppercase tracking-[3px] font-medium">
            Kisah perjalanan kami
          </p>
          <h2 className="">Dari Impian menjadi Realitas</h2>
          <p>
            Kami bangun perusahaan ini dari sebuah ide sederhana menjadi
            kenyataan yang menginspirasi. Dengan dedikasi dan kerja keras, kami
            telah menghadirkan koleksi fashion yang menggabungkan keeleganan dan
            inovasi.
          </p>
          <Link href="/about">
            <button className="primary-btn w-max mt-4">
              telusuri kisah kami <FaChevronRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SubscribeNewsLetter() {
  return (
    <section className="bg-brand bg-opacity-10">
      <div className="flex flex-col items-center justify-center py-[40px] px-[15px]">
        <h2 className="text-center">Berlangganan Newsletter Kami</h2>
        <p className="text-center mt-4 mb-8">
          Dapatkan informasi terbaru tentang produk dan penawaran menarik
          lainnya.
        </p>
        <div className="flex w-full flex-col lg:flex-row lg:justify-center gap-3 lg:gap-4">
          <input
            type="text"
            placeholder="Masukkan email Anda"
            className="border text-xs lg:text-base border-second focus:outline-none focus:border-brand placeholder-gray-500 text-second p-2 lg:px-4 lg:py-2 lg:w-[400px] bg-transparent"
          />
          <button className="primary-btn w-full lg:w-max">BERLANGGANAN</button>
        </div>
      </div>
    </section>
  );
}

interface IChatbotButtonProps {
  onToggleChatbot: () => void;
}

function ChatbotButton({ onToggleChatbot }: IChatbotButtonProps) {
  return (
    <div
      className="fixed z-[300] bottom-6 right-6 sm:bottom-8 sm:right-8"
      onClick={onToggleChatbot}
    >
      <button className="bg-brand rounded-full hover:shadow-md hover:-translate-y-[3px] p-4 text-xl flex items-center transition-all duration-300 justify-center shadow-xl">
        <FaCommentDots />
      </button>
    </div>
  );
}

interface IChatbotWindowProps {
  chatbot: boolean;
  onToggleChatbot: () => void;
}

function ChatbotWindow({ chatbot, onToggleChatbot }: IChatbotWindowProps) {
  return (
    <div
      className={
        "fixed -right-[20px] sm:right-[10px] px-[100px] transition-all duration-300 bottom-6 " +
        (chatbot ? "opacity-100 z-[200]" : "opacity-0 z-0")
      }
    >
      <div className="bg-white min-w-[325px] lg:min-w-[340px] flex flex-col border-t-0 rounded-md overflow-clip items-center justify-center shadow-md border border-gray-200">
        <div className="w-full bg-brand px-[20px] py-[10px] flex justify-between items-center">
          <p className="font-semibold">Customer Care</p>
          <button onClick={onToggleChatbot}>
            <FaTimes />
          </button>
        </div>
        <div className="py-[20px] w-full flex flex-col bg-white min-h-[250px] divide-y divide-gray-200">
          <div className="px-[20px] py-[15px] flex items-center gap-3 w-full">
            <div className="w-[36px] h-[36px] overflow-hidden flex justify-center items-center bg-brand rounded-full">
              <FaUser />
            </div>
            <div>
              <p className="font-semibold">Elina</p>
              <p className="text-xs">AI Virtual Assistant</p>
            </div>
          </div>
          <div className="px-[20px] py-[15px] flex items-center gap-3 w-full">
            <div className="w-[36px] h-[36px] overflow-hidden flex justify-center items-center bg-brand rounded-full">
              <FaUser />
            </div>
            <div>
              <p className="font-semibold">Admin Glammerce</p>
              <p className="text-xs">Active: Mon - Sun (7 AM - 9 PM)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IScrollToTopButtonProps {
  isVisible: boolean;
}
function ScrollToTopButton({ isVisible }: IScrollToTopButtonProps) {
  return (
    <div
      className={
        isVisible
          ? "opacity-0"
          : "opacity-100" + "transition ease-in-out duration-300"
      }
    >
      <button
        className="fixed z-[300] bottom-[80px] right-6 sm:bottom-24 sm:right-8 bg-brand rounded-full hover:shadow-md hover:-translate-y-[3px] p-4 text-xl flex items-center transition-all duration-300 justify-center shadow-xl "
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
