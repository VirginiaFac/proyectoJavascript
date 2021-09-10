// boton "KYOTO"

let div = document.getElementById ("kyoto-btn");
let button = document.getElementById ("btn");

$ ('button').on ('click', () => {
    swal("Se ha agregado al carrito KYOTO", {
        buttons: false,
        timer: 1500,
    });
})

console.log (button.innerHTML);


// boton "YOKOHAMA"

let div1 = document.getElementById ("yokohama-btn");
let button1 = document.getElementById ("btn1");

$ ('button1').on ('click', () => {
    swal("Se ha agregado al carrito YOKOHAMA", {
        buttons: false,
        timer: 1500,
    });
})

console.log (button1.innerHTML);


// boton "NARA"

let div2 = document.getElementById ("nara-btn");
let button2 = document.getElementById ("btn2");

button2.addEventListener ('click', function (){
    swal("Se ha agregado al carrito NARA", {
        buttons: false,
        timer: 1500,
    });
})

console.log (button2.innerHTML);




















