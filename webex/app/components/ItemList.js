import CardProduct from "./CardProduct";

function ItemList ({productos = []}){
    productos.forEach((product) => {
        console.log("Product ID:", product.id);  // Verifica si los IDs son únicos y válidos
      });

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {productos.length > 0 ? (
                productos.map((product) => <CardProduct key={product.sku || product.id} {...product} /> )
            ) : (
                <p>
                    No hay productos disponibles!
                </p>)}
        </div>
    );
}

export default ItemList;