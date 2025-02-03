
async function getProducts(categoria) {
  try {
    const isProduction = process.env.NODE_ENV === 'production';
    const ApiBaseUrl = isProduction
      ? 'http://localhost:3000/products'
      : 'http://localhost:3000';

    const url = categoria ? `${ApiBaseUrl}?category=${categoria}` : `${ApiBaseUrl}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }

    const { payload: products } = await response.json();

    return {
      payload: products,
      message: 'Se obtuvieron los productos',
      error: false,
    };
  } catch (error) {
    console.error('Error en getProducts:', error);

    return {
      payload: null,
      message: 'No se pudieron obtener los productos',
      error: true,
    };
  }
}

export default getProducts;
