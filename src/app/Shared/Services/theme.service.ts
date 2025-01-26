import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Check if we're running in the browser
      this.darkMode = localStorage.getItem('dark-mode') === 'true';
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;

    if (isPlatformBrowser(this.platformId)) {
      // Only access localStorage in the browser
      localStorage.setItem('dark-mode', this.darkMode.toString());
    }

    this.applyTheme();
  }

  applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.darkMode) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }
    }
  }
}
