import ItemList from "./ItemList"
import getProducts from "@/actions/getProducts";

async function ItemListContainer({ camProducts }) {
    const { payload: allProducts } = await getProducts();
  
    const filteredProducts = allProducts.filter(
      (product) => product.product === camProducts
    );
  
    return (
      <div className="w-full">
        <ItemList productos={filteredProducts} camProducts={camProducts} />
      </div>
    );
  }

  export default ItemListContainer