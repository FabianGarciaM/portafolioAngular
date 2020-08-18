import { Component } from '@angular/core';
import { InfopagService } from './services/infopag.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';

  constructor( 
    private infpagesrv:InfopagService,
    private prodsrv:ProductosService
  ){

  }
}
