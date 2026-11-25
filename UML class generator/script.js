const title = document.getElementById("title");
const atributes = document.getElementById("topPart");
const classTitle = document.getElementById("classTitle");
const classAttributes = document.getElementById("classAttributes");
const operations = document.getElementById("operations");


title.value = "Name";
atributes.value = "+public\npublic2";
operations.value = "+constructor()";

classTitle.innerHTML = title.value;
classAttributes.innerHTML = atributes.value;

title.onkeydown = () => {
    classTitle.innerHTML = title.value;
}

atributes.onkeydown = () => {
    classAttributes.innerHTML = atributes.value;
}