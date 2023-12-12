function obtenerUsuario (id) {
    let usuario;
    
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                usuario = { id: 1, nombre: 'John Doe' };
            }
            resolve(usuario)
        }, 2000);
    })
}

let usuario
obtenerUsuario(1).then(usr => {
    usuario = usr
    console.log(usuario)
});
