const selectRegion=document.querySelector('#region');
const selectProvincia=document.querySelector('#provincia');
const selectComuna=document.querySelector('#comuna');
const inputNombre=document.querySelector('#nombre');
const inputApellidoPaterno=document.querySelector('#apellidoPaterno');
const inputApellidoMaterno=document.querySelector('#apellidoMaterno');
const inputDireccion=document.querySelector('#direccion');


const boton=document.querySelector('#agregar');



function llenaRegion() {
    $.getJSON("./assets/json/region.json", function(region) {
        
        for(var x = 0; x < region.length; x++) {
          $("#region").append("<option id='" + region[x].id + "'>" + region[x].nombre + "</option>");
        }
    });
   
  }

  selectRegion.addEventListener('mouseenter',()=>{
    if(document.querySelector('#region').value=='::Seleccione Región::'){
    llenaRegion();
    }
  }); 
 
 
  function llenaProvincia() {

    /*if(document.querySelector('#region').value=='::Seleccione Región::'){      
        
           $.getJSON("./assets/json/comuna.json", function(provincia) {
            let rev=[];
            for(var x = 0; x < provincia.length; x++) {
              if((!(rev.includes(provincia[x].provincia)))){
              rev.push(provincia[x].provincia);
              $("#provincia").append("<option id='" + provincia[x].region_id + "'>" + provincia[x].provincia + "</option>");}
            }              

                                                                   });
    
    }else{*/ 
      
      const region_id=selectRegion.options[selectRegion.selectedIndex].id;
        $.getJSON("./assets/json/comuna.json", function(provincia) {
            let rev=[];
            for(var x = 0; x < provincia.length; x++) {
              if((region_id==provincia[x].region_id)&&(!(rev.includes(provincia[x].provincia)))){
              rev.push(provincia[x].provincia);
              $("#provincia").append("<option id='" + provincia[x].id + "'>" + provincia[x].provincia + "</option>");}
            }
                                                                   });}

   
                           //   };
  
selectProvincia.addEventListener('mouseenter',()=>{llenaProvincia();});
  
 
/*selectProvincia.addEventListener('input',()=>{

  if((document.querySelector('#region').value=='::Seleccione Región::')&&
  (!(document.querySelector('#provincia').value=='::Seleccione Provincia::')))  {

  const nombreProvincia=document.querySelector('#provincia').value;
  let regionBuscar=0;
  let i=0;
  let j=0;
    $.getJSON("./assets/json/comuna.json", function(provincia) {
            
  do {
  if(nombreProvincia == provincia[i].provincia){
    regionBuscar=provincia[i].region_id;            
                                              }
    i++;  
    } while (regionBuscar<=0);

$.getJSON("./assets/json/region.json", function(region) {
  
     do {
      if(regionBuscar==region[j].id){     
        selectRegion.innerHTML ="<option>" + region[j].nombre + "</option>";
        j=region.length;       
                                     }
     j++;
      } while (j<=region.length);

 
});
        
                                                             });

  }
});*/


function llenaComuna() {

/*if(document.querySelector('#provincia').value=='::Seleccione Provincia::'){

   $.getJSON("./assets/json/comuna.json", function(provincia) {

    for(var x = 0; x < provincia.length; x++) {
      $("#comuna").append("<option>" + provincia[x].nombre + "</option>");
    }
                                                           })
  
}else{*/

  const region_id=selectRegion.options[selectRegion.selectedIndex].id;
  const provincia_nombre=selectProvincia.options[selectProvincia.selectedIndex].value;
  $.getJSON("./assets/json/comuna.json", function(provincia) {
      //let rev=[], rev2=[];
      for(var x = 0; x < provincia.length; x++) {
        if((region_id==provincia[x].region_id)&&(provincia_nombre==provincia[x].provincia)){
        
        $("#comuna").append("<option>" + provincia[x].nombre + "</option>");}
      }
                                                             });//}
                                                        };



    selectComuna.addEventListener('mouseenter',()=>{
    if(document.querySelector('#comuna').value=='::Seleccione comuna::'){
                                                                        llenaComuna();
                                                                        }
  }); 


  /*selectComuna.addEventListener('input',()=>{

    if((document.querySelector('#provincia').value=='::Seleccione Provincia::')&&
    (!(document.querySelector('#provincia').value=='::Seleccione comuna::')))  {
  
    const nombreComuna=document.querySelector('#comuna').value;
    let provinciaBuscar=0;
    let i=0;
    let j=0;
      $.getJSON("./assets/json/comuna.json", function(provincia) {
              
    do {
    if(nombreComuna == provincia[i].nombre){
      provinciaBuscar=provincia[i].provincia;
      //console.log('intento numero : '+i);
      selectProvincia.innerHTML ="<option>" + provincia[j].provincia + "</option>";
      i=provincia.length;             
                                                }
      i++;  
      } while (i<=provincia.length);

      llenaProvincia();

                                                                   });
  
    }
  });*/


  function validar(){
      
      if((selectRegion.value=='::Seleccione Región::')||
         (selectProvincia.value=='::Seleccione Provincia::')||
         (selectComuna.value=='::Seleccione comuna::')||
         (inputNombre.value=='')||
         (inputApellidoPaterno.value=='')||
         (inputApellidoMaterno.value=='')||
         (inputDireccion.value==''))
             {
           alert('Por favor ingrese los datos solicitados ');
          return false;
      
              }else{
                return true;
                   }
            }

            function limpiarCampos(){
              inputNombre.value='';
              inputApellidoPaterno.value='';
              inputApellidoMaterno.value='';
              inputDireccion.value='';
              selectRegion.value='::Seleccione Región::';
              selectProvincia.value='::Seleccione Provincia::';
              selectComuna.value='::Seleccione comuna::';
                                    }
        
                    

        function insertar(){
        
          $("#insertar").append(
            "<tr><td>" + inputNombre.value + "</td>"+ 
            "<td>" + inputApellidoPaterno.value + "</td>"+ 
            "<td>" + inputApellidoMaterno.value + "</td>"+
            "<td>" + inputDireccion.value + "</td>"+
            "<td>" + selectRegion.value + "</td>"+
            "<td>" + selectProvincia.value + "</td>"+ 
            "<td>" + selectComuna.value + "</td></tr>");

                            }

boton.addEventListener('click',()=>{
i=0;
do {
  if(validar()){
    i++;
    insertar();
    limpiarCampos();
               }
  else{
    i=0;
    
      }

} while (i<0);


console.log(inputDireccion.length);





});



