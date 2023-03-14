// MOSTRAR Y OCULTAR LA BARRA DEL MENU

document.addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu');
    const menu_items = document.querySelector('.menu_items');
    const menu_links = document.querySelectorAll('.menu_items a');

    btn_menu.addEventListener('click', () => {
        menu_items.classList.toggle('mostrar');
    });

    menu_links.forEach((link) => {
        link.addEventListener('click', () => {
        menu_items.classList.remove('mostrar');
    });
    });
});

//VALIDACION DE FORMULARIO 

const nombre = document.querySelector('input[name="Nombre"]');
const correo = document.querySelector('input[name="correo"]');
const telefono = document.querySelector('input[name="Telefono"]');
const mensaje = document.querySelector('textarea[name="Mensaje"]');
const botonEnviar = document.querySelector('#boton_enviar');

function validarFormulario() {
let errores = [];

if (nombre.value.trim() === '') {
    errores.push('El campo Nombre es obligatorio');
}

if (correo.value.trim() === '') {
    errores.push('El campo Correo es obligatorio');
} else if (!validarCorreo(correo.value)) {
    errores.push('El formato del correo es inválido');
}

if (telefono.value.trim() === '') {
    errores.push('El campo Teléfono es obligatorio');
} else if (!validarTelefono(telefono.value)) {
    errores.push('El formato del teléfono es inválido');
}

if (mensaje.value.trim() === '') {
    errores.push('El campo Mensaje es obligatorio');
}

if (errores.length > 0) {
    alert(errores.join('\n'));
} else {
    alert('El formulario se ha enviado correctamente');

}
}

function validarCorreo(correo) {
    const patron = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return patron.test(correo);
}

function validarTelefono(telefono) {
    const patron = /^[0-9]{7,14}$/;
return patron.test(telefono);
}

botonEnviar.addEventListener('click', validarFormulario);

