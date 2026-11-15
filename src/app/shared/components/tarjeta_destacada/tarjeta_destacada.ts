
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjeta-destacada',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarjeta_destacada.html',
  styleUrl: './tarjeta_destacada.css'
})
export class TarjetaDestacadaComponent {

  @Input() icono: string = '';
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() enlace: string = '/home';

}
