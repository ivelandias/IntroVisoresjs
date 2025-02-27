let centroides=document.getElementById("centroid");
centroides.addEventListener('click', function(){
    console.log("Vamos a a calcular los centroides")
    detectCentroids();
})

let areas=document.getElementById("areas");
areas.addEventListener('click', function (){
    console.log("Vamos a calcular areas")
    calculateAreas();
})


let centroid_distance=document.getElementById("centroid_distance");
centroid_distance.addEventListener('click', function (){
    console.log("Vamos a calcular distancia entre centroides")
    calculateDistance();
})
