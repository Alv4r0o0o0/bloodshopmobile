import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Zapatilla } from './zapatilla';
import { Usuario } from './usuario';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root'
})
export class BdserviceService {
  carrito: any[] = [];
  public database!: SQLiteObject;

  tablaMarca: string = "CREATE TABLE IF NOT EXISTS marca(codigomarca INTEGER PRIMARY KEY, nombremarca VARCHAR(100) NOT NULL);";
  //TABLA DE ZAPATILLA
  tablaZapatilla: string = "CREATE TABLE IF NOT EXISTS zapatilla(id INTEGER PRIMARY KEY autoincrement, nombrezapatilla VARCHAR(100) NOT NULL, marca INTEGER, descripcion VARCHAR(300) NOT NULL, foto TEXT, precio FLOAT, tallas VARCHAR(20) NOT NULL, cantidad INTEGER, FOREIGN KEY(marca) REFERENCES marca(codigomarca));";
  //TABLAS DE USUARIOS
  tablaRoles: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(50) NOT NULL);";
  tablaUsuarios: string = "CREATE TABLE IF NOT EXISTS usuarios(id INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(100) NOT NULL, apellido VARCHAR(100) NOT NULL, fechanacimiento DATE NOT NULL, rut VARCHAR(12) NOT NULL UNIQUE, correo VARCHAR(100) NOT NULL UNIQUE, telefono VARCHAR(20), clave VARCHAR(256) NOT NULL, token VARCHAR(256), id_rol INTEGER, FOREIGN KEY(id_rol) REFERENCES rol(id_rol));";

  registroZapatilla: string = "INSERT or IGNORE INTO zapatilla(id, nombrezapatilla, marca, descripcion, foto, precio, tallas, cantidad) VALUES (1,'Modelo X', 1, 'Descripción del modelo X', 'linkFoto', 100.50, '7us-12us', 100);";
  listaZapatillas = new BehaviorSubject([]);
  listaUsuarios = new BehaviorSubject([]);
  listaRoles = new BehaviorSubject([]);

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private alertController: AlertController, public sqlite: SQLite, private platform: Platform, private navCtrl: NavController,) {
    this.crearBD();
  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  fetchZapatillas(): Observable<Zapatilla[]> {
    return this.listaZapatillas.asObservable();
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
            cantidad: res.rows.item(i).cantidad
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

  agregar(nombrezapatilla: any, marca: any, descripcion: any, foto: any, precio: any, tallas: any, cantidad: any) {
    return this.database.executeSql('INSERT INTO zapatilla (nombrezapatilla, marca, descripcion, foto, precio, tallas, cantidad) VALUES (?,?,?,?,?,?,?)', [nombrezapatilla, marca, descripcion, foto, precio, tallas, cantidad]).then(res => {
      this.buscarZapatillas();
    });
  }

  modificar(id: any, nombrezapatilla: any, marca: any, descripcion: any, foto: any, precio: any, tallas: any, cantidad: any) {
    return this.database.executeSql('UPDATE zapatilla SET nombrezapatilla=?, marca=?, descripcion=?, foto=?, precio=?, tallas=?, cantidad=? WHERE id=?', [nombrezapatilla, marca, descripcion, foto, precio, tallas, cantidad, id]).then(res => {
      this.buscarZapatillas();
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
  iniciarSesion(correo: string, clave: string): Promise<Usuario | false> {
    return new Promise((resolve, reject) => {
        this.database.executeSql('SELECT * FROM usuarios WHERE correo = ? AND clave = ?', [correo, clave]).then((res) => {
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
                    id_rol: res.rows.item(0).id_rol
                };
                this.presentAlertP("Inicio de sesión exitoso");
                resolve(usuario);
            } else {
                this.presentAlertN("Correo o clave incorrectos");
                resolve(false);
            }
        }).catch(e => {
            this.presentAlertN("Error al iniciar sesión:" + e);
            resolve(false);  // Nota: Puedes decidir usar reject(e) si consideras el error como una situación de rechazo.
        });
    });
}


  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'bdzapatillas.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();
        this.inicializarRoles();
      }).catch(e => {
        this.presentAlertN("Error en crear BD: " + e);
      });
    });
  }

  async inicializarRoles() {
    try {
      await this.database.executeSql('INSERT OR IGNORE INTO rol (id_rol, nombre) VALUES (1, "usuario")', []);
      await this.database.executeSql('INSERT OR IGNORE INTO rol (id_rol, nombre) VALUES (2, "admin")', []);
    } catch (e) {
      this.presentAlertN("Error al inicializar roles: " + e);
    }
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaMarca, []);
      await this.database.executeSql(this.tablaZapatilla, []);
      await this.database.executeSql(this.registroZapatilla, []);

      await this.database.executeSql(this.tablaRoles, []);
      await this.database.executeSql(this.tablaUsuarios, []);

      this.isDBReady.next(true);
      this.buscarZapatillas();
      this.buscarUsuarios();
    } catch (e) {
      this.presentAlertN("Error en crear Tabla: " + e);
    }
  }

  addToCart(zapatilla: Zapatilla, talla: string, cantidad: number) {
    this.isStockAvailable(zapatilla, talla, cantidad)
      .then((isAvailable) => {
        if (isAvailable) {
          // Implementa la lógica para agregar al carrito aquí
          // Puedes almacenar la información en LocalStorage o en una propiedad del servicio
          // Por ejemplo, podrías tener un array "carrito" donde agregas los productos
          // junto con la talla y cantidad seleccionadas.
          const productoEnCarrito = {
            zapatilla,
            talla,
            cantidad
          };
  
          // Agrega el producto al carrito
          this.carrito.push(productoEnCarrito);
        } else {
          this.presentAlertN('No hay suficiente stock disponible para la talla y cantidad seleccionadas.');
        }
      })
      .catch((error) => {
        // Manejar errores al verificar el stock
        this.presentAlertN('Error al verificar el stock: ' + error);
      });
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
            cantidad: res.rows.item(0).cantidad
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

  private async isStockAvailable(zapatilla: Zapatilla, talla: string, cantidad: number): Promise<boolean> {
    const zapatillaId = zapatilla.id;
  
    try {
      // Buscar el stock disponible en la base de datos
      const res = await this.database.executeSql(
        'SELECT cantidad FROM stock WHERE zapatilla_id = ? AND talla = ?',
        [zapatillaId, talla]
      );
  
      if (res.rows.length > 0) {
        const stockDisponible = res.rows.item(0).cantidad;
        // Comparar el stock disponible con la cantidad deseada
        return stockDisponible >= cantidad;
      } else {
        // Si no se encuentra información de stock, asumir que no hay stock
        return false;
      }
    } catch (e) {
      this.presentAlertN('Error al verificar el stock: ' + e);
      return false;
    }
  }





  async presentAlertN(msj: string) {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }
  async presentAlertP(msj: string) {
    const alert = await this.alertController.create({
      header: 'Exito!',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }

  
}


