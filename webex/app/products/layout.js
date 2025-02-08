"use client"
import { db } from "@/db/firebase";
import { collection, getDocs } from "firebase/firestore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const getUniqueCategories = (products = [], productType) => {
    const filteredProducts = products.filter((p) => p.product === productType);
    return Array.from(new Set(filteredProducts.map((p) => p.category)));
  };

function DynamicProductLayout({ children }) {
    const [products, setProducts] = useState([]);
    const pathname = usePathname();
    const productType = pathname?.split("/")[1];
  
    useEffect(() => {
      const fetchAndSetProducts = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "products"));
          const productsList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProducts(productsList);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchAndSetProducts();
    }, []);
  
    const categories = getUniqueCategories(products, productType);
  
    return (
      <div className="min-h-screen text-white">
        <div className="flex">
          <div className="w-full min-h-screen">{children}</div>
        </div>
      </div>
    );
  }
  
  export default DynamicProductLayout;