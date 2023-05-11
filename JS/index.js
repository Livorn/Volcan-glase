const sectionImgaenes = document.getElementsByClassName("Setion-de-torta")

let torta = []

let opcionesDeTortas

class Tortas {
    constructor (nombre, foto, price, descripcion){
        this.nombre = nombre
        this.foto = foto
        this.price = price
        this.descripcion = descripcion
    }
}

let tortaQuinsañera = new Tortas("Torta de Quinceañera", "/assets/tortaQuinseñera.png", "50$")
let tortaChocolate = new Tortas("Torta de chocolate", "/assets/tortaChocolate.png", "25$")
let tortaRosa = new Tortas("Torta de rosa", "/assets/tortaRosa.png", "30$")

torta.push(tortaQuinsañera,  tortaChocolate,  tortaRosa )

function imprimirTorta() {
    torta.forEach(tarta => {
        
    })
}