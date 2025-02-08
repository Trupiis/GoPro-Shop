import CardProduct from "./CardProduct";
import Loading from "../products/loading";

function ItemList ({productos = []}){
    productos.forEach((product) => {
        console.log("Product ID:", product.id);
      });

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {productos.length === 0 ? (
                <Loading/>
            ) : (
                productos.map((product) => <CardProduct key={product.sku || product.id} {...product} /> ))}
        </div>
    );
}

export default ItemList;