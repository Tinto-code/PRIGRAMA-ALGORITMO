// Clase Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  calcularSubtotal(iva) {
    return this.precio + (this.precio * iva);
  }
}

// Clase Carrito
class Carrito {
  constructor(iva) {
    this.iva = iva;
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotalConIVA() {
    return this.productos.reduce((total, prod) => {
      return total + prod.calcularSubtotal(this.iva);
    }, 0);
  }

  calcularPromedio() {
    if (this.productos.length === 0) return 0;
    return this.calcularTotalConIVA() / this.productos.length;
  }

  verificarRetencion() {
    const promedio = this.calcularPromedio();
    if (promedio > 1000000) {
      console.log("Se debe aplicar retención en la fuente.");
    } else {
      console.log("No se requiere retención en la fuente.");
    }
  }

  mostrarDetalle() {
    console.log("Detalle de productos:");
    this.productos.forEach(prod => {
      const subtotal = prod.calcularSubtotal(this.iva);
      console.log(`- ${prod.nombre}: $${prod.precio.toLocaleString()} + IVA = $${subtotal.toLocaleString()}`);
    });
    console.log(`\n Total con IVA: $${this.calcularTotalConIVA().toLocaleString()}`);
    console.log(` Promedio: $${this.calcularPromedio().toLocaleString()}`);
    this.verificarRetencion();
  }
}

// Crear instancia del carrito con IVA dinámico
const carrito = new Carrito(0.19); // 19% para Colombia

// Agregar productos
carrito.agregarProducto(new Producto("Laptop", 200000));
carrito.agregarProducto(new Producto("Mouse", 70000));
carrito.agregarProducto(new Producto("Teclado", 190000));
carrito.agregarProducto(new Producto("Monitor", 560000));
carrito.agregarProducto(new Producto("Impresora", 880000));
carrito.agregarProducto(new Producto("Tablet", 4300000));
carrito.agregarProducto(new Producto("Auriculares", 790000));
carrito.agregarProducto(new Producto("Webcam", 390000));
carrito.agregarProducto(new Producto("Silla ergonómica", 270000));
carrito.agregarProducto(new Producto("Router", 960000));

// Mostrar resultados
carrito.mostrarDetalle();
