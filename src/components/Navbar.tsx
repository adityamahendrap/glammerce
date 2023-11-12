import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import useUserStore from "../store/user.ts";
import axios from "axios";

interface INavbarProps {
  onToggleSearch: () => void;
}

export default function Navbar({ onToggleSearch }: INavbarProps) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [height, setHeight] = useState(0);
  const path = window.location.pathname;
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();

  async function fetchUser() {
    try {
      const response = await axios.get("/auth/me");
      if (!response.data.payload) {
        localStorage.removeItem("token");
        setUser(null);
      }
      setUser(response.data.payload);
    } catch (error: any) {
      console.log(error.response.data.message || error);
    }
  }

  useEffect(() => {
    fetchUser();
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const heightToHideFrom = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isScrolled && setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  return (
    <>
      {/* desktop */}
      <nav
        className={
          (!isScrolled
            ? "bg-white shadow-lg py-[10px] "
            : "py-[20px] lg:py-[25px] ") +
          "px-4 lg:px-[100px] transition-all duration-300 flex items-center w-full justify-between fixed top-0 left-0 z-[9] "
        }
      >
        <Link to="/">
          <h3 className="text-brand">Glammerce</h3>
        </Link>
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/"
            title="Home"
            className={
              "hover:font-bold transition-all duration-75 w-min tracking-[3%] uppercase " +
              (path == "/" ? "font-bold" : "")
            }
          >
            Home
          </Link>
          <Link
            to="/products"
            title="Produk"
            className={
              "hover:font-bold transition-all duration-75 w-min tracking-[3%] uppercase " +
              (path == "/products" ? "font-bold" : "")
            }
          >
            Produk
          </Link>
        </div>
        <div className="flex text-[13px] lg:text-base items-center gap-3 lg:gap-4">
          <div
            className="hover:text-brand cursor-pointer"
            onClick={onToggleSearch}
          >
            <FaSearch />
          </div>
          <Link to="/cart" className="hover:text-brand">
            <FaShoppingCart />
          </Link>
          <Link to="/wishlist" className="hover:text-brand">
            <FaHeart />
          </Link>
          {user ? (
            <button
              className="transparent-btn hover:underline"
              onClick={() => logout()}
            >
              Log out
            </button>
          ) : (
            <Link to="/sign-in" className="hidden lg:block">
              <button className="transparent-btn hover:underline">
                Sign In
              </button>
            </Link>
          )}
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="lg:hidden"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* mobile */}
      <section
        className={
          toggleMenu
            ? "opacity-100"
            : "opacity-0 -top-[200px]" +
              " hidden fixed top-0 left-0 w-full h-max bg-white z-[10] shadow-md px-4 py-4 transition-all duration-300"
        }
      >
        <div className="flex items-center justify-between py-[10px]">
          <h3 className="text-brand">Glammerce</h3>
          <button onClick={() => setToggleMenu(false)}>
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col gap-4 text-xs">
          <Link to="./index.html" className="font-bold tracking-[3%] uppercase">
            Home
          </Link>
          <Link
            to="./products.html"
            className="font-medium tracking-[3%] uppercase"
          >
            Produk
          </Link>
          <Link
            to="./articles.html"
            className="font-medium tracking-[3%] uppercase"
          >
            Artikel
          </Link>
          <Link
            to="./login.html"
            className="font-medium tracking-[3%] uppercase"
          >
            Sign In
          </Link>
        </div>
      </section>
    </>
  );
}
