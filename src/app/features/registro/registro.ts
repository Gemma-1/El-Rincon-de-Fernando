import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {

  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  telefono: string = '';
  password: string = '';
  repetirPassword: string = '';

  mensaje: string = '';

  registrarUsuario(): void {

    this.mensaje = '';

    if (
      !this.nombre ||
      !this.apellidos ||
      !this.email ||
      !this.telefono ||
      !this.password ||
      !this.repetirPassword
    ) {
      this.mensaje = 'Todos los campos son obligatorios.';
      return;
    }

    if (this.password !== this.repetirPassword) {
      this.mensaje = 'Las contraseñas no coinciden.';
      return;
    }

    if (this.password.length < 6) {
      this.mensaje = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    this.mensaje = 'Formulario validado correctamente.';

  }

}
