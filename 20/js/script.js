class Usuario {

    id;
    rol;
    nombre;
    apellido;
    correo;
    telefono;
    direccion;
    fecha_nacimiento;
    contrasena;

    constructor(id, rol, nombre, apellido, correo, telefono, direccion, fecha_nacimiento, contrasena) {
        this.id = id;
        this.rol = rol;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.fecha_nacimiento = fecha_nacimiento;
        this.contrasena = contrasena;
    }

    getId() {
        return this.id;
    }

    getRol() {
        return this.rol;
    }

    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getCorreo() {
        return this.correo;
    }

    getTelefono() {
        return this.telefono;
    }

    getDireccion() {
        return this.direccion;
    }

    getFechaNacimiento() {
        return this.fecha_nacimiento;
    }

    getContrasena() {
        return this.contrasena;
    }

    setId(id) {
        this.id = id;
    }

    setRol(rol) {
        this.rol = rol;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    setCorreo(correo) {
        this.correo = correo;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }

    setFechaNacimiento(fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    setContrasena(contrasena) {
        this.contrasena = contrasena;
    }
}

function iniciarSesion() {
    var user = document.getElementById("user-login").value;
    var password = document.getElementById("password-login").value;
    if (user.trim() === "") {
        alert("[ERROR]: Nombre de usuario vacío. Debe rellenar el campo.");
        document.getElementById("user-login").focus();
    } else if (password.trim() === "") {
        alert("[ERROR]: Contraseña vacía. Debe rellenar el campo.");
        document.getElementById("password-login").focus();
    } else {
        if (user === "admin" && password === "admin123") {
            localStorage.setItem("user", JSON.stringify(new Usuario(0, "Administrador", "Administrador", "", "admin@gmail.com", "", "", "admin123")));
            location.href = "../menu.html";
        } else if (JSON.parse(localStorage.getItem("users_list"))) {
            var usuario_encontrado = "";
            JSON.parse(localStorage.getItem("users_list")).forEach(function (usuario) {
                if (usuario.correo === user && usuario.contrasena === password) {
                    usuario_encontrado = usuario;
                }
            });
            if (usuario_encontrado) {
                if(usuario_encontrado.rol === "Administrador" || usuario_encontrado.rol === "Gerente"){
                    localStorage.setItem("user", JSON.stringify(usuario_encontrado));
                    location.href = "../menu.html";
                }else{
                    alert("[ERROR]: El usuario no cuenta con los permisos necesarios.");
                }
            }else{
                alert("[ERROR]: Usuario y/o contraseña incorrectos.");
            }
        }
        else {
            alert("[ERROR]: Usuario y/o contraseña incorrectos.");
        }
    }
}

function cargarNombreUsuario() {
    var usuario = JSON.parse(localStorage.getItem("user"));
    document.getElementById("username_dashboard").innerHTML = (usuario.nombre + " " + usuario.apellido).trim();
}

function cargarTablaUsuarios() {
    var esAdmin = JSON.parse(localStorage.getItem("user")).rol === "Administrador";
    if(esAdmin){
        document.getElementById("boton-crear-usuario").innerHTML = '<a href="./crear_usuario.html" class="btn btn-primary" type="button">Crear usuario</a>';
    }
    if (!JSON.parse(localStorage.getItem("users_list"))) {
        document.getElementById("tabla_vacia").innerText = "[INFO]: No hay usuarios guardados en el sistema.";
    } else {
        document.getElementById("tabla_vacia").innerText = "";
        var encabezado_tabla = '<tr>' +
            '<th>No.</th>' +
            '<th>Rol</th>' +
            '<th>Nombre</th>' +
            '<th>Apellido</th>' +
            '<th>Correo</th>' +
            '<th>Teléfono</th>';
        if (esAdmin) {
            encabezado_tabla += '<th>Modificar</th>' +
                '<th>Eliminar</th>';
        }
        encabezado_tabla += '</tr>';
        var filas_tabla = "";
        JSON.parse(localStorage.getItem("users_list")).forEach(function (usuario) {
            filas_tabla += '<tr>' +
                '<td>' + usuario.id + '</td>' +
                '<td>' + usuario.rol + '</td>' +
                '<td>' + usuario.nombre + '</td>' +
                '<td>' + usuario.apellido + '</td>' +
                '<td>' + usuario.correo + '</td>' +
                '<td>' + usuario.telefono + '</td>';
            if (esAdmin) {
                filas_tabla += '<td><button type="button" class="btn btn-warning" onclick=seleccionarUsuarioModificar(' + usuario.id + ')>Modificar</button></td>' +
                    '<td><button type="button" class="btn btn-danger" onclick=eliminarUsuario(' + usuario.id + ')>Eliminar</button></td>';
            }
            filas_tabla += '</tr>';
        });
        document.getElementById("encabezado_dashboard").innerHTML = encabezado_tabla;
        document.getElementById("registros_dashboard").innerHTML = filas_tabla;
    }
}

function crearUsuario() {
    var rol = document.getElementById("rol-crear").value;
    var nombre = document.getElementById("first-name-crear").value;
    var apellido = document.getElementById("last-name-crear").value;
    var correo = document.getElementById("email-crear").value;
    var telefono = document.getElementById("phone-number-crear").value;
    var direccion = document.getElementById("address-crear").value;
    var fecha_nacimiento = document.getElementById("birthdate-crear").value;
    var contrasena = document.getElementById("password-crear").value;
    if (nombre.trim() === "") {
        alert("[ERROR]: Nombre vacío. Debe rellenar el campo.");
        document.getElementById("first-name-crear").focus();
    } else if (apellido.trim() === "") {
        alert("[ERROR]: Apellido vacío. Debe rellenar el campo.");
        document.getElementById("last-name-crear").focus();
    } else if (correo.trim() === "") {
        alert("[ERROR]: Correo electrónico vacío. Debe rellenar el campo.");
        document.getElementById("email-crear").focus();
    } else if (telefono.trim() === "") {
        alert("[ERROR]: Número de teléfono vacío. Debe rellenar el campo.");
        document.getElementById("phone-number-crear").focus();
    } else if (direccion.trim() === "") {
        alert("[ERROR]: Dirección vacía. Debe rellenar el campo.");
        document.getElementById("address-crear").focus();
    } else if (fecha_nacimiento.trim() === "") {
        alert("[ERROR]: Fecha de nacimiento vacía. Debe rellenar el campo.");
        document.getElementById("birthdate-crear").focus();
    } else if (contrasena.trim() === "") {
        alert("[ERROR]: Contraseña vacía. Debe rellenar el campo.");
        document.getElementById("password-crear").focus();
    } else {
        if (!verificarExisteCorreo(correo, 1)) {
            var usuario_creado = new Usuario(1, rol, nombre, apellido, correo, telefono, direccion, fecha_nacimiento, contrasena);
            var lista_usuarios = [];
            if (JSON.parse(localStorage.getItem("users_list"))) {
                lista_usuarios = JSON.parse(localStorage.getItem("users_list"));
                usuario_creado.setId(obtenerIdMayor() + 1);
                lista_usuarios.push(usuario_creado);
                localStorage.setItem("users_list", JSON.stringify(lista_usuarios));
            } else {
                lista_usuarios.push(usuario_creado);
                localStorage.setItem("users_list", JSON.stringify(lista_usuarios));
            }
            location.href = "../menu.html";
        } else {
            alert("[ERROR]: El correo electrónico ingresado ya existe en el sistema. Ingrese otra dirección de correo");
            document.getElementById("email-crear").focus();
        }
    }
}

function verificarExisteCorreo(correo, accion) {
    var lista_usuarios = JSON.parse(localStorage.getItem("users_list"));
    var existe_usuario = false;
    if (lista_usuarios) {
        if (accion === 2) {
            lista_usuarios.forEach(function (usuario) {
                if (usuario.correo === correo && usuario.correo !== JSON.parse(localStorage.getItem("user_mod")).correo) {
                    existe_usuario = true;
                }
            });
        } else {
            lista_usuarios.forEach(function (usuario) {
                if (usuario.correo === correo) {
                    existe_usuario = true;
                }
            });
        }
    }
    return existe_usuario;
}

function obtenerIdMayor() {
    var id = 0;
    JSON.parse(localStorage.getItem("users_list")).forEach(function (usuario) {
        if (usuario.id > id) {
            id = usuario.id;
        }
    });
    return id;
}

function seleccionarUsuarioModificar(id) {
    JSON.parse(localStorage.getItem("users_list")).forEach(usuario => {
        if (usuario.id === id) {
            localStorage.setItem("user_mod", JSON.stringify(usuario));
        }
    });
    location.href = "../modificar_usuario.html";
}

function mostrarDatosUsuarioModificar() {
    usuario_modificar = JSON.parse(localStorage.getItem("user_mod"));
    document.getElementById("rol-mod").value = usuario_modificar.rol;
    document.getElementById("first-name-mod").value = usuario_modificar.nombre;
    document.getElementById("last-name-mod").value = usuario_modificar.apellido;
    document.getElementById("email-mod").value = usuario_modificar.correo;
    document.getElementById("phone-number-mod").value = usuario_modificar.telefono;
    document.getElementById("address-mod").value = usuario_modificar.direccion;
    document.getElementById("birthdate-mod").value = usuario_modificar.fecha_nacimiento;
    document.getElementById("user-password-mod").value = usuario_modificar.contrasena;
}


function modificarUsuario(rol, nombre, apellido, correo, telefono, direccion, fecha_nacimiento, contrasena) {
    var lista_usuarios = JSON.parse(localStorage.getItem("users_list"));
    var id_usuario = JSON.parse(localStorage.getItem("user_mod")).id;
    var rol = document.getElementById("rol-mod").value;
    var nombre = document.getElementById("first-name-mod").value;
    var apellido = document.getElementById("last-name-mod").value;
    var correo = document.getElementById("email-mod").value;
    var telefono = document.getElementById("phone-number-mod").value;
    var direccion = document.getElementById("address-mod").value;
    var fecha_nacimiento = document.getElementById("birthdate-mod").value;
    var contrasena = document.getElementById("user-password-mod").value;
    if (nombre.trim() === "") {
        alert("[ERROR]: Nombre vacío. Debe rellenar el campo.");
        document.getElementById("first-name-mod").focus();
    } else if (apellido.trim() === "") {
        alert("[ERROR]: Apellido vacío. Debe rellenar el campo.");
        document.getElementById("last-name-mod").focus();
    } else if (correo.trim() === "") {
        alert("[ERROR]: Correo electrónico vacío. Debe rellenar el campo.");
        document.getElementById("email-mod").focus();
    } else if (telefono.trim() === "") {
        alert("[ERROR]: Número de teléfono vacío. Debe rellenar el campo.");
        document.getElementById("phone-number-mod").focus();
    } else if (direccion.trim() === "") {
        alert("[ERROR]: Dirección vacía. Debe rellenar el campo.");
        document.getElementById("address-mod").focus();
    } else if (fecha_nacimiento.trim() === "") {
        alert("[ERROR]: Fecha de nacimiento vacía. Debe rellenar el campo.");
        document.getElementById("birthdate-mod").focus();
    } else if (contrasena.trim() === "") {
        alert("[ERROR]: Contraseña vacía. Debe rellenar el campo.");
        document.getElementById("user-password-mod").focus();
    } else {
        if (!verificarExisteCorreo(correo, 2)) {
            lista_usuarios.forEach(usuario => {
                if (usuario.id === id_usuario) {
                    usuario.rol = rol;
                    usuario.nombre = nombre;
                    usuario.apellido = apellido;
                    usuario.correo = correo;
                    usuario.telefono = telefono;
                    usuario.direccion = direccion;
                    usuario.fecha_nacimiento = fecha_nacimiento;
                    usuario.contrasena = contrasena;
                    localStorage.setItem("users_list", JSON.stringify(lista_usuarios));
                }
            });
            location.href = "../menu.html";
        } else {
            alert("[ERROR]: El correo electrónico ingresado ya existe en el sistema. Ingrese otra dirección de correo");
            document.getElementById("email-mod").focus();
        }
    }
}

function eliminarUsuario(id) {
    var lista_usuarios = JSON.parse(localStorage.getItem("users_list"));
    lista_usuarios.forEach(usuario => {
        if (usuario.id === id) {
            if (confirm("¿Desea eliminar al usuario " + usuario.id + " - [" + usuario.rol.toUpperCase() + "] - " + usuario.nombre + " " + usuario.apellido + "?")) {
                lista_usuarios.splice(lista_usuarios.indexOf(usuario), 1);
                localStorage.setItem("users_list", JSON.stringify(lista_usuarios));
            } else {
                alert("Eliminación cancelada.");
            }
        }
    });
    cargarTablaUsuarios();
}

function cerrarSesion() {
    localStorage.setItem('user', JSON.stringify(""));
    location.href = "../index.html";
}