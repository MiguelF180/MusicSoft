let ul=document.getElementById('result');

fetch('json/productos.json')
.then(res=>res.json())
.then(datos=>{
 
 for(let i=0;i<datos.length;i++){
   ul.innerHTML+=`
    <li><div><h2>${datos[i].title}</h2>
    <img src="${datos[i].url}">
    <p>${datos[i].descripcion}</p>
    <button>$${datos[i].valor}</button>
    </div></li>
    
   `
   
 }
 
 
  
})
