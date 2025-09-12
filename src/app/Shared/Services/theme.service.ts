import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'auto';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: Theme = 'auto';
  private isDark: boolean = false;
  private mediaQuery?: MediaQueryList;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();
      this.setupMediaQueryListener();
    }
  }

  private initializeTheme(): void {
    // Check for system preference
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.updateDarkMode();
    
    // Set initial theme based on system preference
    this.theme = 'auto';
    this.applyTheme();
  }

  private setupMediaQueryListener(): void {
    if (this.mediaQuery) {
      this.mediaQuery.addEventListener('change', () => {
        if (this.theme === 'auto') {
          this.updateDarkMode();
        }
      });
    }
  }

  private updateDarkMode(): void {
    if (this.theme === 'auto') {
      this.isDark = this.mediaQuery?.matches ?? false;
    } else {
      this.isDark = this.theme === 'dark';
    }
    this.applyTheme();
  }

  applyTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const isDarkTheme = this.isDark;
    const html = document.documentElement;
    const body = document.body;

    // Remove all theme-related attributes and classes
    html.removeAttribute('data-theme');
    body.classList.remove('light-theme', 'dark-theme');
    html.classList.remove('light-theme', 'dark-theme');

    // Apply new theme
    const themeValue = isDarkTheme ? 'dark' : 'light';
    html.setAttribute('data-theme', themeValue);
    
    // Also apply classes for backward compatibility
    const themeClass = `${themeValue}-theme`;
    body.classList.add(themeClass);
    html.classList.add(themeClass);

    // Force a repaint to ensure CSS updates are applied
    document.body.style.display = 'none';
    document.body.offsetHeight;
    document.body.style.display = '';

    console.log(`Theme applied: ${themeValue} (${this.theme})`);
  }

  // Public API
  getCurrentTheme(): Theme {
    return this.theme;
  }

  isDarkMode(): boolean {
    return this.isDark;
  }

  setTheme(theme: Theme): void {
    this.theme = theme;
    this.updateDarkMode();
  }

  toggleTheme(): void {
    const current = this.theme;
    if (current === 'auto') {
      // If auto, switch to opposite of current system preference
      this.setTheme(this.isDark ? 'light' : 'dark');
    } else if (current === 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  // For templates
  getThemeIcon(): string {
    const theme = this.theme;
    if (theme === 'auto') {
      return 'brightness_auto';
    }
    return this.isDark ? 'light_mode' : 'dark_mode';
  }

  getThemeLabel(): string {
    const theme = this.theme;
    switch (theme) {
      case 'auto': return 'Auto';
      case 'light': return 'Light';
      case 'dark': return 'Dark';
    }
  }
}