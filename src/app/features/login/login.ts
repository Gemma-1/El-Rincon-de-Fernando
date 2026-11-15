
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  iniciarSesion(): void {
    this.mensaje = '';

    if (!this.email || !this.password) {
      this.mensaje = 'Introduce tu correo y contraseña.';
      return;
    }

    const correcto = this.authService.iniciarSesion(
      this.email,
      this.password
    );

    if (correcto) {
      this.router.navigate(['/mi_cuenta']);
    } else {
      this.mensaje = 'El correo o la contraseña son incorrectos.';
    }
  }

  cancelar(): void {
    this.email = '';
    this.password = '';
    this.mensaje = '';
  }
}
