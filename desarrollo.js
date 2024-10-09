
function Desarrollador(nombre, apellido, foto, rol, redes) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.foto = foto; 
    this.rol = rol;
    this.redes = redes;
}

function crearTarjetaDesarrollador(desarrollador) {
    const contenedor = document.getElementById('contenedor-desarrolladores');
    
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-desarrollador');

    const img = document.createElement('img');
    img.src = desarrollador.foto;
    img.alt = `${desarrollador.nombre} ${desarrollador.apellido}`;

    const nombreCompleto = document.createElement('h2');
    nombreCompleto.textContent = `${desarrollador.nombre} ${desarrollador.apellido}`;

    const rol = document.createElement('p');
    rol.textContent = desarrollador.rol;
    rol.classList.add('rol-desarrollador');

    const enlacesSociales = document.createElement('div');
    enlacesSociales.classList.add('enlaces-sociales');
    desarrollador.redes.forEach(red => {
        const a = document.createElement('a');
        a.href = red.url;
        a.textContent = red.nombre;
        enlacesSociales.appendChild(a);
    });

    tarjeta.appendChild(img);
    tarjeta.appendChild(nombreCompleto);
    tarjeta.appendChild(rol); // Añadido el rol debajo del nombre
    tarjeta.appendChild(enlacesSociales);

    contenedor.appendChild(tarjeta);
}

const desarrolladores = [
    new Desarrollador('Abel', 'Lopez', 'img/abel.jpeg', 'Creador de las páginas de cada departamento, menú y documentación. ', [
        { nombre: 'Instagram', url: 'https://www.instagram.com/rei_lopez_/' },
        { nombre: 'Twitter', url: 'https://www.twitter.com' }
    ]),
    new Desarrollador('Julian', 'Santacruz', 'img/foto2.jpg', 'Creador del mapa, submenús y documentación.', [
        { nombre: 'Instagram', url: 'https://www.instagram.com/andres_05030/' },
        { nombre: 'Twitter', url: 'https://www.twitter.com' }
    ]),
    new Desarrollador('Samuel', 'Escobar', 'img/foto1.jpg', 'Creador de la sección de desarrolladores, el formulario de contacto y documentación.', [
        { nombre: 'Instagram', url: 'https://www.instagram.com/samuelarl9/profilecard/?igsh=aHQzZ2pkaWZmcjd5' },
        { nombre: 'Twitter', url: 'https://www.twitter.com' }
    ])
];

desarrolladores.forEach(desarrollador => crearTarjetaDesarrollador(desarrollador));
