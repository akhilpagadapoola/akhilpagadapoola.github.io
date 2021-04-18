const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))


// $(function() {
//     $('.open').click(function() {
//         $('.open').addClass('show-nav');
//       
//     })
// })


// $(function() {
//     $('.close').click(function() {
//         $('.close').removeClass('show-nav');
//       
//     })
// })