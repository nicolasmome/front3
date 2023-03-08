/* ¡No hacer! Este es un componente, por lo que la primera letra
debe ser mayúscula */
function miComponente() {
    /* El uso de div en minúscula sí es correcto
    porque div es una etiqueta válida de HTML */
    
    1
    
    return <div>Soy un componente React</div>;
    }
    
    function miFuncion() {
    /* ¡No hacer! React piensa que <miComponente /> es una
    
    etiqueta HTML
    porque no empieza con mayúscula */
    return <miComponente />;
    }


// -------------------------
    /*JSX acepta anidación, pero la expresión debe tener solo un elemento externo.*/
    const headings = (
        <div id = "outermost-element">
        <h1>Soy un encabezado h1</h1>
        <h2>Soy un encabezado h2</h2>
        </div>
        );
        
       /* Esto no funcionará:*
        const headings = (
        <h1>Soy un encabezado h1</h1>
        <h2>Soy un encabezado*/

//         Esto también es cierto para los manejadores de eventos en JSX. Por ejemplo, esto
    // funciona:
    <button onClick ={handleClick}>Hazme click</button>
    ;


    // Esto no funcionará:
    <button onclick ={handleClick}>Hazme click</button>;