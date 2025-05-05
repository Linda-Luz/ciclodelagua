document.addEventListener('DOMContentLoaded', () => {
    const etapasArrastrables = document.querySelectorAll('[draggable="true"]');
    const zonasDestino = document.querySelectorAll('.zona-destino');
    const resultadoTexto = document.getElementById('resultado');

    let elementoArrastrado = null;

    etapasArrastrables.forEach(etapa => {
        etapa.addEventListener('dragstart', (e) => {
            console.log('Evento dragstart disparado en:', e.target.dataset.etapa);
            elementoArrastrado = e.target;
            e.dataTransfer.setData('text/plain', e.target.dataset.etapa);
            e.dataTransfer.effectAllowed = 'move';
        });
    });

    zonasDestino.forEach(zona => {
        zona.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            console.log('Evento dragover disparado sobre:', zona.id);
        });

        zona.addEventListener('drop', (e) => {
            e.preventDefault();
            console.log('Evento drop disparado sobre:', zona.id);
            if (zona.children.length === 0 && elementoArrastrado) {
                const etapaData = e.dataTransfer.getData('text/plain');
                zona.appendChild(elementoArrastrado);
                elementoArrastrado = null;
                verificarOrden();
            }
        });
    });

    function verificarOrden() {
        // ... (tu función verificarOrden)
    }
});