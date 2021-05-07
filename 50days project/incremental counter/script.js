const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200
        console.log(increment);

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})


// $(document).ready(function() {
//     $('.counter').each(function() {
//         $(this).text('0')

//         const updateCounter = () => {

//             const target = +($('.counter').attr('data-target'))
//             // console.log(target, typeof target);
//             const c = +($('.counter').text())
//             // console.log(c, typeof c);
            

//             const increment = target / 200
//             console.log(increment);
    
//             if(c < target) {
//                 // const final = `${Math.ceil(c + increment)}`
//                 var value = parseInt(`${Math.ceil(c + increment)}`)
//                 $('.counter').text(value)
//                 setTimeout(updateCounter, 1)
//             } else {
//                 $('.counter').text(target)
//             }
//         }
    
//         updateCounter()
//     });
// });


// $(document).ready(function () {
//     $(".counter").each(function () {
//       var $this = $(this),
//         target = $this.attr("data-target");
  
//       $({ countNum: $this.text() }).animate(
//         {
//           countNum: target,
//         },
//         {
//           increment: target / 200,
//           step: function () {
//             $this.text(Math.ceil(this.countNum));
//           },
//           complete: function () {
//             $this.text(this.countNum);
//           },
//         }
//       );
//     });
//   });


