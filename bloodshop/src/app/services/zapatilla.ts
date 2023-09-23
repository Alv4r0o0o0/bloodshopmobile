export class Zapatilla {
    id: number;
    nombrezapatilla: string;
    marca: number; // Aquí se guarda el ID de la marca (Foreign Key). Podrías cambiar esto a `codigomarca` para ser más claro.
    descripcion: string;
    foto: string; // Esta es una URL o un path hacia la imagen. Si decides guardar la imagen en base64 o algún otro formato, deberás ajustar el tipo.
    precio: number;
    tallas: string; // Esto representa las tallas disponibles. Podrías considerar usar un array o una estructura diferente si quieres manejar las tallas de manera más específica.
    cantidad: number;

    constructor(
        id: number,
        nombrezapatilla: string,
        marca: number,
        descripcion: string,
        foto: string,
        precio: number,
        tallas: string,
        cantidad: number
    ) {
        this.id = id;
        this.nombrezapatilla = nombrezapatilla;
        this.marca = marca;
        this.descripcion = descripcion;
        this.foto = foto;
        this.precio = precio;
        this.tallas = tallas;
        this.cantidad = cantidad;
    }
}
