import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// Import the getPrerenderRoutes function
export function getPrerenderRoutes(): string[] {
  const serviceIds = ['1', '2', '3']; // Replace with actual IDs for dynamic routes
  const routes = [
    '/', // Home page
    '/about', // About page
    '/contact', // Contact page
    '/services', // Services page
  ];

  // Add dynamic routes for services-detail
  serviceIds.forEach((id) => {
    routes.push(`/services-detail/${id}`);
  });

  return routes;
}

const bootstrap = (context?: any) => {
  return bootstrapApplication(AppComponent, config, context)
    .catch((err: any) => {
      console.error('Error starting the application on server:', err);
      throw err;
    });
};

export default bootstrap;
