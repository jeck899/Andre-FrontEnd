// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("You Clicked me!");
// })

// button.addEventListener("mouseenter", function(){
//     console.log("You Hovered me!");
// })

var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("mylist");
var deleteButton = document.getElementById("delete")

deleteButton.addEventListener("click", function(){
    checkbox = document.getElementsByClassName("checkbox")
    Object.values(checkbox).forEach(function(data){
        if(data.checked === true){
            data.parentNode.remove()
        }
    })
})


enterButton.addEventListener("click",function(){

    if(input.value.length > 0){
    var cb = document.createElement("input");
    cb.setAttribute("type","checkbox");
    cb.setAttribute("class","checkbox");
    var newli = document.createElement("li"); //create li
    newli.appendChild(cb);
    newli.appendChild(document.createTextNode(input.value)); //create text of li
    newli.style.listStyle="none";
    ul.appendChild(newli);
    input.value = '';
    }
})

input.addEventListener("keypress",function(event){
    // which or keycode
    if(input.value.length > 0 && event.keyCode ===13){
        var cb = document.createElement("input");
        cb.setAttribute("type","checkbox");
        cb.setAttribute("class","checkbox");
        var newli = document.createElement("li"); //create li
        newli.appendChild(cb);
        newli.appendChild(document.createTextNode(input.value)); //create text of li
        newli.style.listStyle="none";
        ul.appendChild(newli);
        input.value = '';
        }

})