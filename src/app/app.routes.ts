import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  // Home Route (Lazy Loaded)
  {
    path: '',
    loadComponent: () =>
      import('../app/Features/home/home.component').then((c) => c.HomeComponent),
  },

  // About Route (Lazy Loaded)
  {
    path: 'about',
    loadComponent: () =>
      import('../app/Features/about/about.component').then((m) => m.AboutComponent),
  },

  // Contact Route (Lazy Loaded)
  {
    path: 'contact',
    loadComponent: () =>
      import('../app/Features/contact/contact.component').then((m) => m.ContactComponent),
  },

  // Services Route (Lazy Loaded)
  {
    path: 'services',
    loadComponent: () =>
      import('../app/Features/services/services.component').then((m) => m.ServicesComponent),
  },

  // Service Details Route (Eager Loading)
  {
    path: 'services-detail/:id',
    loadComponent: () =>
      import('../app/Features/service-detail/service-detail.component').then((m) => m.ServiceDetailComponent),
  },

  // Wildcard Route (Dedicated 404 Page)
  {
    path: '**',
    loadComponent: () =>
      import('../app/Core/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restores scroll position on navigation
      preloadingStrategy: PreloadAllModules, // Preloads lazy-loaded modules for performance
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
