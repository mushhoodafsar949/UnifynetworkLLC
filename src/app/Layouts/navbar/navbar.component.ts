import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ThemeService } from '../../Shared/Services/theme.service';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    TooltipModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;

  constructor(
    public themeService: ThemeService,
    private router: Router
  ) {}


  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  getThemeIconClass(): string {
    return this.themeService.isDarkMode() ? 'pi-sun' : 'pi-moon';
  }
}

