import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withPreloading, PreloadAllModules, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom, enableProdMode, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Enable production mode if not in development
if (!isDevMode()) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // Router with Performance Optimizations
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withEnabledBlockingInitialNavigation()
    ),
    
    // Browser Animations for PrimeNG Components
    importProvidersFrom(BrowserAnimationsModule),
    
    // Async Animations for Better Performance
    provideAnimationsAsync(),
  ],
})
  .catch((err) => {
    console.error('Application failed to start:', err);
    // Optional: Send error to monitoring service
  });
