const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


// $(function() {
//     $('.panel').click(function() {
//         $('.panel').removeClass('active');
//         $(this).addClass('active');
//     })
// })