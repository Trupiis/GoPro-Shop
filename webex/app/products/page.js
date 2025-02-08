"use client"

import { useEffect, useState } from "react";
import getProducts from "@/actions/getProducts";
import CardProduct from "../components/CardProduct";
import ItemList from "../components/ItemList";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data.payload);
    }
    fetchData();
  }, []);

  return (
    <div className="pb-20 min-h-screen bg-gradient-to-br from-[#260d30] to-[#0076c5] p-20">
      {products.length > 0 ? (
        <ItemList productos={products}/>
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
}

export default ProductsPage;
