import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as AOS from 'aos';
import { BehaviorSubject } from 'rxjs';

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
            <video autoplay loop muted playsinline [attr.data-src]="service.video" #videoElement>
              <source type="video/mp4">
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
export class ServicesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('videoElement') videoElements!: ElementRef[];

  private observer: IntersectionObserver | null = null;
  private scrollTriggers: ScrollTrigger[] = [];
  private isDestroyed$ = new BehaviorSubject<boolean>(false);

  services: ServiceSection[] = [
    {
      id: 'help-desk',
      title: 'Help Desk Services',
      subtitle: 'Comprehensive Support Solutions',
      description: 'Streamline your support operations with our professional help desk services. We handle inquiries, track issues, and ensure timely resolution for all customer needs.',
      features: [
        'Ticket Management',
        'Issue Tracking',
        'Service Level Agreements',
        'Escalation Management'
      ],
      video: 'assets/services/help-desk-services.mp4',
      image: 'assets/services/help-desk-services.jpg',
      color: '#fff7ed',
      benefits: [
        {
          title: 'Efficient Resolution',
          description: 'Track and resolve issues systematically',
          icon: 'pi-ticket'
        },
        {
          title: 'Organized Support',
          description: 'Centralized ticketing system for better management',
          icon: 'pi-list'
        },
        {
          title: 'Performance Tracking',
          description: 'Monitor and improve support metrics',
          icon: 'pi-chart-line'
        }
      ]
    },
    {
      id: 'appointment-scheduling',
      title: 'Appointment Scheduling',
      subtitle: 'Efficient Time Management',
      description: 'Optimize your scheduling process with our professional appointment management services. We handle bookings, confirmations, and follow-ups to ensure smooth operations.',
      features: [
        'Calendar Management',
        'Automated Reminders',
        'Resource Allocation',
        'Schedule Optimization'
      ],
      video: 'assets/services/appointments.mp4',
      image: 'assets/services/appointments.jpg',
      color: '#fdf4ff',
      benefits: [
        {
          title: 'Time Optimization',
          description: 'Maximize resource utilization and efficiency',
          icon: 'pi-calendar'
        },
        {
          title: 'Reduced No-shows',
          description: 'Automated reminders for better attendance',
          icon: 'pi-bell'
        },
        {
          title: 'Better Planning',
          description: 'Efficient resource allocation and scheduling',
          icon: 'pi-clock'
        }
      ]
    },
    {
      id: 'software-development',
      title: 'Software Development',
      subtitle: 'Custom Solutions & Integration',
      description: 'Transform your business with custom software solutions. Our expert developers create tailored applications that streamline operations and drive growth.',
      features: [
        'Custom Development',
        'System Integration',
        'API Development',
        'Cloud Solutions'
      ],
      video: 'assets/services/software-development.mp4',
      image: 'assets/services/software-development.jpg',
      color: '#f0f7ff',
      benefits: [
        {
          title: 'Custom Solutions',
          description: 'Tailored software for your specific needs',
          icon: 'pi-code'
        },
        {
          title: 'Seamless Integration',
          description: 'Connect systems for better efficiency',
          icon: 'pi-sitemap'
        },
        {
          title: 'Modern Technology',
          description: 'Latest tech stack for optimal performance',
          icon: 'pi-server'
        }
      ]
    },
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
    // Initialize AOS with optimized settings
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 100,
      throttleDelay: 99,
      mirror: false
    });

    // Initialize Intersection Observer for lazy loading videos
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            const videoSrc = video.getAttribute('data-src');
            if (videoSrc) {
              video.setAttribute('src', videoSrc);
              video.load();
              this.observer?.unobserve(video);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
      }
    );
  }

  ngAfterViewInit() {
    // Initialize video lazy loading
    if (this.videoElements) {
      this.videoElements.forEach(videoRef => {
        if (this.observer) {
          this.observer.observe(videoRef.nativeElement);
        }
      });
    }

    // Hero Section Parallax with optimized settings
    const heroTrigger = ScrollTrigger.create({
      trigger: this.heroSection.nativeElement,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
      onUpdate: (self) => {
        gsap.to(this.heroSection.nativeElement, {
          backgroundPosition: `50% ${self.progress * 100}%`,
          duration: 0.5,
          ease: 'power1.out'
        });
      }
    });
    this.scrollTriggers.push(heroTrigger);

    // Service Section Animations with batching
    const batchAnimations = gsap.utils.toArray('.service-content').map((element) => {
      const trigger = ScrollTrigger.create({
        trigger: element as Element,
        start: 'top bottom-=100',
        onEnter: () => {
          gsap.fromTo(element as HTMLElement,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
          );
        },
        once: true
      });
      this.scrollTriggers.push(trigger);
      return trigger;
    });
  }

  ngOnDestroy() {
    // Clean up observers and triggers
    this.isDestroyed$.next(true);
    if (this.observer) {
      this.observer.disconnect();
    }
    this.scrollTriggers.forEach(trigger => trigger.kill());
  }
}