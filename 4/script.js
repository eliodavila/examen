class Material {
    constructor(nombre, tipo, cantidad, precioPorUnidad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precioPorUnidad = precioPorUnidad;
    }

    //Calcula y Muestra en pantalla
    stock() {
        //Realiza el cálculo
        let costoTotal = this.cantidad * this.precioPorUnidad;

        //Muestra en pantalla
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Cantidad: ${this.cantidad}`);
        console.log(`Precio por Unidad: ${this.precioPorUnidad}`);
        console.log(`Costo Total: ${costoTotal}`);
    }
}

// Crear instancias de Material
const material1 = new Material('Cemento', 'Construcción', 50, 7);
const material2 = new Material('Ladrillo', 'Construcción', 200, 0.5);

//llama al método stock
material1.stock();
material2.stock();
