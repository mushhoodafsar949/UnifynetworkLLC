import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
     getPrerenderParams: async () => {
        // Example: Hardcoded IDs
        return [
          { id: '1' }, // Service 1
          { id: '2' }, // Service 2
          { id: '3' }, // Service 3
          { id: '4' }, // Service 4
          { id: '5' }, // Service 5
          { id: '6' }, // Service 6
          { id: '7' }, // Service 7
          { id: '8' }, // Service 8
          { id: '9' }, // Service 9
          { id: '10' }, // Service 10
        ];
      }
  }
];
