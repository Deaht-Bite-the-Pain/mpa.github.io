document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const pais = document.getElementById('pais').value;
    const mensaje = document.getElementById('mensaje').value.trim();

   
    if (!nombre || !email || !pais || !mensaje) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    
    alert(`Gracias, ${nombre}. Su consulta ha sido enviada exitosamente.`);

   
    document.getElementById('formularioContacto').reset();
});
