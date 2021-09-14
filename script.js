



function add(){
    const Input = document.getElementById("task");
    const field = document.getElementById("inputfield");
    const newElement = document.createElement("h3")
    newElement.innerHTML=Input.value;
    field.appendChild(newElement);

}

function remove(){
    const e = document.getElementsByTagName("h3");
    e[0].remove();
}
