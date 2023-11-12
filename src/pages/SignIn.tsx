import { useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useUserStore from "../store/user";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  async function doSignIn(email: string, password: string) {
    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      alert(response.data.message);
      localStorage.setItem("token", response.data.payload.token);
      setUser(response.data.payload.user);

      navigate("/");
    } catch (error: any) {
      console.log(error.response.data.message || error);
    }
  }

  return (
    <Layout>
      <main>
        <section className="my-[40px] lg:my-[80px] mx-auto shadow-md border w-full lg:w-[500px] p-[20px]">
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-center">Masuk ke Akun Anda</h3>
            <p className="text-center text-[14px]">
              <span className="mr-1">Belum punya akun?</span>
              <Link
                to="/sign-up"
                className="hover:underline text-brand font-medium"
              >
                Daftar
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 mt-7 w-full">
            <div className="relative w-full">
              <button className="flex items-center border border-gray-400 justify-center w-full px-4 py-2 text-second focus:outline-none font-semibold hover:border-gray-800">
                <img
                  src="/image/ilustrasi/google.svg"
                  width={100}
                  height={100}
                  className="w-[20px] h-[20px] absolute bottom-3 left-4"
                  alt="google"
                />
                Google
              </button>
            </div>

            <div className="flex items-center justify-center my-4 w-full">
              <div className="border-t border-gray-300 w-full"></div>
              <span className="mx-4 text-xs text-gray-500 block min-w-[125px]">
                Atau masuk dengan
              </span>
              <div className="border-t border-gray-300 w-full"></div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[14px]">Email</label>
              <input
                type="email"
                placeholder="Masukan email anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
              />
            </div>
            <div className="flex flex-col gap-1 w-full relative">
              <label className="text-[14px]">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-second placeholder-gray-500 text-second px-4 py-2 w-full bg-transparent focus:outline-none focus:border-brand"
              />
              <Link
                to="/forgot-password"
                className="text-[14px] underline text-right"
              >
                Lupa password?
              </Link>
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inline-block bottom-9 right-5"
              >
                <i
                  className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}
                ></i>
              </button>
            </div>
            <div className="flex flex-col gap-4 w-full mt-5">
              <button
                className="primary-btn-full"
                onClick={() => doSignIn(email, password)}
              >
                Masuk
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
