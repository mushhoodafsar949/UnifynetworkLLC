import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../Shared/Services/theme.service';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule,MatIconModule,MatButtonModule,ButtonModule,MenubarModule,RouterLink,MatSidenavModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public themeService: ThemeService;

  constructor(_themeService: ThemeService) {
    this.themeService = _themeService;
  }
 menuItems = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Services', icon: 'pi pi-briefcase', routerLink: '/services' },
    { label: 'About', icon: 'pi pi-info-circle', routerLink: '/about' },
    { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' },
  ];

  menuOpen: boolean = false; // Controls the sidebar visibility

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Toggle sidebar state
    console.log('Menu toggled:', this.menuOpen); // Debug to verify it's firing
  }
}

