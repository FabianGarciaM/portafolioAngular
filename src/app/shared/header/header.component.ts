import { Component, OnInit } from '@angular/core';
import { InfopagService } from '../../services/infopag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor(public infopagsrv:InfopagService) { }

  ngOnInit(): void {
  }

}
