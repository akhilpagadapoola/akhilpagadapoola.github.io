// const toggle = document.getElementById('toggle')
// const nav = document.getElementById('nav')

// toggle.addEventListener('click', () => nav.classList.toggle('active'))



$(document).ready(function(){    
    $("#toggle").click(function(){    
        $("#nav").toggleClass("active");  
         
    });    
});    