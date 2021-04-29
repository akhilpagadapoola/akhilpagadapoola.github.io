const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}


// $(function () {
//     $('.applause', '.boo', '.gasp', '.tada', '.victory', '.wrong').click(function () {
//         $('.button').addClass('btn').text('sound');
             
//         // btn.innerText = sound
//         // $('.btn').text=sound
//         $('.button').click(function (){
//             stopSongs()
//             document.getElementById(sound).play()
//         }) 

//         document.getElementById('buttons').appendChild(btn)
//         // $( '.button').append( $( "btn" ) );
//     })
// })

// function stopSongs() {
//     $('.applause', '.boo', '.gasp', '.tada', '.victory', '.wrong').click(function () {
//         const song = document.getElementById(sound)

//         song.pause()
//         song.currentTime = 0;
//     })

//   }