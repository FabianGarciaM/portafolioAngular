import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../models/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopagService {

  info: InfoPagina = {};
  cargada:boolean = false;

  constructor(public http:HttpClient) {
    this.http.get('assets/data/data_pagina.json').subscribe((data:InfoPagina)=>{
      console.log(data);
      this.info = data;
      this.cargada = true;
      console.log(this.info.email);
    },err =>{

    });
   }


}
