
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Datos del usuario de prueba
  private emailPrueba = 'fernando@email.com';
  private passwordPrueba = 'Fernando123!';

  // Control del estado de la sesión
  private sesionSubject = new BehaviorSubject<boolean>(
    sessionStorage.getItem('sesionIniciada') === 'true'
  );

  sesionIniciada$ = this.sesionSubject.asObservable();

  // Comprueba las credenciales
  iniciarSesion(email: string, password: string): boolean {

    if (
      email === this.emailPrueba &&
      password === this.passwordPrueba
    ) {
      sessionStorage.setItem('sesionIniciada', 'true');
      this.sesionSubject.next(true);
      return true;
    }

    return false;
  }

  // Cierra la sesión
  cerrarSesion(): void {

    sessionStorage.removeItem('sesionIniciada');
    this.sesionSubject.next(false);

  }

  // Comprueba si existe una sesión
  get estaAutenticado(): boolean {
    return this.sesionSubject.value;
  }

}
