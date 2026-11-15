
import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  menuLateralAbierto: boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  alternarMenuLateral(): void {
    this.menuLateralAbierto = !this.menuLateralAbierto;
  }

  cerrarMenuLateral(): void {
    this.menuLateralAbierto = false;
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.router.navigate(['/home']);
  }
}
