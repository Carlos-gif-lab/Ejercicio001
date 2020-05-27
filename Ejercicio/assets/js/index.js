/*fetch('./assets/json/region.json')
.then(res=>res.json)
.then(data=>{console.log(data)})
.catch(err=>console.error(err));*/

/*$.getJSON('./assets/json/region.json',function(data){
$.each(data, function(key,value){})
});*/

console.log('hay viene');

$(document).ready(function(){
    $('button').click(function(){
                                alert($('#UNW').attr('href'));
                                });
   });

