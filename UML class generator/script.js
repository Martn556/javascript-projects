const title = document.getElementById("title");
const atributes = document.getElementById("topPart");
const classTitle = document.getElementById("classTitle");
const classAttributes = document.getElementById("classAttributes");
const operations = document.getElementById("operations");
const classOperations = document.getElementById("classOperations");


title.value = "Name";
atributes.value = "+public\npublic2";
operations.value = "+constructor()";

classTitle.innerText = title.value;
classAttributes.innerText = atributes.value;
classOperations.innerText = operations.value;

title.onkeydown = () => {
    classTitle.innerText = title.value;
}

atributes.onkeydown = () => {
    classAttributes.innerText = atributes.value;
}

operations.onkeydown = () => {
    classOperations.innerText = operations.value;
}

title.onkeyup = () => {
    classTitle.innerText = title.value;
}

atributes.onkeyup = () => {
    classAttributes.innerText = atributes.value;
}

operations.onkeyup = () => {
    classOperations.innerText = operations.value;
}