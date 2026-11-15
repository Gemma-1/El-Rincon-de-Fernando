
import { Component } from '@angular/core';
import { TarjetaDestacadaComponent } from '../../shared/components/tarjeta_destacada/tarjeta_destacada';
import { TarjetaInformacionComponent } from '../../shared/components/tarjeta_informacion/tarjeta_informacion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TarjetaDestacadaComponent,
    TarjetaInformacionComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}