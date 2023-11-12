import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import { useState, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const [search, setSearch] = useState(false);

  function handleToggleSearch() {
    setSearch(!search);
  }

  return (
    <>
      <Navbar onToggleSearch={handleToggleSearch}/>
      <SearchBox search={search} onToggleSearch={handleToggleSearch} />
      {children}
      <Footer />
    </>
  );
}
