import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="lg:h-screen h-[65vh] bg-brand bg-opacity-10 flex items-center bg-[url('/image/about/about-hero.jpg')] bg-cover bg-center">
        <div className="flex flex-col w-full h-full bg-gradient-to-t px-4 lg:px-[100px] text-white justify-center from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]">
          <div>
            <span
              className="font-bold text-3xl lg:text-4xl max-w-[320px] lg:max-w-[550px]"
              id="typed-hero"
            ></span>
          </div>
        </div>
      </section>

      <main>
        <section>
          <div className="flex flex-col lg:flex-row">
            <img
              src="/image/about/about1.png"
              width={500}
              height={500}
              className="w-full lg:w-[600px]"
              alt="about"
            />
            <div className="p-5 flex flex-col gap-5">
              <p className="uppercase tracking-[3px] font-medium">
                Kisah perjalanan kami
              </p>
              <h2 className="">Dari Impian menjadi Realitas</h2>
              <p>
                Kami bangun perusahaan ini dari sebuah ide sederhana menjadi
                kenyataan yang menginspirasi. Dengan dedikasi dan kerja keras,
                kami telah menghadirkan koleksi fashion yang menggabungkan
                keeleganan dan inovasi.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col-reverse lg:flex-row h-max">
          <div className="bg-brand bg-opacity-10 px-2 py-5 lg:px-[40px] lg:py-[40px] w-full flex flex-col gap-5">
            <div>
              <h2>Hubungi Kami</h2>
            </div>
            <div className="flex flex-col gap-1 w-full h-max">
              <label htmlFor="email" className="text-[14px]">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukan nama anda"
                className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-[14px]">
                Email
              </label>
              <input
                type="text"
                placeholder="Masukan email anda"
                className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-[14px]">
                Pesan
              </label>
              <textarea
                // type="text"
                placeholder="Masukan pesan anda anda"
                className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
              ></textarea>
            </div>
            <div className="flex flex-col gap-4 w-full mt-5">
              <button className="primary-btn-full">Kirim</button>
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08080617724!2d106.71967667579487!3d-6.28392946198547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1694742006522!5m2!1sen!2sid"
              // style="border: 0"
              className="h-[300px] lg:h-full w-full lg:w-[600px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </Layout>
  );
}
