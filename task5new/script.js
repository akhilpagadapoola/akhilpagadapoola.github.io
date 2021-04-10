showtask();
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function(){
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim()!=0){
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
                taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(addtaskinputval);
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





