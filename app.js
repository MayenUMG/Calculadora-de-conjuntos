let conjuntoA = new Set();
let conjuntoB = new Set();
let resultado = new Set();

function union(conjunto1, conjunto2) {
    const conjuntoUnion = new Set([...conjunto1, ...conjunto2]);
    return Array.from(conjuntoUnion);
}

function interseccion(conjunto1, conjunto2) {
    return [...conjunto1].filter(elemento => conjunto2.has(elemento));
}

function diferencia(conjunto1, conjunto2) {
    return [...conjunto1].filter(elemento => !conjunto2.has(elemento));
}

function esSubconjunto(conjunto1, conjunto2) {
    return [...conjunto1].every(elemento => conjunto2.has(elemento));
}

function actualizarDiagrama() {
    const circleA = document.getElementById('circleA');
    const circleB = document.getElementById('circleB');
    const circleResultado = document.getElementById('circleResultado');

    circleA.textContent = [...conjuntoA].join(', ');
    circleB.textContent = [...conjuntoB].join(', ');
    circleResultado.textContent = [...resultado].join(', ');
}

function procesarFormulario(event) {
    const conjuntoAInput = document.getElementById('conjuntoA');
    const conjuntoBInput = document.getElementById('conjuntoB');

    conjuntoA = new Set(conjuntoAInput.value.split(',').map(item => item.trim()));
    conjuntoB = new Set(conjuntoBInput.value.split(',').map(item => item.trim()));

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (event.target.id === 'union') {
        resultado = union(conjuntoA, conjuntoB);
        resultadoDiv.innerHTML = 'Unión de los conjuntos: ' + resultado.join(', ');
    } else if (event.target.id === 'interseccion') {
        resultado = interseccion(conjuntoA, conjuntoB);
        resultadoDiv.innerHTML = 'Intersección de los conjuntos: ' + resultado.join(', ');
    } else if (event.target.id === 'diferencia') {
        resultado = diferencia(conjuntoA, conjuntoB);
        resultadoDiv.innerHTML = 'Diferencia entre los conjuntos: ' + resultado.join(', ');
    } else if (event.target.id === 'subconjunto') {
        if (esSubconjunto(conjuntoA, conjuntoB)) {
            resultadoDiv.innerHTML = 'El Conjunto A es subconjunto del Conjunto B.';
        } else {
            resultadoDiv.innerHTML = 'El Conjunto A no es subconjunto del Conjunto B.';
        }
    }
    
    actualizarDiagrama();
}

document.getElementById('union').addEventListener('click', procesarFormulario);
document.getElementById('interseccion').addEventListener('click', procesarFormulario);
document.getElementById('diferencia').addEventListener('click', procesarFormulario);
document.getElementById('subconjunto').addEventListener('click', procesarFormulario);

actualizarDiagrama();