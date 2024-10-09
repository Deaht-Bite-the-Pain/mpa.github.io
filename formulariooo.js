window.onload = function() {
    var view = document.getElementById('view');
    var area = document.getElementById('area');
    
    // Cargar el mensaje guardado si existe
    if (localStorage.getItem('userMessage')) {
        view.innerHTML = localStorage.getItem('userMessage');
    }

    view.onclick = edit;
    document.onkeydown = function(e) {
        e = e || window.event;
        // Escape
        if (e.keyCode == 27) {
            cancel();
            return false;
        }
        if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && area.style.display === 'none') {
            edit();
            return false;
        }
        if ((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.style.display !== 'none') {
            save();
            return false;
        }
    }

    function edit() {
        // Ocultar el elemento div
        view.style.display = 'none';
        // Mostrar el campo textarea y ponerle estilos
        area.value = view.innerHTML.trim();
        area.style.display = 'block';
        area.style.height = '100px';
        area.focus();
    }

    function save() {
        // Guardar el mensaje en el Local Storage
        localStorage.setItem('userMessage', area.value);
        // Actualizar el contenido del div y mostrarlo
        area.style.display = 'none';
        view.innerHTML = area.value;
        view.style.display = 'block';
    }

    function cancel() {
        area.style.display = 'none';
        view.style.display = 'block';
    }
}