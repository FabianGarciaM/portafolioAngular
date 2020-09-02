import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  iscargadoProd:boolean = true;
  Product:Product[];
  constructor(
    private actrouter:ActivatedRoute,
    public productsrv:ProductosService) { }

  ngOnInit(){
    this.actrouter.params.subscribe(data=>{
      console.log(data);
      console.log(data['termino']);
      this.productsrv.buscaProducto(data['termino']);
      if(this.productsrv.productoFiltrado != undefined || this.productsrv.productoFiltrado != null){
        this.iscargadoProd = false;
      }else{
        this.iscargadoProd = true;
      }
      
    },err=>{
      console.log("Error--->" + err);
      this.iscargadoProd = true;
    })
  }

}
