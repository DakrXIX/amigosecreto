let nombres = [];

function agregarNombre() {
    let nombreInput = document.getElementById("nombre");
    let nombre = nombreInput.value.trim();

    if (nombre !== "" && !nombres.includes(nombre)) {
        nombres.push(nombre);
        actualizarLista();
        nombreInput.value = "";
    } else {
        alert("Nombre vacío o ya ingresado.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearNombre() {
    if (nombres.length === 0) {
        alert("Agrega nombres antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `🎉 ¡El nombre elegido es: <strong>${nombreSorteado}</strong>! 🎉`;
}
