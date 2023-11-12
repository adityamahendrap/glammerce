import { useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  async function doSignUp(
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    try {
      const response = await axios.post("/auth/register", {
        name,
        email,
        password,
        confirm_password: confirmPassword,
      });

      alert(response.data.message);

      navigate("/sign-in");
    } catch (error: any) {
      console.log(error.response.data.message || error);
    }
  }

  return (
    <Layout>
      <main>
        <section className="flex gap-[20px] items-center">
          <section className="relative hidden lg:block">
            <img
              src="/image/ilustrasi/shoes.svg"
              width={50}
              height={50}
              className="absolute top-[190px] left-[190px] animate-customBounce"
              alt="register"
            />
            <img
              src="/image/ilustrasi/bag.svg"
              width={50}
              height={50}
              className="absolute top-[190px] right-[170px] animate-customBounce"
              alt="register"
            />
            <img
              src="/image/ilustrasi/ilustrasi-1.svg"
              width={700}
              height={700}
              alt="register"
            />
          </section>

          <section className="my-[40px] lg:my-[80px] mx-auto shadow-md border w-full lg:w-[500px] p-[20px]">
            <div className="flex flex-col gap-1">
              <h3 className="text-center">Daftar Sekarang</h3>
              <p className="text-center text-[14px]">
                <span className="mr-1">Sudah punya akun?</span>
                <Link
                  to="/sign-in"
                  className="hover:underline text-brand font-medium"
                >
                  Masuk
                </Link>
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 mt-7 w-full">
              <div className="relative w-full">
                <button className="flex items-center border border-gray-400 justify-center w-full px-4 py-2 text-second focus:outline-none font-semibold hover:border-gray-800">
                  <img
                    src="/image/ilustrasi/google.svg"
                    width={500}
                    height={500}
                    className="w-[20px] h-[20px] absolute bottom-3 left-4"
                    alt="google"
                  />
                  Google
                </button>
              </div>

              <div className="flex items-center justify-center my-4 w-full">
                <div className="border-t border-gray-300 w-full"></div>
                <span className="mx-4 text-xs text-gray-500 block min-w-[120px]">
                  Atau daftar dengan
                </span>
                <div className="border-t border-gray-300 w-full"></div>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label className="text-[14px]">Nama</label>
                <input
                  type="text"
                  placeholder="Masukan nama anda"
                  className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label className="text-[14px]">Email</label>
                <input
                  type="text"
                  placeholder="Masukan email anda"
                  className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full relative">
                <label className="text-[14px]">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inline-block bottom-3 right-5"
                >
                  {!showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div className="flex flex-col gap-1 w-full relative">
                <label className="text-[14px]">Konfirmasi Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password lagi"
                  className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inline-block bottom-2 right-5"
                >
                  {!showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              <div className="flex flex-col gap-4 w-full mt-5">
                <button
                  className="primary-btn-full"
                  onClick={() =>
                    doSignUp(name, email, password, confirmPassword)
                  }
                >
                  daftar
                </button>
              </div>
              <p className="text-xs text-center w-[300px] lg:w-[400px]">
                Dengan mendaftar, saya menyetujui Syarat dan Ketentuan serta
                Kebijakan Privasi
              </p>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}
