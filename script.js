function scrollToElement(elementSelector, instance = 0) {
    // Selecciona todos los elementos que coinciden con el selector dado
    const elements = document.querySelectorAll(elementSelector);
    // Verifica si hay elementos que coincidan con el selector y si la instancia solicitada existe
    if (elements.length > instance) {
        // Hace scroll hacia la instancia especificada del elemento
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

// Obtener los enlaces por su ID
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

// Agregar eventos de clic a los enlaces
link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Hacer scroll al segundo elemento con la clase "header"
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

/**
 * Función para hacer scroll hacia un elemento específico
 * @param {string} elementSelector Selector CSS del elemento al que se desea hacer scroll
 * @param {number} instance Instancia del elemento si hay múltiples elementos que coinciden con el selector
 */
function scrollToElement(elementSelector, instance = 0) {
    // Seleccionar todos los elementos que coinciden con el selector
    const elements = document.querySelectorAll(elementSelector);
    // Verificar si la instancia solicitada existe
    if (elements.length > instance) {
        // Hacer scroll hacia la instancia especificada del elemento
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}


