import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Zapatilla } from './zapatilla';

@Injectable({
  providedIn: 'root'
})
export class BdserviceService {
  public database!: SQLiteObject;

  tablaMarca: string = "CREATE TABLE IF NOT EXISTS marca(codigomarca INTEGER PRIMARY KEY, nombremarca VARCHAR(100) NOT NULL);";
  tablaZapatilla: string = "CREATE TABLE IF NOT EXISTS zapatilla(id INTEGER PRIMARY KEY autoincrement, nombrezapatilla VARCHAR(100) NOT NULL, marca INTEGER, descripcion VARCHAR(300) NOT NULL, foto TEXT, precio FLOAT, tallas VARCHAR(20) NOT NULL, cantidad INTEGER, FOREIGN KEY(marca) REFERENCES marca(codigomarca));";

  registroZapatilla: string = "INSERT or IGNORE INTO zapatilla(id, nombrezapatilla, marca, descripcion, foto, precio, tallas, cantidad) VALUES (1,'Modelo X', 1, 'Descripción del modelo X', 'linkFoto', 100.50, '7us-12us', 100);";

  listaZapatillas = new BehaviorSubject([]);

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private alertController: AlertController, public sqlite: SQLite, private platform: Platform) {
    this.crearBD();
  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  fetchZapatillas(): Observable<Zapatilla[]> {
    return this.listaZapatillas.asObservable();
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
      await this.database.executeSql(this.registroZapatilla, []);
      this.isDBReady.next(true);
      this.buscarZapatillas();
    } catch (e) {
      this.presentAlertN("Error en crear Tabla: " + e);
    }
  }

  async presentAlertN(msj: string) {
    const alert = await this.alertController.create({
      header: 'Error en Servicio',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }
  async presentAlertP(msj: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }
}


