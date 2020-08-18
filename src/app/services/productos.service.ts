import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interfaz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargada:boolean = true;
  productos:Product[];

  constructor(private http:HttpClient) {
    
   }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://angular-curso-f8334.firebaseio.com/productos_idx.json');
  }
  
  // public Observbable<Product[]> cargarProduct(){
  //   this.http.get('https://angular-curso-f8334.firebaseio.com/productos_idx.json').subscribe(
  //     (data:Product[])=>{
  //     console.log(data);
  //     this.productos = data;
  //     this.cargada = false;
  //   },err=>{
  //     console.log(err);
  //   })
  // }


}
