// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function contieneNumeros(nombre) {
    return /[0-9]/.test(nombre);
}

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = document.getElementById('amigo').value.trim();

    if (!nombre) {
        alert('Por favor, ingresa un nombre');
        return;
    }

    if (contieneNumeros(nombre)) {
        alert('No se aceptan nombres con número');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya fue agregado.');
        return;
    }

    amigos.push(nombre);
    input.value = '';

    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    cambiarTextoGanador('');
    if (amigos.length <= 1) {
        alert('Necesitas al menos dos amigos para el sorteo.');
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];
    cambiarTextoGanador(`El ganador del sorteo es ${ganador}`);
    bloquearBotonAgregar();
    ocultarBotonReinicio(false);
}

function bloquearBotonAgregar(){
    const botonAgregar = document.getElementById('agregar');
    botonAgregar.setAttribute('disabled', 'true');
}

function habilitarBotonAgregar() {
    const botonAgregar = document.getElementById('agregar');
    botonAgregar.removeAttribute('disabled');
}

function cambiarTextoGanador(nuevoTexto) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = nuevoTexto;
}

function ocultarBotonReinicio(mostrarBoton) {
    const botonReiniciarJuego = document.getElementById('div-reiniciar');
    botonReiniciarJuego.hidden = mostrarBoton;
}

function reiniciarJuego() {
    ocultarBotonReinicio(true);
    amigos = [];
    actualizarLista();
    cambiarTextoGanador('');
    habilitarBotonAgregar();
}