// todoMain();

// function todoMain() {
    
//         let playerInput,
//         betInput,
//         button,
//         selectElem,
//         todoList = [];
    
    
//         getElements ();
//         addListeners ();
//         renderRows();



//         function getElements(){
//             playerInput = document.getElementById("playerInput");
//             betInput = document.getElementById("betInput");
//             button = document.getElementById("button");
            
//         }

//         function addListeners(){
//             button.addEventListener("click", addEntry, false );
//             selectElem.addEventListener("change", filterEntries, false);
//         }


//         function addEntry(event) {
//             let playerValue = playerInput.value;
//             playerInput.value = "";

//             let betValue = betInput.value;
//             betInput.value = "";

//             let Obj = {
//                 player: playerValue,
//                 bet: betValue,
//             };
//         }

//         renderRows(obj);
//         todoList.push(obj);


//         function renderRows({todo: player, bet}) {
//             let playerElem =  document.getElementById("td");
//             playerElem.innerText = player;
//             trElem.appendchild(playerElem);


//             let betElem =  document.getElementById("td");
//             betElem.innerText = bet;
//             trElem.appendchild(betElem);
//         }
// }

const coin = document.querySelector('.coin');
const  btn = document.querySelector('.spin');


// coin.classList.add('hidden');
coin.src= `handt.png`;
console.log(document.querySelector('.message').textContent)

btn.addEventListener('click', function() {
    document.querySelector('.message').textContent =  "game is in progress";
    const coins= Math.trunc(Math.random() * 2) + 1;
    console.log(coins, typeof coins);

    coin.classList.remove('hidden');
    coin.src= `coin-${coins}.png`;
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
    addtaskinputval = addtaskinput.value;
    addbetInput = betInput.value;
    addchoiceInput = choiceInput .value;
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
        html += `   <tr>
        <th scope="row">${index+1}</th>
        <td>${item}</td>
        
        <td><button type="button" onclick="deleteitem(${index})">Remove</button></td>
    </tr>`;
 
     console.log(item);
    });
    // let betValue =  betInput.value
    // betInput.value = "";
    // let taskObj = {
    //     betInput:betValue,
    // }
    addedtasklist.innerHTML = html;
    // taskObj.push(betInput);
 
    // `   <tr>
    //     <th scope="row">${index+1} ${item} ${index}</th>
    //     <td>${item}</td>
    //     <td><button type="button" onclick="deleteitem(${index})"class="text-danger"><i class="fa fa-trash"></
    //     i>Remove</button></td>
    // </tr>`
}


// deleteitem
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}





