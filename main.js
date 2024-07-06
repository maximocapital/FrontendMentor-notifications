const numberNotifications = document.querySelector('#number'); 

/**
 * Contar y actualizar no leídos
 */
const countNotRead = () =>
{
   const notReadElements = document.querySelectorAll('.not-read');
   numberNotifications.innerText = notReadElements.length;
}


/**
 * Actualizar a la carga la cantidad de post sin leer
 */
window.onload = () => 
{
   countNotRead();
}


/**
 * Marcar como leído el post al que se le dió click
 */
const posts = document.querySelectorAll('.post');
posts.forEach( post =>
{
   post.addEventListener('click', () =>
   {
      post.querySelector('.status').classList.remove('not-read');
      countNotRead();
   });
});


/**
 * Marcar todos los post como leídos
 */
const markAll = document.querySelector('#mark'); 

markAll.addEventListener('click', () => 
{
   let notReadElements = document.querySelectorAll('.not-read');
   
   notReadElements.forEach(notReadElement => 
   {
      notReadElement.classList.remove('not-read');
   });
   countNotRead();
});