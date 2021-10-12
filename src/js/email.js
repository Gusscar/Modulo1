import { obtenerData } from "../providers/data-provider";

//obtener data desde el emails.json y persons.json
export const obtenerDatos= async () => {
  try {
    const emails = await obtenerData('emails.json');
    const personas = await obtenerData('persons.json');
    validarEmail(emails, personas)
    
  } catch (error) {
    console.log(error);
  }
}

//validacion de los email
export const validarEmail = (emails, personas) => {
  let asociados = [];
  let validos = [];
  let noValidos = [];
  let noAsociados =[];
  let emailsP = [];

  //identifica que emails estan asociados a una persona
  personas.map((pers)=>{
    emailsP = [...emailsP, pers.email];
    emails.map((email) =>{
        if(pers.email === email){
          asociados = [...asociados, pers];
        }    
    })
  })

  //identifica los emails válidos y no válidos en emails.json
  emails.map((email)=>{
    if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
      validos = [...validos, email];
    }else{
      noValidos = [...noValidos, email];
    }
  })

  noAsociados = emails.filter(elemento => emailsP.indexOf(elemento) == -1);

  //muestra la informacion en el dom
  mostrarValidos(asociados);
  mostrarNoValidos(noValidos);
  mostrarNoAsociados(noAsociados);

  }


export const mostrarValidos = (persons) => {
  let html = "";

  persons.map((data) => {
    const { name} = data;
    html += `  
    <p><strong>Nombre:</strong> ${name} </p>
`;

  });
  validos.innerHTML = html;
}
export const mostrarNoValidos = (emails) => {
  let html = "";

  emails.map((data) => {

    html += `  
    <p> ${data} </p>
`;

  });
  novalidos.innerHTML = html;
}

export const mostrarNoAsociados = (emails) => {
  let html = "";

  emails.map((data) => {

    html += `  
    <p> ${data} </p>
`;

  });
  noasociados.innerHTML = html;
}
