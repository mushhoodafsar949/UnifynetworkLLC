import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TooltipModule } from 'primeng/tooltip';

interface AnalyticsFeature {
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
  selector: 'app-ai-analytics',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CarouselModule,
    TooltipModule
  ],
  template: `
    <div class="analytics-showcase">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>AI-Powered Analytics</h1>
          <p>Leverage advanced AI algorithms to gain deeper insights into your service performance</p>
        </div>
        <div class="hero-image">
          <img src="assets/ai-analytics/dashboard-main.svg" alt="AI Analytics Dashboard" class="main-dashboard">
          <div class="floating-metrics">
            <div class="metric-card">
              <i class="pi pi-chart-line"></i>
              <div class="metric-content">
                <span class="metric-value">92%</span>
                <span class="metric-label">Sentiment Score</span>
              </div>
            </div>
            <div class="metric-card">
              <i class="pi pi-cog"></i>
              <div class="metric-content">
                <span class="metric-value">85%</span>
                <span class="metric-label">Intent Accuracy</span>
              </div>
            </div>
            <div class="metric-card">
              <i class="pi pi-star"></i>
              <div class="metric-content">
                <span class="metric-value">127</span>
                <span class="metric-label">Insights Today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Grid -->
      <section class="features-section">
        <div class="features-grid">
          <div *ngFor="let feature of analyticsFeatures" class="feature-card">
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
        <h2>Interactive Analytics Preview</h2>
        <p class="section-subtitle">Experience the power of AI-driven analytics firsthand</p>
        
        <p-carousel [value]="analyticsFeatures" [numVisible]="1" [numScroll]="1" [circular]="true"
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
          <h2>Ready to Leverage AI Analytics?</h2>
          <p>Transform your data into actionable insights with our AI-powered analytics platform</p>
          <div class="cta-buttons">
            <a routerLink="/get-quote" class="cta-button primary">Get Started</a>
            <a routerLink="/contact" class="cta-button secondary">Contact Sales</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./ai-analytics.component.css']
})
export class AiAnalyticsComponent {
  analyticsFeatures: AnalyticsFeature[] = [
    {
      title: 'Sentiment Analysis',
      description: 'Advanced AI algorithms analyze customer sentiment in real-time across all interactions.',
      image: 'assets/ai-analytics/sentiment-analysis.svg',
      mockupImage: 'assets/ai-analytics/sentiment-analysis.svg',
      mockupDescription: 'Monitor customer sentiment trends and patterns in real-time.',
      features: [
        'Real-time sentiment tracking',
        'Multi-language support',
        'Trend analysis',
        'Automated alerts',
        'Custom reporting',
        'Historical data'
      ],
      benefits: [
        'Improve customer satisfaction',
        'Identify issues early',
        'Optimize responses',
        'Better decision making',
        'Enhanced CX'
      ],
      hotspots: [
        { x: '20%', y: '30%', label: 'Sentiment Score', details: 'Real-time sentiment analysis across all channels' },
        { x: '60%', y: '40%', label: 'Trend Analysis', details: 'Track sentiment patterns over time' },
        { x: '40%', y: '70%', label: 'Alerts', details: 'Get notified of significant sentiment changes' },
        { x: '80%', y: '50%', label: 'Reports', details: 'Generate detailed sentiment analysis reports' }
      ]
    },
    {
      title: 'Intent Recognition',
      description: 'AI-powered intent recognition for better understanding of customer needs.',
      image: 'assets/ai-analytics/intent-recognition.svg',
      mockupImage: 'assets/ai-analytics/intent-recognition.svg',
      mockupDescription: 'Accurately identify and categorize customer intents.',
      features: [
        'Natural language processing',
        'Context awareness',
        'Multi-intent detection',
        'Confidence scoring',
        'Intent mapping',
        'Continuous learning'
      ],
      benefits: [
        'Faster response times',
        'Better routing accuracy',
        'Reduced errors',
        'Improved efficiency',
        'Enhanced automation'
      ],
      hotspots: [
        { x: '25%', y: '35%', label: 'Intent Detection', details: 'Real-time intent recognition' },
        { x: '65%', y: '45%', label: 'Confidence Score', details: 'AI confidence level for each intent' },
        { x: '45%', y: '75%', label: 'Categories', details: 'View intent distribution by category' }
      ]
    },
    {
      title: 'Predictive Analytics',
      description: 'Use AI to predict trends and anticipate customer needs.',
      image: 'assets/ai-analytics/predictive-analytics.svg',
      mockupImage: 'assets/ai-analytics/predictive-analytics.svg',
      mockupDescription: 'Anticipate trends and make data-driven decisions.',
      features: [
        'Trend prediction',
        'Demand forecasting',
        'Resource optimization',
        'Risk analysis',
        'Pattern recognition',
        'Automated insights'
      ],
      benefits: [
        'Better planning',
        'Reduced costs',
        'Optimized staffing',
        'Proactive service',
        'Strategic insights'
      ],
      hotspots: [
        { x: '30%', y: '40%', label: 'Predictions', details: 'View upcoming trends and patterns' },
        { x: '70%', y: '50%', label: 'Accuracy', details: 'Track prediction accuracy over time' },
        { x: '50%', y: '80%', label: 'Insights', details: 'Get AI-generated recommendations' }
      ]
    },
    {
      title: 'Customer Behavior Analysis',
      description: 'Deep insights into customer interaction patterns and preferences.',
      image: 'assets/ai-analytics/customer-behavior.svg',
      mockupImage: 'assets/ai-analytics/customer-behavior.svg',
      mockupDescription: 'Understand and predict customer behavior patterns.',
      features: [
        'Interaction analysis',
        'Channel preferences',
        'Journey mapping',
        'Behavior prediction',
        'Pattern recognition',
        'Trend identification'
      ],
      benefits: [
        'Better engagement',
        'Personalized service',
        'Improved retention',
        'Targeted solutions',
        'Enhanced CX'
      ],
      hotspots: [
        { x: '25%', y: '35%', label: 'Interaction Patterns', details: 'Analyze customer interaction patterns' },
        { x: '65%', y: '45%', label: 'Journey Map', details: 'Track customer journey stages' },
        { x: '45%', y: '75%', label: 'Insights', details: 'Get behavior-based recommendations' }
      ]
    }
  ];
}
