import { Component, OnInit } from '@angular/core';
import { InfopagService } from '../../services/infopag.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  team:any[] = [];

  constructor(public infopagsrv:InfopagService) { }

  ngOnInit(): void {
    console.log("********************************+");
   this.team = this.infopagsrv.equipo;
    console.log(this.team);
  }



}
