// con Callbacks
const estados = ['Instalando', 'Instalado', 'Activación', 'Activado', 'Ocioso' /*,'Pepito'*/];

function esperar(tiempo, callback) {
    setTimeout(() => {
        callback();
    }, tiempo * 100);
}

function mostrarEstados(estados, indice = 0, resultado = '') {
    if (indice >= estados.length) {
        console.log('Proceso completado');
        return;
    }

    const estado = estados[indice];

    if (estado === 'Pepito') {
        console.error('Error: Estado inválido');
        return;
    }

    resultado += resultado ? ' | ' + estado : estado;
    console.log(resultado);

    esperar(estado.length, () => {
        mostrarEstados(estados, indice + 1, resultado);
    });
}


mostrarEstados(estados);

//OPCION 2 CON PROMESAS
/*
function esperar(tiempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, tiempo * 100);
    });
}

async function mostrarEstados() {
    const estados = ['instalando', 'Instalado', 'Activación', 'Pepito', 'Activado', 'Ocioso'];
    let resultado = '';

    for (const estado of estados) {
        if (estado === 'Pepito') {
            throw new Error('Estado inválido');
        }
        resultado += resultado ? ' | ' + estado : estado;
        console.log(resultado);
        await esperar(estado.length); // Espera X tiempo (milisegundos) = al # de caracteres del estado
    }
}
    mostrarEstados().catch(console.error);
*/