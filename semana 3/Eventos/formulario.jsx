export default function App() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // Creamos un manejador de eventos para cada uno de los inputs
    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    // Creamos el manjeador para el evento onSubmit
    const onSubmitForm = (e) => {
    // Evitamos que se recargue la pagina
    // previniendo el comportamiento por
    // defecto
    e.preventDefault();
    
    // Por ahora solo mostramos el nombre del usuario
    alert(`Bienvenido: ${userName}`);
    };
}
    export default function App() {
        // ... Aquí va el estado y los manejadores de eventos
        return (
            <div className="App">
            <h3>Iniciar Sesión</h3>
            {/* Pasamos nuestro manejador al evento onSubmit */}
            <form onSubmit={onSubmitForm}>
            {/*
            Creamos dos inputs controlados
            pasando el estado como value y el manejador
            al evento onChange
            */}
            <input
            type="text"
            placeholder="Nombre de usuario"
            value={userName}
            onChange={onChangeUserName}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
            />
            {/*
            Mediante el type nos aseguramos que
            se dispare el evento onSubmit al hacer click
            en el botón
            */}
            <button type="submit">Enviar</button>


            </form>
</div>
);
}