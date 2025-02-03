import CardProduct from "./CardProduct";

function ItemList ({productos = []}){
    const productosEnOferta = productos.filter(product => product.enOferta);

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosEnOferta.length > 0 ? (
                productosEnOferta.map((product) => <CardProduct key={product.id} {...product} />)
            ) : (
                <p>
                    No hay productos en oferta!
                </p>)}
        </div>
    );
}

export default ItemList;