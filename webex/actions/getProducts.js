
async function getProducts(categoria) {
  try {

    const url = "/api/products";

    const response = await fetch(url);
    console.log("Response status:", response.status);
    console.log("Response headers:", [...response.headers]);

    

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("La respuesta no es JSON");
    }


    const data = await response.json();
    console.log("Response JSON:", data);

if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error en la API: ${response.status} - ${errorText}`);
      throw new Error(`Error al obtener productos: ${response.status}`);
    }

    return {
      payload: data.payload, // Asegúrate de pasar el contenido correcto
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
