const tripulantes = [
    {nombre:"M", esImpostor: true},
    {nombre:"Mp", esImpostor: true},
    {nombre:"n", esImpostor: false},
]


// CON IDs
let tripulacion =tripulantes.map(

    tripulante => <StatusTripulante key ={tripulante.id}
    {...tripulante}/>
);

lista = <ul>{tripulacion} </ul>

//SIN IDs
let tripulacionSinId =tripulantes.map(

    (tripulante, index) => <StatusTripulante key ={index}
    {...tripulante}/>
);

lista = <ul>{tripulacion} </ul>


