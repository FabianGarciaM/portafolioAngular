import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  Product:Product[];
  iscargadoProd:boolean = true;
  constructor(public productsrv:ProductosService) { 
    
  }

  ngOnInit(){
    this.cargaProd();
  }

  cargaProd(){
    this.productsrv.getAllProducts();
    // this.productsrv.getAllProducts().subscribe(data =>{
    //   this.Product = data;
    //   console.log(data);
    //   this.iscargadoProd = false;
    //   // setTimeout(()=>{
    //   //   this.iscargadoProd = false;
    //   // }, 2000);
    // },err=>{
    //   console.log("error!" + err);
    //   this.iscargadoProd = true;
    // })
  }

}
