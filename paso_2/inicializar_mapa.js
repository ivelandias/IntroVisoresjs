var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Agrega los controles de edición geométrica
map.pm.addControls({
    position: 'topleft', // Se corrigió la escritura
    drawCircle: false // Desactiva la herramienta de círculos
});

// Arreglos para almacenar capas dibujadas
let drawnLayers = [];
let intersectionsLayers = [];

// Evento para capturar la creación de un nuevo objeto en el mapa
map.on("pm:create", function (e) {
    let myLayer = e.layer; // Se corrigió e.Layer a e.layer

    // Verifica si es un polígono antes de agregarlo a drawnLayers
    if (myLayer instanceof L.Polygon) { // Se corrigió la sintaxis del if
        drawnLayers.push(myLayer); // Agregar al arreglo
        console.info("Has creado un polígono");
    }
});

// Evento para eliminar un objeto del mapa
map.on("pm:remove", function (e) {
    drawnLayers = drawnLayers.filter((layer) => layer !== e.layer);
    console.log("Has borrado un polígono");
});
