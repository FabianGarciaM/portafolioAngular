import { Component, OnInit } from '@angular/core';
import { InfopagService } from '../../services/infopag.service';
import { TeamJob } from '../../models/equipo.interface';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  team:TeamJob[] = [];

  constructor(public infopagsrv:InfopagService) { }

  ngOnInit(){
    this.getAllteam();
  }

  getAllteam(){
    this.infopagsrv.cargarequipo().subscribe(data =>{
      this.team = data;
    },err =>{
      console.log("err" + err);
    })
  }


}
