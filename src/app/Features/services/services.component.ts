import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as AOS from 'aos';

interface ServiceSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  video: string;
  image: string;
  color: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="services-container">
      <!-- Hero Section -->
      <section class="hero-section" #heroSection>
        <video autoplay loop muted playsinline class="hero-video">
          <source src="assets/unifynetworkwhitemax.mp4" type="video/mp4">
        </video>
        <div class="hero-content">
          <h1>Our Services</h1>
          <p>Transform your business with our professional solutions</p>
        </div>
      </section>

      <!-- Service Sections -->
      <div class="service-sections">
        <section *ngFor="let service of services" 
                 [id]="service.id" 
                 class="service-section"
                 [style.background-color]="service.color">
          
          <!-- Parallax Video Background -->
          <div class="parallax-bg">
            <video autoplay loop muted playsinline>
              <source [src]="service.video" type="video/mp4">
            </video>
          </div>

          <!-- Service Content -->
          <div class="service-content" data-aos="fade-up">
            <div class="content-wrapper">
              <h2>{{service.title}}</h2>
              <h3>{{service.subtitle}}</h3>
              <p>{{service.description}}</p>

              <!-- Features Grid -->
              <div class="features-grid">
                <div *ngFor="let feature of service.features" 
                     class="feature-item"
                     data-aos="fade-up"
                     data-aos-delay="200">
                  <i class="pi pi-check-circle"></i>
                  <span>{{feature}}</span>
                </div>
              </div>
            </div>

            <!-- Service Image -->
            <div class="service-image" data-aos="fade-left">
              <img [src]="service.image" [alt]="service.title">
            </div>
          </div>

          <!-- Benefits Section -->
          <div class="benefits-section">
            <div class="benefits-grid">
              <div *ngFor="let benefit of service.benefits; let i = index"
                   class="benefit-card"
                   data-aos="fade-up"
                   [attr.data-aos-delay]="i * 100">
                <i [class]="'pi ' + benefit.icon"></i>
                <h4>{{benefit.title}}</h4>
                <p>{{benefit.description}}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- CTA Section -->
      <section class="cta-section" data-aos="fade-up">
        <div class="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Get started with our professional services today</p>
          <div class="cta-buttons">
            <a routerLink="/get-quote" class="cta-button primary">Get Quote</a>
            <a routerLink="/contact" class="cta-button secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;

  services: ServiceSection[] = [
    {
      id: 'customer-support',
      title: 'Customer Support',
      subtitle: '24/7 Professional Support',
      description: 'Deliver exceptional customer experiences with our professional support services. Our trained agents provide round-the-clock assistance across multiple channels.',
      features: [
        'Omnichannel Support',
        'Quality Monitoring',
        'Performance Analytics',
        'Customer Feedback Analysis'
      ],
      video: 'assets/services/customer-support.mp4',
      image: 'assets/services/customer-support.jpg',
      color: '#f0f9ff',
      benefits: [
        {
          title: 'Enhanced Satisfaction',
          description: 'Improve customer satisfaction with quick and effective support',
          icon: 'pi-heart'
        },
        {
          title: 'Reduced Wait Times',
          description: 'Minimize response times with efficient queue management',
          icon: 'pi-clock'
        },
        {
          title: 'Quality Assurance',
          description: 'Maintain high service standards with continuous monitoring',
          icon: 'pi-check-circle'
        }
      ]
    },
    {
      id: 'sales-generation',
      title: 'Sales & Lead Generation',
      subtitle: 'Drive Growth and Revenue',
      description: 'Transform prospects into loyal customers with our comprehensive sales and lead generation services. Our data-driven approach ensures quality leads and higher conversion rates.',
      features: [
        'Lead Qualification',
        'Appointment Setting',
        'Sales Pipeline Management',
        'Performance Tracking'
      ],
      video: 'assets/services/sales-generation.mp4',
      image: 'assets/services/sales-and-lead-generation.jpg',
      color: '#f0fdf4',
      benefits: [
        {
          title: 'Increased Revenue',
          description: 'Boost sales with qualified leads and effective follow-ups',
          icon: 'pi-chart-line'
        },
        {
          title: 'Market Expansion',
          description: 'Reach new markets and grow your customer base',
          icon: 'pi-globe'
        },
        {
          title: 'Sales Intelligence',
          description: 'Make informed decisions with detailed analytics',
          icon: 'pi-chart-bar'
        }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      subtitle: 'Expert Technical Assistance',
      description: 'Provide reliable technical support with our skilled engineers. From basic troubleshooting to complex technical issues, we ensure quick and effective resolution.',
      features: [
        'Technical Troubleshooting',
        'Remote Assistance',
        'Knowledge Base Management',
        'SLA Compliance'
      ],
      video: 'assets/services/technical-support.mp4',
      image: 'assets/services/technical-support.jpg',
      color: '#faf5ff',
      benefits: [
        {
          title: 'Fast Resolution',
          description: 'Solve technical issues quickly and efficiently',
          icon: 'pi-bolt'
        },
        {
          title: 'Expert Support',
          description: 'Access skilled technical professionals',
          icon: 'pi-cog'
        },
        {
          title: 'Proactive Monitoring',
          description: 'Prevent issues before they impact users',
          icon: 'pi-shield'
        }
      ]
    }
  ];

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }

  ngAfterViewInit() {
    // Hero Section Parallax
    gsap.to(this.heroSection.nativeElement, {
      backgroundPosition: '50% 100%',
      ease: 'none',
      scrollTrigger: {
        trigger: this.heroSection.nativeElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Service Section Animations
    this.services.forEach(service => {
      gsap.from(`#${service.id} .service-content`, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: `#${service.id}`,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }
}