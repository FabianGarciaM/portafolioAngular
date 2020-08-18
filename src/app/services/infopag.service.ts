import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../models/info-pagina.interface';
import { Observable } from 'rxjs';
import { TeamJob } from '../models/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopagService {

  info: InfoPagina = {};
  cargada:boolean = false;
  equipo:any[];
  constructor(public http:HttpClient) {
    this.cargarinfo();
   }

  // cargainfo(): Observable<InfoPagina[]>{
  //   return this.http.get<InfoPagina[]>('assets/data/data_pagina.json');
  // }

  cargarequipo(): Observable<TeamJob[]>{
    return this.http.get<TeamJob[]>('https://angular-curso-f8334.firebaseio.com/equipo.json');
  }

  private cargarinfo(){
    this.http.get('assets/data/data_pagina.json').subscribe((data:InfoPagina)=>{
      console.log(data);
      this.info = data;
      this.cargada = true;
      console.log(this.info.email);
    },err =>{

    });
   }

  // private cargarequipo(){
  //   console.log("dentro del metodo que nos regresa firebase");
  //   this.http.get('https://angular-curso-f8334.firebaseio.com/equipo.json').subscribe((data:any) =>{
  //     console.log(data);
  //     this.equipo = data;
  //     this.cargada = true;
  //   }, err=>{
  //     console.log(err);
  //   });
  // }


}
