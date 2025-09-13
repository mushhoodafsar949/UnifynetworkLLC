import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TooltipModule } from 'primeng/tooltip';

interface DashboardFeature {
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
  selector: 'app-client-portal',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CarouselModule,
    TooltipModule
  ],
  template: `
    <div class="portal-showcase">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>Client Portal Dashboard</h1>
          <p>Powerful tools to manage and monitor your services</p>
        </div>
        <div class="hero-image">
          <img src="assets/client-portal/dashboard-main.svg" alt="Client Portal Dashboard" class="main-dashboard">
          <div class="floating-metrics">
            <div class="metric-card">
              <i class="pi pi-chart-line"></i>
              <div class="metric-content">
                <span class="metric-value">98%</span>
                <span class="metric-label">Resolution Rate</span>
              </div>
            </div>
            <div class="metric-card">
              <i class="pi pi-clock"></i>
              <div class="metric-content">
                <span class="metric-value">1.8m</span>
                <span class="metric-label">Avg Response</span>
              </div>
            </div>
            <div class="metric-card">
              <i class="pi pi-star"></i>
              <div class="metric-content">
                <span class="metric-value">4.9</span>
                <span class="metric-label">CSAT Score</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Grid -->
      <section class="features-section">
        <div class="features-grid">
          <div *ngFor="let feature of dashboardFeatures" class="feature-card">
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

      <!-- Interactive Mockups -->
      <section class="mockups-section">
        <h2>Interactive Dashboard Preview</h2>
        <p class="section-subtitle">Experience the power of our client portal firsthand</p>
        
        <p-carousel [value]="dashboardFeatures" [numVisible]="1" [numScroll]="1" [circular]="true"
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
          <h2>Ready to Experience Our Client Portal?</h2>
          <p>Get started with our professional services and access powerful management tools</p>
          <div class="cta-buttons">
            <a routerLink="/get-quote" class="cta-button primary">Get Started</a>
            <a routerLink="/contact" class="cta-button secondary">Contact Sales</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./client-portal.component.css']
})
export class ClientPortalComponent {
  activeTooltip: string | null = null;

  dashboardFeatures: DashboardFeature[] = [
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting tools to monitor your service performance in real-time.',
      image: 'assets/client-portal/analytics-detail.svg',
      mockupImage: 'assets/client-portal/analytics-detail.svg',
      mockupDescription: 'Get deep insights into your service performance with our advanced analytics dashboard.',
      features: [
        'Real-time performance metrics',
        'Custom report generation',
        'Data visualization tools',
        'Trend analysis',
        'AI-powered insights',
        'KPI tracking'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify improvement areas',
        'Track ROI effectively',
        'Optimize operations',
        'Predict trends'
      ],
      hotspots: [
        { x: '20%', y: '30%', label: 'Performance Metrics', details: 'Monitor key performance indicators in real-time' },
        { x: '70%', y: '40%', label: 'Trend Analysis', details: 'Track performance trends and patterns' },
        { x: '45%', y: '60%', label: 'Custom Reports', details: 'Generate detailed analytics reports' },
        { x: '80%', y: '70%', label: 'AI Insights', details: 'Get AI-powered recommendations' }
      ]
    },
    {
      title: 'Ticket Management',
      description: 'Advanced system for managing and tracking support requests with automated workflows.',
      image: 'assets/client-portal/ticket-management-detail.svg',
      mockupImage: 'assets/client-portal/ticket-management-detail.svg',
      mockupDescription: 'Efficiently manage and track all support requests from a centralized dashboard.',
      features: [
        'Centralized ticket tracking',
        'Priority management',
        'Automated workflows',
        'SLA monitoring',
        'Smart routing',
        'Custom fields'
      ],
      benefits: [
        'Faster issue resolution',
        'Better resource allocation',
        'Improved customer satisfaction',
        'Reduced response time',
        'Enhanced tracking'
      ],
      hotspots: [
        { x: '15%', y: '25%', label: 'Ticket List', details: 'View and manage all support tickets' },
        { x: '65%', y: '35%', label: 'Ticket Details', details: 'Access comprehensive ticket information' },
        { x: '40%', y: '75%', label: 'Activity Timeline', details: 'Track all ticket updates and actions' },
        { x: '85%', y: '50%', label: 'Priority Management', details: 'Set and manage ticket priorities' }
      ]
    },
    {
      title: 'Resource Planning',
      description: 'Intelligent tools for managing and optimizing your service resources with predictive analytics.',
      image: 'assets/client-portal/resource-planning-detail.svg',
      mockupImage: 'assets/client-portal/resource-planning-detail.svg',
      mockupDescription: 'Optimize your team\'s efficiency with our advanced resource planning tools.',
      features: [
        'Staff scheduling',
        'Resource allocation',
        'Capacity planning',
        'Performance tracking',
        'Break management',
        'Skill matching'
      ],
      benefits: [
        'Optimize resource utilization',
        'Reduce operational costs',
        'Improve service quality',
        'Better work-life balance',
        'Enhanced productivity'
      ],
      hotspots: [
        { x: '25%', y: '20%', label: 'Team Overview', details: 'View team capacity and availability' },
        { x: '55%', y: '45%', label: 'Schedule Grid', details: 'Manage team schedules visually' },
        { x: '75%', y: '70%', label: 'Resource Metrics', details: 'Track utilization and efficiency' },
        { x: '35%', y: '85%', label: 'Break Management', details: 'Monitor and manage break schedules' }
      ]
    },
    {
      title: 'Communication Hub',
      description: 'Modern platform for seamless client communications with integrated collaboration tools.',
      image: 'assets/client-portal/communication-hub-detail.svg',
      mockupImage: 'assets/client-portal/communication-hub-detail.svg',
      mockupDescription: 'Stay connected with your team through our integrated communication platform.',
      features: [
        'Real-time messaging',
        'File sharing',
        'Video conferencing',
        'Announcement board',
        'Chat analytics',
        'Mobile support'
      ],
      benefits: [
        'Enhanced collaboration',
        'Faster decision making',
        'Better team coordination',
        'Improved engagement',
        'Secure communications'
      ],
      hotspots: [
        { x: '20%', y: '40%', label: 'Active Chats', details: 'View ongoing conversations' },
        { x: '60%', y: '30%', label: 'Chat Window', details: 'Real-time messaging interface' },
        { x: '80%', y: '60%', label: 'Team Status', details: 'Monitor team availability' },
        { x: '40%', y: '80%', label: 'File Sharing', details: 'Share and manage documents' }
      ]
    }
  ];

  showTooltip(type: string) {
    this.activeTooltip = type;
  }

  hideTooltip() {
    this.activeTooltip = null;
  }
}
