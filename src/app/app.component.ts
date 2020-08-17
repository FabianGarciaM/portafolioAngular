import { Component } from '@angular/core';
import { InfopagService } from './services/infopag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';

  constructor( 
    public infpagesrv:InfopagService
  ){

  }
}
