import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <main>
      <section className="my-[40px] lg:my-[80px] mx-auto shadow-md border w-full lg:w-[500px] p-[20px]">
        <h3 className="text-center mb-2">Lupa Password</h3>
        <p className="text-xs lg:text-[14px] text-center">
          Masukan email yang digunakan untuk mendaftar. Kami akan mengirimkan
          link untuk mengatur ulang password Anda.
        </p>
        <form action="" className="flex flex-col gap-4 mt-7">
          <div className="flex flex-col gap-2">
            <label
            // for="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Masukan email yang digunakan"
              id="email"
              className="border border-gray-200 px-[10px] py-[5px]"
            />
          </div>
          <button className="primary-btn-full">Kirim</button>
          <Link
            to="/sign-in"
            className="text-center hover:underline text-[13px] lg:text-[14px]"
          >
            &laquo; Kembali ke halaman login
          </Link>
        </form>
      </section>
    </main>
  );
}
