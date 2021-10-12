import { obtenerData } from "../providers/data-provider";
import  "../data/persons.json"


//obtener data desde Persons.json

export const obtenerNuevoArreglo = async () => {
  try {
    const result = await obtenerData('persons.json');
    mostrarHTML(result);
    
  } catch (error) {
    console.log(error);
  }
}

 
let nuevoArray = [];

//mostrar array en la pantalla
export const mostrarHTML = (persons) => {
  
  let html = "";
  let nuevoArray = []

   persons.map((data) => {
// Identificar las personas que no contengan el campo “address” y clonarlos en un nuevo arreglo.
    if (!data["address"]) {
      nuevoArray = [...nuevoArray, data]
    }
  });

   // Ordenar el nuevo arreglo de forma ascendente por el “name”.
  nuevoArray.sort(function (a, b){
    if (a.name == b.name) {
      return 0;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 1;
  });

//filtrar personas que tengan edad entre 20 y 30 años y su nombre empiece por H o L
  const edadNombre = nuevoArray.filter(resp=>(
    resp.age >=20 && resp.age <=30 && resp.name.substr(0,1) == 'H' || resp.name.substr(0,1) == 'L'
  ))

  //iterar Lista
  edadNombre.forEach((resp) => {

    const { name} = resp;

  html += `  
  <p><strong>Nombre:</strong> ${name} </p>
`;
}); 

  personas.innerHTML = html;
}





