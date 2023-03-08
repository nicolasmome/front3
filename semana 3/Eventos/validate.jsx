// Creamos una funcion para validar el nombre de usuario
const validateUserName = (userName) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = userName.trim();
    // Validamos la extension
    if (wihtoutSpaces.length > 2) {
    return true;
    } else {
    return false;
    }
    };

// Creamos una funcion para validar el password
const validatePassword = (password) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = password.trim();
    // Separamos el string en un array para luego
    // recorrelo y validar si existe al menos un numero
    const passwordAsArray = withoutSpaces.split("");
    // Some nos retorna true si al menos una de las
    // iteraciones es verdadera
    const hasNumber = passwordAsArray.some((character) => {
    // Si el valor es NaN, no es un numero
    if (isNaN(character)) {
    return false;
    } else {
        return true;
}
    });
    // Validamos la extension y que haya al menos un numero
    if (withoutSpaces.length > 5 && hasNumber) {
        return true;
        } else {
        return false;
        }
};

const onSubmitForm = (e) => {
    e.preventDefault();
    
    // Realizamos las validaciones con los valores almacenados
    // en el estado
    const isUsernameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);
    
    // Si al menos una de las validaciones es falsa
    // mostramos un mensaje de error
    if (!isPasswordValid || !isUsernameValid) {
    alert("Alguno de los datos ingresados no son correctos");
    } else {
    // Por ahora solo mostramos el nombre del usuario
    alert(`Bienvenido: ${userName}`);
    }
    };