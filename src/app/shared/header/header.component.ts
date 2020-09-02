import { Component, OnInit } from '@angular/core';
import { InfopagService } from '../../services/infopag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    

  constructor(public infopagsrv:InfopagService,
              public router:Router) { }

  ngOnInit(){
  }

  search(busca:string){
    this.router.navigate(['/busca', busca]);
    // if(busca.length < 1){
    //   console.log("es menor a 1 ");
    //   return;
    // }
    // this.router.navigate(['/busca', busca]);
  }

}
