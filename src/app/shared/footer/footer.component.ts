import { Component, OnInit } from '@angular/core';
import { InfopagService } from '../../services/infopag.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date:number = new Date().getFullYear();
  

  constructor(public infopagsrv:InfopagService) { }

  ngOnInit(): void {
  }

}
