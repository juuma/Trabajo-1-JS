const pizzas = [
    {
        id: 1,
        nombre: "Pizza de Jamon y Rucula",
        ingredientes: ["Muzzarella", "Tomate", "Jamon Crudo", "Rucula", "Huevo a la Plancha"],
        precio: 1300,
    },
    {
        id: 2,
        nombre: "Pizza de Muzza",
        ingredientes: ["Muzzarella", "Tomate"],
        precio: 600
    },
    {
        id: 3,
        nombre: "Pizza Napolitana",
        ingredientes: ["Tomate", "Muzzarella", "Oregano", "Aceitunas"],
        precio: 800
    },
    {
        id: 4,
        nombre: "Pizza Especial",
        ingredientes: ["Muzzarella", "Tomate", "Jamon", "Morron"],
        precio: 900,
    },
    {
        id: 5,
        nombre: "Pizza de Peperoni",
        ingredientes: ["Muzzarella", "Tomate", "Peperoni"],
        precio: 1000
    },
    {
        id: 6,
        nombre: "Pizza de Anana",
        ingredientes: ["Muzzarella","Tomate","Peperoni","Anana"],
        precio: 1100,
    },
]


 // A) Las Pizzas que tengan un id impar

const idImpar = pizzas.filter((piza) => piza.id % 2 !=0)

console.log("Las pizzas con ID impar son:")
for (piza of idImpar){
    console.log(piza.nombre)
}


//B)¿Hay alguna pizza que valga menos de $600?

const pizzamenos600 = pizzas.some( (e) => e.precio < 600);
console.log(pizzamenos600);


// C) Nombre de las pizzas mas precios

const nombrePizzaPrecio = pizzas.map ( (pizza) => {
    return {
        nombre: pizza.nombre,
        precio: pizza.precio
    }
})
console.log(nombrePizzaPrecio)


//d) Todos los ingredientes de cada pizza

const ingredientesPizza = pizzas.map ((pizza) =>{
    return{
        nombre: pizza.nombre,
        ingrediente: pizza.ingredientes
    }
})
pizzas.forEach ((pizzas) => {
    console.log ('Las pizzas '+ pizzas.nombre + ':')
    pizzas.ingredientes.forEach((ingrediente) => {
        console.log('-' + ingrediente )
    })
})