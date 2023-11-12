import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import {FaShoppingCart, FaTrash} from 'react-icons/fa';

export default function Wishlist() {
  return (
    <Layout>
      <main>
        <section className="mt-[40px]">
          <h3>Daftar Keinginan (5)</h3>
          <div className="flex justify-start gap-4 items-end mt-8">
            <button className="primary-btn">
              <FaShoppingCart/>
              Tambah semua
            </button>
            <button className="secondary-btn">
              <FaTrash/>
              Hapus semua
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-[10px] mt-6">
            <ProductCard product={{}} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
