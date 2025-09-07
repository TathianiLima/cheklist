import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const  inputItem = document.getElementById("input-item")
let contador = 0;

export function criarItemDaLista() {
    
    if(inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }


    const itemDaLista = document.createElement("li");
    const containerIntemDaLista = document.createElement("div");
    containerIntemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function(){
        if(inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none"
        }
    })


    containerIntemDaLista.appendChild(inputCheckbox);
    containerIntemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerIntemDaLista)
    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")

    itemDaLista.appendChild(itemData)

    return itemDaLista;
}