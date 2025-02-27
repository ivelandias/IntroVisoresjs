function detectCentroids(){
    drawnLayers.forEach(
        function (layer){
            try { 

                let centroid = turf.centroid(layer.toGeoJSON());
                L.geoJSON(centroid, {
                    style: {
                        color: "red",
                        fillColor:"green"
                    }
                }).addTo(map);
                console.log(centroid);

            }catch(error){

                console.warn("Error al detectar centroides", error);

            }
        }
    )
}


function calculateAreas (){

    drawnLayers.forEach(
        function(layer){
            try {
                let area = turf.area(layer.toGeoJSON());
                let centroid=turf.centroid(layer.toGeoJSON());
                x=centroid.geometry.coordinates[1];
                y=centroid.geometry.coordinates[0];
                
                L.marker([x,y],{
                    icon: L.divIcon(
                        {
                            className:"area_label",
                            html: `${area} m2 `                     }
                    )
                    }
                )

                console.log(area);

            } catch (error) {
                console.warn ("Error al detectar areas", error)

            }
        }
    )
}

function calculateDistance() {
    if (drawnLayers.length < 2) {
        console.warn("Debe haber al menos dos polígonos para calcular la distancia.");
        return;
    }

    try {
        let centroids = drawnLayers.map(layer => turf.centroid(layer.toGeoJSON()));

        // Tomamos los primeros dos centroides para calcular la distancia
        let distance = turf.distance(centroids[0], centroids[1], { units: 'kilometers' });

        // Coordenadas del punto medio para mostrar la distancia en el mapa
        let midPoint = turf.midpoint(centroids[0], centroids[1]);

        let x = midPoint.geometry.coordinates[1];
        let y = midPoint.geometry.coordinates[0];

        // Crear un marcador en el punto medio con la distancia
        L.marker([x, y], {
            icon: L.divIcon({
                className: "distance-label",
                html: `${distance.toFixed(2)} km`,
                iconSize: [100, 40]
            })
        }).addTo(map);

        console.log(`Distancia: ${distance.toFixed(2)} km`);


    } catch (error) {
        console.warn("Error al calcular la distancia:", error);
    }
}