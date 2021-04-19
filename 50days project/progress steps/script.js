const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}



//  <script>

// var currentActive = 1;

// $(document).ready(function() {
//     $("#next").click(function() {
//         currentActive ++;
//         if(currentActive > $(".circle").length) {
//             currentActive =  $(".circle").length
//         }
//         $("#prev").removeAttr("disabled","disabled");
//         update(currentActive)
//     });

//     $("#prev").click(function() {
//         currentActive --;
//         if(currentActive < 1) {
//             currentActive = 1
//         }
//          $("#next").removeAttr("disabled","disabled");
//         update(currentActive)
//     });



// function update (currentActive) {
//   $(".circle").each(function() {
//           if(parseInt($(this.html()) === currentActive) {
//           $(this).addClass("active");
//         } else {
//           $(this).removeClass("active");
//         }
          
//   });
//   const actives = $('.active')

//   $(".progress").width(($('.active').length - 1) / ($(".circle").length - 1) * 100 + '%')

//   if(currentActive === 1) {
//     $("#prev").disabled = true
//   } else if(currentActive === $(".circle").length) {
//   $("#next").disabled = true
//   } else {
//   $("#prev").disabled = false
//   $("#next").disabled = false
//   }

// }
// </script> 