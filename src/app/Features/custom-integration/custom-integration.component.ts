import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TooltipModule } from 'primeng/tooltip';

interface IntegrationFeature {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  mockupImage: string;
  mockupDescription: string;
  hotspots?: Array<{
    x: string;
    y: string;
    label: string;
    details: string;
  }>;
}

@Component({
  selector: 'app-custom-integration',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CarouselModule,
    TooltipModule
  ],
  template: `
    <div class="integration-showcase">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>Custom Integration</h1>
          <p>Seamlessly integrate our services with your existing systems and workflows</p>
        </div>
        <div class="hero-image">
          <img src="assets/custom-integration/dashboard-main.svg" alt="Integration Dashboard" class="main-dashboard">
          <div class="floating-metrics">
            <div class="metric-card">
              <i class="pi pi-link"></i>
              <div class="metric-content">
                <span class="metric-value">24</span>
                <span class="metric-label">Active Integrations</span>
              </div>
            </div>
            <div class="metric-card">
              <i class="pi pi-sync"></i>
              <div class="metric-content">
                <span class="metric-value">99.9%</span>
                <span class="metric-label">Sync Rate</span>
              </div>
            </div>
            <div class="metric-card">
              <i class="pi pi-cog"></i>
              <div class="metric-content">
                <span class="metric-value">15</span>
                <span class="metric-label">Custom Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Grid -->
      <section class="features-section">
        <div class="features-grid">
          <div *ngFor="let feature of integrationFeatures" class="feature-card">
            <div class="feature-image">
              <img [src]="feature.image" [alt]="feature.title">
            </div>
            <div class="feature-content">
              <h3>{{feature.title}}</h3>
              <p>{{feature.description}}</p>
              <ul class="feature-list">
                <li *ngFor="let item of feature.features">
                  <i class="pi pi-check-circle"></i>
                  <span>{{item}}</span>
                </li>
              </ul>
              <div class="benefits">
                <h4>Benefits</h4>
                <ul class="benefits-list">
                  <li *ngFor="let benefit of feature.benefits">
                    <i class="pi pi-star"></i>
                    <span>{{benefit}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Demo -->
      <section class="mockups-section">
        <h2>Interactive Integration Preview</h2>
        <p class="section-subtitle">See how our integration capabilities can enhance your workflow</p>
        
        <p-carousel [value]="integrationFeatures" [numVisible]="1" [numScroll]="1" [circular]="true"
                   [showNavigators]="true" [showIndicators]="true" [autoplayInterval]="5000">
          <ng-template let-feature pTemplate="item">
            <div class="mockup-slide">
              <div class="mockup-content">
                <div class="mockup-info">
                  <h3>{{feature.title}}</h3>
                  <p>{{feature.mockupDescription}}</p>
                  <ul class="feature-highlights">
                    <li *ngFor="let feat of feature.features">
                      <i class="pi pi-check-circle"></i>
                      <span>{{feat}}</span>
                    </li>
                  </ul>
                </div>
                <div class="mockup-preview">
                  <img [src]="feature.mockupImage" [alt]="feature.title">
                  <div class="hotspots" *ngIf="feature.hotspots">
                    <div class="hotspot" *ngFor="let spot of feature.hotspots"
                         [style.left]="spot.x"
                         [style.top]="spot.y"
                         pTooltip="{{spot.label}}: {{spot.details}}"
                         tooltipPosition="top">
                      <div class="hotspot-dot"></div>
                      <div class="hotspot-ring"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ng-template>
        </p-carousel>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="cta-content">
          <h2>Ready to Integrate?</h2>
          <p>Connect your systems with our powerful integration platform</p>
          <div class="cta-buttons">
            <a routerLink="/get-quote" class="cta-button primary">Get Started</a>
            <a routerLink="/contact" class="cta-button secondary">Contact Sales</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./custom-integration.component.css']
})
export class CustomIntegrationComponent {
  integrationFeatures: IntegrationFeature[] = [
    {
      title: 'API Integration',
      description: 'Robust API endpoints for seamless system integration.',
      image: 'assets/custom-integration/api-config.svg',
      mockupImage: 'assets/custom-integration/api-config.svg',
      mockupDescription: 'Connect your systems using our comprehensive API suite.',
      features: [
        'RESTful API endpoints',
        'Real-time data sync',
        'Secure authentication',
        'Rate limiting',
        'Comprehensive docs',
        'SDK support'
      ],
      benefits: [
        'Seamless connectivity',
        'Data consistency',
        'Reduced complexity',
        'Fast implementation',
        'Reliable performance'
      ],
      hotspots: [
        { x: '20%', y: '30%', label: 'API Docs', details: 'Interactive API documentation' },
        { x: '60%', y: '40%', label: 'Authentication', details: 'Secure token-based auth' },
        { x: '40%', y: '70%', label: 'Endpoints', details: 'Available API endpoints' },
        { x: '80%', y: '50%', label: 'Response', details: 'Sample API responses' }
      ]
    },
    {
      title: 'Custom Workflows',
      description: 'Build automated workflows tailored to your needs.',
      image: 'assets/custom-integration/webhook-config.svg',
      mockupImage: 'assets/custom-integration/webhook-config.svg',
      mockupDescription: 'Design and implement custom automation workflows.',
      features: [
        'Visual workflow builder',
        'Conditional logic',
        'Custom triggers',
        'Action templates',
        'Error handling',
        'Monitoring tools'
      ],
      benefits: [
        'Process automation',
        'Error reduction',
        'Time savings',
        'Better efficiency',
        'Scalable operations'
      ],
      hotspots: [
        { x: '25%', y: '35%', label: 'Workflow Builder', details: 'Design custom workflows' },
        { x: '65%', y: '45%', label: 'Actions', details: 'Available workflow actions' },
        { x: '45%', y: '75%', label: 'Monitoring', details: 'Track workflow performance' }
      ]
    },
    {
      title: 'Data Synchronization',
      description: 'Keep your systems in sync with real-time data updates.',
      image: 'assets/custom-integration/data-mapping.svg',
      mockupImage: 'assets/custom-integration/data-mapping.svg',
      mockupDescription: 'Maintain data consistency across all systems.',
      features: [
        'Real-time sync',
        'Conflict resolution',
        'Data validation',
        'Error recovery',
        'Audit logging',
        'Performance monitoring'
      ],
      benefits: [
        'Data accuracy',
        'System reliability',
        'Reduced downtime',
        'Better insights',
        'Compliance ready'
      ],
      hotspots: [
        { x: '30%', y: '40%', label: 'Sync Status', details: 'Monitor sync progress' },
        { x: '70%', y: '50%', label: 'Data Flow', details: 'Track data movement' },
        { x: '50%', y: '80%', label: 'Logs', details: 'View sync history and logs' }
      ]
    },
    {
      title: 'Integration Monitoring',
      description: 'Real-time monitoring and analytics for your integrations.',
      image: 'assets/custom-integration/monitoring.svg',
      mockupImage: 'assets/custom-integration/monitoring.svg',
      mockupDescription: 'Monitor and optimize your integration performance.',
      features: [
        'Real-time metrics',
        'System health',
        'Performance tracking',
        'Error monitoring',
        'Resource usage',
        'Alert management'
      ],
      benefits: [
        'Proactive maintenance',
        'Quick troubleshooting',
        'Performance insights',
        'Resource optimization',
        'System reliability'
      ],
      hotspots: [
        { x: '25%', y: '35%', label: 'Health Metrics', details: 'System health overview' },
        { x: '65%', y: '45%', label: 'Performance', details: 'Performance metrics and trends' },
        { x: '45%', y: '75%', label: 'Alerts', details: 'Active alerts and notifications' }
      ]
    }
  ];
}
