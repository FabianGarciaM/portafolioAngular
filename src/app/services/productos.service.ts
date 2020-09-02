import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interface';
import { ProductDescription } from '../models/productodescrip.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargada:boolean = true;
  productos:Product[] = [];
  productoFiltrado:Product[] = [];

  constructor(private http:HttpClient) {
    
   }

  getAllProducts(){
    //creacion de una promesa para manejar que los datos ya esten cargados antes de aplicar un filtro
    return new Promise((resolve, reject)=>{
      this.http.get('https://angular-curso-f8334.firebaseio.com/productos_idx.json')
      .subscribe((data:Product[])=>{
        console.log(data);
        this.cargada = false;
        this.productos = data;
      })
      resolve();
    });
    //return this.http.get<Product[]>('https://angular-curso-f8334.firebaseio.com/productos_idx.json');
      
  }

  getinfoProd(idprod:string): Observable<ProductDescription>{
    return this.http.get<ProductDescription>(`https://angular-curso-f8334.firebaseio.com/productos/${idprod}.json`);
  }
  
  buscaProducto(termino:string){
    if(this.productos.length === 0){
      console.log("esta vacio los productos hay que cargarlos");
      this.getAllProducts().then(()=>{
        //aplicamos el filtro
        this.filtrarProducto(termino);
      });
    }else{
      console.log("ya estan cargados los productos se procede a hacer el filtro");
      this.filtrarProducto(termino);
    }
  }

  public filtrarProducto(termino:string){
    this.productoFiltrado = [];
    termino = termino.toLowerCase();
    this.productos.filter(prod =>{
      var titulo = prod.titulo.toLowerCase();
      if(termino.length == 0){
        this.productoFiltrado.push(prod);
      }else{
        if(prod.categoria.indexOf(termino)>=0 || titulo.indexOf(termino)>=0){
          this.productoFiltrado.push(prod);
        }
      }
    });
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
