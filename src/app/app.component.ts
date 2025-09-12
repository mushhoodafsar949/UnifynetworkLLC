import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from "./Layouts/footer/footer.component";
import { NavbarComponent } from "./Layouts/navbar/navbar.component";
import { ThemeService } from './Shared/Services/theme.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'unifynetworkllc';
  constructor(public themeService: ThemeService) {}
  ngOnInit() {
    // Initialize the theme when the app starts
    this.themeService.applyTheme();
  }
}
