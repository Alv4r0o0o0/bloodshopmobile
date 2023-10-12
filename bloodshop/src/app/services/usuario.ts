export class Usuario {
    id: number;
    nombre: string;
    apellido: number;
    descripcion: string;
    fechanacimiento: string;
    rut: number;
    correo: string; 
    telefono: number;
    clave: number;
    token: string;
    id_rol: number;

    constructor(
        id: number,
        nombre: string,
        apellido: number,
        descripcion: string,
        fechanacimiento: string,
        rut: number,
        correo: string,
        telefono: number,
        clave: number,
        token: string,
        id_rol: number
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.fechanacimiento = fechanacimiento;
        this.rut = rut;
        this.correo = correo;
        this.telefono = telefono;
        this.clave = clave;
        this.token = token;
        this.id_rol = id_rol;
    }
}
