
'use strict'

// const coin = document.querySelector('.coin');
// const  btn = document.querySelector('.spin');


// // coin.classList.add('hidden');
// coin.src= `handt.png`;
// console.log(document.querySelector('.message').textContent)

// btn.addEventListener('click', function() {
//     document.querySelector('.message').textContent =  "game is in progress";
//     const coins= Math.trunc(Math.random() * 2) + 1;
//     console.log(coins, typeof coins);

//     coin.classList.remove('hidden');
//     coin.src= `coin-${coins}.png`;
// });

const  btn = document.getElementById('spin-btn');

btn.addEventListener('click', function() {
    let coin=["H","T"];
    let coins=Math.trunc(Math.random() * 2) 
    
    setTimeout(() => {
        if (coins === 1) {
            document.getElementById("headortails").textContent = "H"
        } else {
            document.getElementById("headortails").textContent = "T"
        }
    }, 3000);

    document.querySelector('.spin-loading').innerHTML = 'Spinning in progress...Wait for 3 seconds'
    setTimeout(() => {
        document.querySelector('.spin-loading').style.display = "none";
        document.getElementById('game').textContent = 'game is in progress'
    }, 3000);
    

 
});

showtask();
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");
let betInput = document.getElementById("betInput");
let choiceInput = document.getElementById("choice");
let names = document.getElementById("names");
let bet = document.getElementById("bet");
let choice =  document.getElementById("choice");


addtaskbtn.addEventListener("click", function(){
    let taskObj;
    let addtaskinputval = addtaskinput.value;
    let addbetInput = betInput.value;
    let addchoiceInput = choiceInput .value;
    if((addtaskinputval.trim() && addbetInput.trim() && addchoiceInput.trim() ) !=0 ){
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
                taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(addtaskinputval,addbetInput,addchoiceInput);
        localStorage.setItem("localtask", JSON.stringify(taskObj));  
    }
    showtask();

})
function showtask(){
    let taskObj;
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
            taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    <td>${item}</td>
                    <td><button type="button" onclick="deleteitem(${index})"class="text-danger"><i class="fa fa-trash"></
                    i>Remove</button></td>
                </tr>`;

    });
    addedtasklist.innerHTML = html;
}


// deleteitem
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}





