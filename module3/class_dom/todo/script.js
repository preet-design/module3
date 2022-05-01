
let input = document.querySelector("input");
let ul = document.querySelector("ul");

input.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == 'Enter'){
        let value = input.value;
        input.value=" ";
        
        let li=document.createElement("li");
       
        li.innerHTML= `<div>${value}</div>
        <div class="delete"><i class="fa fa-trash"></i></div>`

//other way
// liTag.innerHTML = "<div>"+value+"</div><div><i class='fa fa-trash'></i></div>"
        handleRemoval(li);
        ul.appendChild(li);


    }
})

function handleRemoval(li) {
    let editlist = li.querySelector(".delete");
    editlist.addEventListener("click", function () {
        ul.remove(li);
    });
}
