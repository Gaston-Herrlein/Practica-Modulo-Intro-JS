const Usuario = {
    Nombre: "Gaston Maximiliano",
    Apellido: "Herrlein Alem",
    Module:
    {
        Git:
        {
            Temas: [
                "¿Qué es Git y para qué sirve?",
                "Las tres zonas: working copy, staging area y el repositorio",
                "¿Qué es un commit y para qué sirve?",
                "Guardando cambios con add y commit",
                "Donde dije digo, digo Diego: deshaciendo lo que hemos hecho",
                "Ramas: branch, checkout & merge",
                "Conflictos: cuando la resistencia no es útil",
                "Repos remotos: aprende a trabajar en equipo en GitHub",
            ],
            Inicio: "2023-11-28"
        },   
        NodeJs:
        {
            Temas: [
                "Qué es Node.js",
                "NPM",
                "Repaso de JavaScript",
                "JavaScript en Node.js",
                "Express",
                "API Rest",
            ],
            Inicio: "2024-02-12"
        },
        React:
        {
            Temas: [
                "Introducción",
                "Primeros pasos",
                "React Router",
            ],
            Inicio: "2024-04-15"
        },
    }, 
    
    BusquedaActiva: true
}

console.log ("La fecha de inicio del modulo de react es: " + Usuario.Module.React.Inicio)