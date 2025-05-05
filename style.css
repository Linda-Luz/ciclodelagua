document.addEventListener('DOMContentLoaded', () => {
    const etapasArrastrables = document.querySelectorAll('[draggable="true"]');
    const zonasDestino = document.querySelectorAll('.zona-destino');
    const resultadoTexto = document.getElementById('resultado');

    let etapaArrastrada = null;

    etapasArrastrables.forEach(etapa => {
        etapa.addEventListener('dragstart', (e) => {
            etapaArrastrada = e.target;
            e.dataTransfer.setData('text/plain', e.target.dataset.etapa);
        });
    });

    zonasDestino.forEach(zona => {
        zona.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        zona.addEventListener('drop', (e) => {
            e.preventDefault();
            if (zona.children.length === 0) {
                const etapaData = e.dataTransfer.getData('text/plain');
                zona.appendChild(etapaArrastrada);
                verificarOrden();
            }
        });
    });

    function verificarOrden() {
        let correcto = true;
        zonasDestino.forEach((zona, index) => {
            if (zona.firstChild && zona.dataset.orden !== (index + 1).toString()) {
                correcto = false;
            } else if (!zona.firstChild && zona.dataset.orden) {
                correcto = false;
            }
        });

        if (correcto && zonasDestino.every(zona => zona.firstChild)) {
            resultadoTexto.textContent = '¡Excelente! ¡Has ordenado el ciclo del agua correctamente!';
            resultadoTexto.style.color = 'green';
        } else if (zonasDestino.every(zona => zona.firstChild)) {
            resultadoTexto.textContent = '¡Inténtalo de nuevo! El orden no es el correcto.';
            resultadoTexto.style.color = 'red';
        } else {
            resultadoTexto.textContent = '';
        }
    }
});