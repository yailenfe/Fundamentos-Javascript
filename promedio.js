let persona = [
    {
        nombre: "Sacha",
        apellido: "Lifszyc",
        edad: 35,
    },

    {
        nombre: "Alan",
        apellido: "Perez",
        edad: 40,
    },

    {
        nombre: "Martin",
        apellido: "Gomez",
        edad: 18,
    },

    {
        nombre: "Dario",
        apellido: "Juarez",
        edad: 33,
    },

    {
        nombre: "Vicky",
        apellido: "Zapata",
        edad: 12,
    },
    {
        nombre: "Paula",
        apellido: "Barros",
        edad: 85,
    },
];

const reducer = (acum, persona) => {
    return acum + persona.edad / persona.length;
};

let edadTotal = persona.reduce(reducer, 0);

console.log(`la edad es ${edadTotal}`);

// for (var i = 0; i < persona.length; i++) {
//     edadTotal += persona[i].edad
// }

// var promedio = edadTotal/ persona.length

// console.log(`la edad es ${promedio}`)
