import { Routes } from '@angular/router';

export const routes: Routes = [
  // Home Route (Immediate Load - Critical)
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./Features/home/home.component').then((c) => c.HomeComponent),
    title: 'Home - UnifyNetwork LLC | Professional Call Center Solutions',
    data: { 
      description: 'Leading call center services provider offering 24/7 customer support, sales generation, and technical assistance.',
      keywords: 'call center, customer support, professional services, UnifyNetwork'
    }
  },

  // Services Route (High Priority - Preload)
  {
    path: 'services',
    loadComponent: () =>
      import('./Features/services/services.component').then((m) => m.ServicesComponent),
    title: 'Our Services - UnifyNetwork LLC | Call Center Solutions',
    data: { 
      description: 'Comprehensive call center services including customer support, sales generation, technical support, and appointment scheduling.',
      keywords: 'call center services, customer support, sales generation, technical support'
    }
  },

  // Service Details Route (Dynamic Loading)
  {
    path: 'services-detail/:id',
    loadComponent: () =>
      import('./Features/service-detail/service-detail.component').then((m) => m.ServiceDetailComponent),
    title: 'Service Details - UnifyNetwork LLC',
    data: { 
      description: 'Detailed information about our professional call center services and solutions.',
      keywords: 'service details, call center solutions, professional services'
    }
  },

  // About Route (Secondary Priority)
  {
    path: 'about',
    loadComponent: () =>
      import('./Features/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us - UnifyNetwork LLC | Leading Call Center Provider',
    data: { 
      description: 'Learn about UnifyNetwork LLC, our mission, team, and 8+ years of experience in providing exceptional call center services.',
      keywords: 'about UnifyNetwork, call center company, professional team, company history'
    }
  },

  // Contact Route (Important for Conversions)
  {
    path: 'contact',
    loadComponent: () =>
      import('./Features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us - UnifyNetwork LLC | Get Your Free Quote',
    data: { 
      description: 'Contact UnifyNetwork LLC for professional call center services. Get your free quote today and discover how we can help your business.',
      keywords: 'contact UnifyNetwork, free quote, call center consultation, business contact'
    }
  },

  // Get Quote Route
  {
    path: 'get-quote',
    loadComponent: () =>
      import('./Features/get-quote/get-quote.component').then((m) => m.GetQuoteComponent),
    title: 'Get a Free Quote - UnifyNetwork LLC',
    data: {
      description: 'Get a free quote for our professional call center services. Tell us about your needs and we will create a custom solution for you.',
      keywords: 'free quote, call center quote, service pricing, custom solution'
    }
  },

  // Client Portal Route
  {
    path: 'client-portal',
    loadComponent: () =>
      import('./Features/client-portal/client-portal.component').then((m) => m.ClientPortalComponent),
    title: 'Client Portal - UnifyNetwork LLC',
    data: {
      description: 'Access our powerful client portal dashboard for managing and monitoring your services.',
      keywords: 'client portal, dashboard, service management, analytics'
    }
  },

  // AI Analytics Route
  {
    path: 'ai-analytics',
    loadComponent: () =>
      import('./Features/ai-analytics/ai-analytics.component').then((m) => m.AiAnalyticsComponent),
    title: 'AI Analytics - UnifyNetwork LLC',
    data: {
      description: 'Leverage advanced AI algorithms to gain deeper insights into your service performance.',
      keywords: 'AI analytics, machine learning, predictive analytics, business intelligence'
    }
  },

  // Custom Integration Route
  {
    path: 'custom-integration',
    loadComponent: () =>
      import('./Features/custom-integration/custom-integration.component').then((m) => m.CustomIntegrationComponent),
    title: 'Custom Integration - UnifyNetwork LLC',
    data: {
      description: 'Seamlessly integrate our services with your existing systems and workflows.',
      keywords: 'system integration, API, workflow automation, data synchronization'
    }
  },

  // 404 Route (Lazy Loaded)
  {
    path: 'not-found',
    loadComponent: () =>
      import('./Core/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: '404 - Page Not Found | UnifyNetwork LLC',
    data: { 
      description: 'The page you are looking for could not be found. Return to UnifyNetwork LLC home page.',
      keywords: '404, page not found, UnifyNetwork'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

