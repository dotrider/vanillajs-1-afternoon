// console.log('The house always wins!');

let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');
// console.log(idIn,colorIn);

function setCard(){
    let card = document.getElementById(idInput.value);
    // console.log(card);
    card.style.color = colorInput.value;
}

