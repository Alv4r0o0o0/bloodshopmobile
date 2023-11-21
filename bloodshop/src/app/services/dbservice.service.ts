import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Zapatilla } from './zapatilla';
import { Usuario } from './usuario';
import { Rol } from './rol';
import { Detalle } from './detalle';
import { Venta } from './venta';

@Injectable({
  providedIn: 'root'
})
export class BdserviceService {
  //VARIABLES
  public database!: SQLiteObject;
  carrito: Zapatilla[] = [];
  cantidadSeleccionada: number[] = [];
  private rolActual: number = 0;
  private usuario: any;
  logueado: number = 0;
  //TABLA DE ZAPATILLA
  tablaMarca: string = "CREATE TABLE IF NOT EXISTS marca(codigomarca INTEGER PRIMARY KEY, nombremarca VARCHAR(100) NOT NULL);";
  tablaZapatilla: string = "CREATE TABLE IF NOT EXISTS zapatilla(id INTEGER PRIMARY KEY autoincrement, nombrezapatilla VARCHAR(100) NOT NULL, marca INTEGER, descripcion VARCHAR(300) NOT NULL, foto TEXT, precio FLOAT, tallas VARCHAR(20) NOT NULL, cantidad INTEGER, seccion VARCHAR(10) NOT NULL, FOREIGN KEY(marca) REFERENCES marca(codigomarca));";
  //TABLAS DE USUARIOS
  tablaRoles: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(50) NOT NULL);";
  tablaUsuarios: string = `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(100) NOT NULL, apellido VARCHAR(100) NOT NULL, fechanacimiento DATE NOT NULL, rut VARCHAR(12) NOT NULL, foto TEXT, correo VARCHAR(100) NOT NULL UNIQUE, telefono VARCHAR(20), clave VARCHAR(256) NOT NULL, token VARCHAR(256), id_rol INTEGER, FOREIGN KEY (id_rol) REFERENCES rol (id_rol));`;
  tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY autoincrement, id_producto INTEGER, cantidad INTEGER, id_venta INTEGER, subtotal FLOAT, FOREIGN KEY (id_producto) REFERENCES producto(id_producto), FOREIGN KEY (id_usuario) REFERENCES usuarios(id) , FOREIGN KEY (id_venta) REFERENCES venta(id_venta));";
  tablaVentasU: string = "CREATE TABLE IF NOT EXISTS venta (id_venta INTEGER PRIMARY KEY AUTOINCREMENT, total FLOAT NOT NULL, id_usuario INTEGER NOT NULL, estado VARCHAR(50) NOT NULL, FOREIGN KEY (id_usuario) REFERENCES usuarios(id));";
  //LISTAS
  listaZapatillas = new BehaviorSubject([]);
  listaUsuarios = new BehaviorSubject([]);
  listaDetalle = new BehaviorSubject([]);
  listaVentasU = new BehaviorSubject([]);
  listaRoles = new BehaviorSubject([]);
  private usuarioActual: BehaviorSubject<Usuario | null> = new BehaviorSubject<Usuario | null>(null);

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private alertController: AlertController, public sqlite: SQLite, private platform: Platform, private navCtrl: NavController,) {
    this.crearBD();

  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  fetchDetalle():Observable<Detalle[]>{
    return this.listaDetalle.asObservable();
  }

  fetchZapatillas(): Observable<Zapatilla[]> {
    return this.listaZapatillas.asObservable();
  }
  fetchVentas(): Observable<Venta[]>{
    return this.listaVentasU.asObservable();
  }
  

  fetchUsuarios(): Observable<Usuario[]> {
    return this.listaUsuarios.asObservable();
  }
  fetchRoles(): Observable<Rol[]> {
    return this.listaRoles.asObservable();
  }



  buscarZapatillas() {
    return this.database.executeSql('SELECT * FROM zapatilla', []).then(res => {
      let items: Zapatilla[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            nombrezapatilla: res.rows.item(i).nombrezapatilla,
            marca: res.rows.item(i).marca,
            descripcion: res.rows.item(i).descripcion,
            foto: res.rows.item(i).foto,
            precio: res.rows.item(i).precio,
            tallas: res.rows.item(i).tallas,
            cantidad: res.rows.item(i).cantidad,
            seccion: res.rows.item(i).seccion,
          });
        }
      }
      this.listaZapatillas.next(items as any);
    });
  }

  eliminar(id: any) {
    return this.database.executeSql('DELETE FROM zapatilla WHERE id = ?', [id]).then(res => {
      this.buscarZapatillas();
    });
  }

  agregar(nombrezapatilla: any, marca: any, descripcion: any, foto: any, precio: any, tallas: any, cantidad: any, seccion: any) {
    return this.database.executeSql('INSERT INTO zapatilla (nombrezapatilla, marca, descripcion, foto, precio, tallas, cantidad, seccion) VALUES (?,?,?,?,?,?,?,?)', [nombrezapatilla, marca, descripcion, foto, precio, tallas, cantidad, seccion]).then(res => {
      this.buscarZapatillas();
    });
  }

  

  modificar(id: any, nombrezapatilla: any, marca: any, descripcion: any, foto: any, precio: any, tallas: any, cantidad: any, seccion: any) {
    return this.database.executeSql('UPDATE zapatilla SET nombrezapatilla=?, marca=?, descripcion=?, foto=?, precio=?, tallas=?, cantidad=?, seccion=? WHERE id=?', [nombrezapatilla, marca, descripcion, foto, precio, tallas, cantidad, seccion, id]).then(res => {
      this.buscarZapatillas();
    });
  }

  modificarPerfil(id: any, nombre: any, apellido: any, fechanacimiento: any, rut: any, correo: any, telefono: any) {
    return this.database.executeSql('UPDATE usuarios SET nombre=?, apellido=?, fechanacimiento=?, rut=?, correo=?, telefono=? WHERE id=?', [nombre, apellido, fechanacimiento, rut, correo, telefono, id]).then(res => {
      this.buscarUsuarios();
    });
  }


  //SERVICIOS DE USUARIOS
  buscarUsuarios() {
    return this.database.executeSql('SELECT * FROM usuarios', []).then(res => {
      let items: any[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            fechanacimiento: res.rows.item(i).fechanacimiento,
            rut: res.rows.item(i).rut,
            correo: res.rows.item(i).correo,
            telefono: res.rows.item(i).telefono,
            clave: res.rows.item(i).clave,
            token: res.rows.item(i).token,
            id_rol: res.rows.item(i).id_rol
          });
        }
      }
      this.listaUsuarios.next(items as any);
      this.usuarioActual.next(items.length > 0 ? items[0] : null);
    });
  }
  
  registrarUsuario(nombre: string, apellido: string, fechanacimiento: string, rut: string, correo: string, telefono: string, clave: string) {
    const id_rolPredeterminado = 1; // Usuario
    this.database.executeSql('INSERT INTO usuarios (nombre, apellido, fechanacimiento, rut, correo, telefono, clave, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellido, fechanacimiento, rut, correo, telefono, clave, id_rolPredeterminado]).then(() => {
      this.buscarUsuarios();
      this.presentAlertP("Usuario creado exitosamente");
    }).catch(e => {
      if (e.message.includes('UNIQUE constraint failed')) {
        this.presentAlertN("El RUT o correo ya está registrado");
      } else {
        this.presentAlertN("Error al registrar el usuario: " + e.message);
      }
    });
  }
  async iniciarSesion(correo: string, clave: string): Promise<Usuario | false> {
    try {
      const res = await this.database.executeSql('SELECT * FROM usuarios WHERE correo = ? AND clave = ?', [correo, clave]);
  
      if (res.rows.length > 0) {
        const usuario: Usuario = {
          id: res.rows.item(0).id,
          nombre: res.rows.item(0).nombre,
          apellido: res.rows.item(0).apellido,
          fechanacimiento: res.rows.item(0).fechanacimiento,
          rut: res.rows.item(0).rut,
          correo: res.rows.item(0).correo,
          telefono: res.rows.item(0).telefono,
          clave: res.rows.item(0).clave,
          token: res.rows.item(0).token,
          id_rol: res.rows.item(0).id_rol,
        };
        return usuario;
      } else {
        return false;
      }
    } catch (e) {
      this.presentAlertN('Error al iniciar sesión: ' + e);
      return false;
    }
  }

  setUsuario(usuario: any) {
    this.usuario = usuario;
    this.buscarUsuarios();
  }

  getUsuario(): any {
    return this.usuario;
  }
  getUsuarioActual(): Observable<Usuario | null> {
    return this.usuarioActual.asObservable();
  }

  setRolActual(rol: number): void {
    this.rolActual = rol;
  }
  getRolActual(): number {
    return this.rolActual;
  }


  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'bdzapatillas.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();
      }).catch(e => {
        this.presentAlertN("Error en crear BD: " + e);
      });
    });
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaMarca, []);
      await this.database.executeSql(this.tablaZapatilla, []);
      await this.database.executeSql(this.tablaDetalle,[])
      await this.database.executeSql(this.tablaRoles, []);
      await this.database.executeSql(this.tablaUsuarios, []);

      this.isDBReady.next(true);
      this.buscarZapatillas();
      this.buscarUsuarios();
    } catch (e) {
      this.presentAlertN("Error en crear Tabla: " + e);
    }
  }

  fetchZapatillaDetails(id: string): Observable<Zapatilla> {
    return new Observable<Zapatilla>((observer) => {
      this.database.executeSql('SELECT * FROM zapatilla WHERE id = ?', [id]).then(res => {
        if (res.rows.length > 0) {
          const zapatilla: Zapatilla = {
            id: res.rows.item(0).id,
            nombrezapatilla: res.rows.item(0).nombrezapatilla,
            marca: res.rows.item(0).marca,
            descripcion: res.rows.item(0).descripcion,
            foto: res.rows.item(0).foto,
            precio: res.rows.item(0).precio,
            tallas: res.rows.item(0).tallas,
            cantidad: res.rows.item(0).cantidad,
            seccion: res.rows.item(0).seccion
          };
          observer.next(zapatilla);
          observer.complete();
        } else {
          this.presentAlertN('No se encontró la zapatilla con el ID proporcionado.');
          observer.error('No se encontró la zapatilla con el ID proporcionado.');
        }
      }).catch(e => {
        this.presentAlertN('Error al buscar detalles de la zapatilla: ' + e);
        observer.error(e);
      });
    });
  }

  obtenerUsuarioId(): number | null {
    if (this.usuario) {
      return this.usuario.id;
    }
    return null;
  }

  async presentAlertN(msj: string) {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: msj,
      buttons: [
      {
        text: 'OK',
        cssClass: 'custom-button',
      }
    ],
      cssClass: 'custom-alert',
    });
    await alert.present();
  }

  async presentAlertP(msj: string) {
    const alert = await this.alertController.create({
      header: 'Exito!',
      message: msj,
      buttons: [
      {
        text: 'OK',
        cssClass: 'custom-button', // Agrega una clase de estilo personalizado al botón OK
      }
    ],
      cssClass: 'custom-alert',
    });
    await alert.present();
  }

  //CARRITO DE Detalle
  agregarAlCarrito(zapatilla: Zapatilla, cantidadSeleccionada: number) {
    this.carrito.push(zapatilla);
    this.cantidadSeleccionada.push(cantidadSeleccionada);
  }
  obtenerCarrito() {
    return this.carrito;
  }

  eliminarDelCarrito(zapatilla: Zapatilla, index: number) {
    const indexEnCarrito = this.carrito.findIndex((item) => item.id === zapatilla.id);
    if (indexEnCarrito !== -1) {
      this.carrito.splice(indexEnCarrito, 1);
      this.cantidadSeleccionada.splice(index, 1); // Elimina la cantidad seleccionada correspondiente al índice
    }
  }

  obtenerCantidadSeleccionada(index: number) {
    return this.cantidadSeleccionada[index];
  }
  
  agregarDetalle(id_detalle: any, id_producto: any, cantidad: any, subtotal: any, id_usuario: any) {
    return this.database.executeSql('INSERT INTO detalle (id_detalle, id_producto, cantidad, id_venta, subtotal, id_usuario) VALUES (?,?,?,?,?,?)', [id_detalle, id_producto, cantidad, subtotal, id_usuario]).then(res => {
      this.fetchDetalleRealizadas();
    });
  }
  
  fetchDetalleRealizadas() {
    this.database.executeSql('SELECT * FROM detalle', []).then(res => {
      let Detalle: any[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          Detalle.push({
            id_detalle: res.rows.item(i).id_detalle,
            id_producto: res.rows.item(i).id_producto,
            id_usuario: res.rows.item(i).id_usuario,
            cantidad: res.rows.item(i).cantidad,
            id_venta: res.rows.item(i).id_venta,
            subtotal: res.rows.item(i).subtotal
          });
        }
      }
      this.listaDetalle.next(Detalle as any);
    }).catch(e => {
      this.presentAlertN('Error al obtener las Detalle realizadas: ' + e);
    });
  }



}



