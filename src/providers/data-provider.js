
export const obtenerData = async (dataJson) => {
  try {
    const url = `/src/data/${dataJson}`;
    let response = await fetch(url);
    return await response.json();
    
  } catch (error) {
    return error;
  }
  }

