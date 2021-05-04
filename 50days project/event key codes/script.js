// const insert = document.getElementById('insert')

// window.addEventListener('keydown', (event) => {
//   insert.innerHTML = `
//   <div class="key">
//   ${event.key === ' ' ? 'Space' : event.key} 
//   <small>event.key</small>
// </div>
// <div class="key">
//   ${event.keyCode}
//   <small>event.keyCode</small>
// </div>
// <div class="key">
//   ${event.code}
//   <small>event.code</small>
// </div>
//   `
// }



$(document).ready(function(){
  $(window).keydown(function(event) {
      $('#insert').html(` <div class="key">
         ${event.key === ' ' ? 'Space' : event.key} 
         <small>event.key</small>
       </div>
       <div class="key">
         ${event.keyCode}
         <small>event.keyCode</small>
       </div>
       <div class="key">
         ${event.code}
         <small>event.code</small>
       </div> `);
   
  });
})