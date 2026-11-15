
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-informacion',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta_informacion.html',
  styleUrl: './tarjeta_informacion.css'
})
export class TarjetaInformacionComponent {

  @Input() icono: string = '';
  @Input() titulo: string = '';
  @Input() informacion: string = '';

}
