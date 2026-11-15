
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mi_cuenta.html',
  styleUrl: './mi_cuenta.css'
})
export class MiCuentaComponent {

  // Datos provisionales del cliente
  nombre = 'Fernando';
  apellidos = 'García López';
  email = 'fernando@email.com';
  telefono = '600000000';

  // Sistema de puntos
  puntos = 80;
  puntosNecesarios = 150;

  get puntosRestantes(): number {
    return Math.max(0, this.puntosNecesarios - this.puntos);
  }

  get progreso(): number {
    return Math.min(100, (this.puntos / this.puntosNecesarios) * 100);
  }
}
