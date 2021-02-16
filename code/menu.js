 menu=document.getElementById('menu');
 nav=document.getElementById('nav');
 max=document.getElementById('max')
 min=document.getElementById('min')
 a=document.getElementsByClassName('list')
     
     
     menu.addEventListener('click',function(){
       nav.classList.toggle('activate')
       max.classList.toggle('maxa')
       min.classList.toggle('mina')
       for(let i=0;i<a.length;i++){
         a[i].classList.toggle('listActive')
       }
     })
     
     
 /*load*/
 window.addEventListener('load',()=>{
   let load=document.getElementById('load')
   let body=document.getElementsByTagName('body')[0];
   
   load.style.display="none";
   body.classList.remove('hidden')
 })