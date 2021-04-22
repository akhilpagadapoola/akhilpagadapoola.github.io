// const search = document.querySelector('.search')
// const btn = document.querySelector('.btn')
// const input = document.querySelector('.input')

// btn.addEventListener('click', () => {
//     search.classList.toggle('active')
//     input.focus()
// })



// $(function() {
//     $('#open').click(function() {
//         $('.container').addClass('show-nav');
      
//     })
//     $('#close').click(function() {
//         $('.container').removeClass('show-nav');
                
//     })
// })


// $(".input").focus()  

$(document).ready(function(){    
    $(".btn").click(function(){    
        $(".search").toggleClass("active");  
        $(".input").focus() ;  
    });    
});    