import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductDescription } from 'src/app/models/productodescrip.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto:ProductDescription;
  id:string;
  iscargadoProd:boolean = true;
  constructor(private route:ActivatedRoute,
              public prod:ProductosService) { }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      // console.log(params.id);
      this.id = params['id'];
      this.getInfoProducto(params.id);
    },err=>{

    })
  }

  getInfoProducto(id:string){
    this.prod.getinfoProd(id).subscribe(data =>{
      // console.log("esta es la data del item seleccionado");
      // console.log(data);
      this.producto = data;
      this.iscargadoProd = false;
    }, err=>{
      console.log(err);
    })
  }

}
