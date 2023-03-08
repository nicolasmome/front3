const tripulantes = [
    {nombre:"M", esImpostor: true},
    {nombre:"Mp", esImpostor: true},
    {nombre:"n", esImpostor: false},
]


let tripulacion = triplantes.map (
    tripulante =>
    `${tripulante.nombre} ${tripulante.esImpostor? '' : 'no'} era el impostor`
);