const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const presult = document.querySelector('#result');
const form = document.querySelector('#formulario');

form.addEventListener('submit', sumarinpuvalues);

function sumarinpuvalues(event){
    console.log(event);
    event.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value);
    presult.innerHTML = "resultado: "+ suma;
}