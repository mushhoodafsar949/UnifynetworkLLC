import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import jsPDF from 'jspdf';

interface ServiceFeature {
  name: string;
  description: string;
  included: boolean;
}

interface PricingModel {
  basePrice: number;
  agentMultiplier: number;
  hourMultiplier: number;
  volumeDiscount?: number;
}

interface ROIMetrics {
  currentCost: number;
  projectedSavings: number;
  productivityGain: number;
  qualityImprovement: number;
  breakEvenMonths: number;
}

interface ServiceTier {
  name: string;
  features: ServiceFeature[];
  pricing: PricingModel;
  description: string;
  icon: string;
  recommendedFor: string[];
  roiMetrics?: ROIMetrics;
}

interface ServiceOption {
  label: string;
  value: string;
  description: string;
  longDescription: string;
  tiers: ServiceTier[];
  features: string[];
  minAgents: number;
  maxAgents: number;
  technologies?: string[];
  industries?: string[];
  certifications?: string[];
}

@Component({
  selector: 'app-get-quote',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SliderModule,
    DropdownModule,
    InputNumberModule,
    CardModule,
    DividerModule,
    TooltipModule,
    ButtonModule,
    ChartModule
  ],
  templateUrl: './get-quote.component.html',
  styleUrl: './get-quote.component.css'
})
export class GetQuoteComponent {
  selectedService: string = '';
  agentCount: number = 5;
  shiftHours: number = 8;
  multilingualSupport: boolean = false;
  dedicatedTeam: boolean = false;
  customizedTraining: boolean = false;
  
  services: ServiceOption[] = [
    {
      label: 'Customer Support',
      value: 'customer_support',
      description: 'Professional 24/7 customer service with trained agents',
      longDescription: 'Elevate your customer experience with our comprehensive customer support solutions. Our trained agents provide round-the-clock assistance across multiple channels, ensuring your customers receive timely and effective support.',
      tiers: [
        {
          name: 'Essential',
          description: 'Perfect for small businesses starting with professional customer support',
          icon: 'pi pi-star',
          recommendedFor: ['Startups', 'Small Businesses', 'Growing Teams'],
          pricing: {
            basePrice: 12,
            agentMultiplier: 1,
            hourMultiplier: 1.2,
            volumeDiscount: 0.05
          },
          features: [
            { name: 'Email Support', description: '24/7 email support with 4-hour response time', included: true },
            { name: 'Basic Ticketing', description: 'Standard ticket management system', included: true },
            { name: 'Performance Reports', description: 'Monthly performance analytics', included: true },
            { name: 'Chat Support', description: 'Business hours chat support', included: false },
            { name: 'Quality Monitoring', description: 'Basic call monitoring and feedback', included: false }
          ]
        },
        {
          name: 'Professional',
          description: 'Advanced features for established businesses seeking growth',
          icon: 'pi pi-briefcase',
          recommendedFor: ['Mid-size Companies', 'E-commerce', 'Service Providers'],
          pricing: {
            basePrice: 18,
            agentMultiplier: 1.2,
            hourMultiplier: 1.3,
            volumeDiscount: 0.1
          },
          features: [
            { name: 'Omnichannel Support', description: 'Integrated email, chat, and phone support', included: true },
            { name: 'Advanced Ticketing', description: 'Custom workflows and automation', included: true },
            { name: 'Real-time Analytics', description: 'Live dashboards and reporting', included: true },
            { name: 'Quality Assurance', description: 'Advanced QA with call scoring', included: true },
            { name: 'Customer Feedback', description: 'Automated satisfaction surveys', included: true }
          ]
        },
        {
          name: 'Enterprise',
          description: 'Comprehensive solution for large-scale operations',
          icon: 'pi pi-building',
          recommendedFor: ['Large Enterprises', 'Global Companies', 'High-volume Operations'],
          pricing: {
            basePrice: 25,
            agentMultiplier: 1.5,
            hourMultiplier: 1.4,
            volumeDiscount: 0.15
          },
          features: [
            { name: 'Dedicated Team', description: 'Exclusive agents for your business', included: true },
            { name: 'Custom Integration', description: 'Integration with your existing systems', included: true },
            { name: 'AI-Powered Support', description: 'AI chatbots and automation', included: true },
            { name: 'Predictive Analytics', description: 'Advanced insights and forecasting', included: true },
            { name: 'White-label Service', description: 'Branded customer experience', included: true }
          ]
        }
      ],
      features: [
        'Ticket management',
        'Multi-channel support',
        'Customer feedback analysis',
        'Quality monitoring'
      ],
      minAgents: 3,
      maxAgents: 50,
      technologies: ['Zendesk', 'Salesforce', 'Freshdesk', 'Intercom'],
      industries: ['E-commerce', 'SaaS', 'Healthcare', 'Retail'],
      certifications: ['ISO 27001', 'HIPAA Compliance', 'GDPR Compliance']
    },
    {
      label: 'Sales & Lead Generation',
      value: 'sales',
      description: 'Result-driven sales campaigns and lead qualification',
      longDescription: 'Transform prospects into loyal customers with our comprehensive sales and lead generation services. Our experienced team uses data-driven strategies to identify, nurture, and convert high-quality leads.',
      tiers: [
        {
          name: 'Starter',
          description: 'Basic sales and lead generation package for small teams',
          icon: 'pi pi-chart-line',
          recommendedFor: ['Small Teams', 'Local Businesses', 'Startups'],
          pricing: {
            basePrice: 15,
            agentMultiplier: 1,
            hourMultiplier: 1.2,
            volumeDiscount: 0.05
          },
          features: [
            { name: 'Lead Research', description: 'Basic lead identification and verification', included: true },
            { name: 'Cold Calling', description: 'Outbound call campaigns', included: true },
            { name: 'Email Campaigns', description: 'Basic email outreach', included: true },
            { name: 'Lead Scoring', description: 'Simple lead qualification', included: false },
            { name: 'CRM Integration', description: 'Basic CRM updates', included: false }
          ]
        },
        {
          name: 'Growth',
          description: 'Advanced sales solutions for growing businesses',
          icon: 'pi pi-chart-bar',
          recommendedFor: ['Growing Companies', 'B2B Sales Teams', 'Marketing Agencies'],
          pricing: {
            basePrice: 20,
            agentMultiplier: 1.2,
            hourMultiplier: 1.3,
            volumeDiscount: 0.1
          },
          features: [
            { name: 'Advanced Prospecting', description: 'Multi-channel lead generation', included: true },
            { name: 'Sales Automation', description: 'Automated follow-ups and nurturing', included: true },
            { name: 'Pipeline Management', description: 'Full sales pipeline oversight', included: true },
            { name: 'Performance Analytics', description: 'Detailed conversion tracking', included: true },
            { name: 'Sales Training', description: 'Ongoing team training', included: true }
          ]
        },
        {
          name: 'Premium',
          description: 'Enterprise-grade sales and marketing solution',
          icon: 'pi pi-rocket',
          recommendedFor: ['Enterprise Companies', 'Global Sales Teams', 'High-volume Sales'],
          pricing: {
            basePrice: 25,
            agentMultiplier: 1.5,
            hourMultiplier: 1.4,
            volumeDiscount: 0.15
          },
          features: [
            { name: 'AI Lead Scoring', description: 'Advanced lead qualification with AI', included: true },
            { name: 'Custom Integration', description: 'Enterprise system integration', included: true },
            { name: 'Account-Based Marketing', description: 'Targeted ABM campaigns', included: true },
            { name: 'Sales Intelligence', description: 'Advanced market insights', included: true },
            { name: 'Revenue Optimization', description: 'Continuous process improvement', included: true }
          ]
        }
      ],
      features: [
        'Lead qualification',
        'Appointment setting',
        'Sales pipeline management',
        'Performance tracking'
      ],
      minAgents: 5,
      maxAgents: 40,
      technologies: ['Salesforce', 'HubSpot', 'Pipedrive', 'ZoomInfo'],
      industries: ['Technology', 'Financial Services', 'Manufacturing', 'Professional Services'],
      certifications: ['ISO 9001', 'Sales Certification']
    },
    {
      label: 'Technical Support',
      value: 'tech_support',
      description: 'Expert technical assistance and problem resolution',
      longDescription: 'Deliver exceptional technical support with our skilled engineers and advanced troubleshooting capabilities. We handle everything from basic technical queries to complex system issues.',
      tiers: [
        {
          name: 'Basic',
          description: 'Essential technical support for small teams',
          icon: 'pi pi-cog',
          recommendedFor: ['Small Teams', 'Startups', 'Basic Tech Support'],
          pricing: {
            basePrice: 18,
            agentMultiplier: 1,
            hourMultiplier: 1.2,
            volumeDiscount: 0.05
          },
          features: [
            { name: 'Email Support', description: 'Technical email assistance', included: true },
            { name: 'Basic Troubleshooting', description: 'Common issue resolution', included: true },
            { name: 'Knowledge Base', description: 'Basic documentation', included: true },
            { name: 'Remote Support', description: 'Limited remote assistance', included: false },
            { name: 'SLA Management', description: 'Basic response times', included: false }
          ]
        },
        {
          name: 'Advanced',
          description: 'Comprehensive technical support with advanced features',
          icon: 'pi pi-cogs',
          recommendedFor: ['Mid-size Companies', 'IT Teams', 'Software Companies'],
          pricing: {
            basePrice: 22,
            agentMultiplier: 1.2,
            hourMultiplier: 1.3,
            volumeDiscount: 0.1
          },
          features: [
            { name: 'Multi-channel Support', description: '24/7 technical assistance', included: true },
            { name: 'Advanced Diagnostics', description: 'Complex problem resolution', included: true },
            { name: 'Remote Assistance', description: 'Full remote support capabilities', included: true },
            { name: 'SLA Compliance', description: 'Guaranteed response times', included: true },
            { name: 'Technical Training', description: 'Customer education programs', included: true }
          ]
        },
        {
          name: 'Enterprise',
          description: 'Enterprise-grade technical support and consulting',
          icon: 'pi pi-server',
          recommendedFor: ['Large Enterprises', 'Tech Companies', 'Global Operations'],
          pricing: {
            basePrice: 28,
            agentMultiplier: 1.5,
            hourMultiplier: 1.4,
            volumeDiscount: 0.15
          },
          features: [
            { name: 'Dedicated Engineers', description: 'Specialized technical team', included: true },
            { name: 'Custom Solutions', description: 'Tailored technical support', included: true },
            { name: 'Proactive Monitoring', description: 'Issue prevention', included: true },
            { name: 'System Integration', description: 'Full systems support', included: true },
            { name: 'Technical Consulting', description: 'Strategic technical guidance', included: true }
          ]
        }
      ],
      features: [
        'Technical troubleshooting',
        'Remote assistance',
        'Knowledge base management',
        'Escalation handling'
      ],
      minAgents: 4,
      maxAgents: 30,
      technologies: ['ServiceNow', 'Jira', 'TeamViewer', 'Microsoft Azure'],
      industries: ['Software', 'IT Services', 'Telecommunications', 'IoT'],
      certifications: ['CompTIA', 'ITIL', 'Microsoft Certified']
    }
  ];

  get selectedServiceDetails(): ServiceOption | undefined {
    return this.services.find(s => s.value === this.selectedService);
  }

  selectedTier: string = '';
  selectedFeatures: string[] = [];

  getWhatsAppLink(): string {
    if (!this.selectedServiceDetails || !this.selectedTier) return '';

    const service = this.selectedServiceDetails;
    const tier = service.tiers.find(t => t.name === this.selectedTier);
    
    const message = encodeURIComponent(`
Hi, I'm interested in your ${service.label} service.

Service Details:
- Tier: ${this.selectedTier}
- Agents: ${this.agentCount}
- Shift Hours: ${this.shiftHours}

Additional Requirements:
${this.multilingualSupport ? '- Multilingual Support\n' : ''}
${this.dedicatedTeam ? '- Dedicated Team\n' : ''}
${this.customizedTraining ? '- Customized Training\n' : ''}

Selected Features:
${this.selectedFeatures.join('\n')}

Please provide me with more information about pricing and implementation.
    `);

    // Replace with your actual WhatsApp business number
    return `https://wa.me/923035851040?text=${message}`;
  }

  onServiceChange(): void {
    if (this.selectedServiceDetails) {
      this.agentCount = this.selectedServiceDetails.minAgents;
      this.selectedTier = '';
      this.selectedFeatures = [];
    }
  }

  onTierChange(tier: string): void {
    this.selectedTier = tier;
    if (this.selectedServiceDetails) {
      const tierDetails = this.selectedServiceDetails.tiers.find(t => t.name === tier);
      if (tierDetails) {
        this.selectedFeatures = tierDetails.features
          .filter(f => f.included)
          .map(f => f.name);
      }
    }
  }

  toggleFeature(feature: string): void {
    const index = this.selectedFeatures.indexOf(feature);
    if (index === -1) {
      this.selectedFeatures.push(feature);
    } else {
      this.selectedFeatures.splice(index, 1);
    }
  }

  isFeatureSelected(feature: string): boolean {
    return this.selectedFeatures.includes(feature);
  }

  getTierFeatures(tier: ServiceTier): ServiceFeature[] {
    return tier.features;
  }

  calculateROI(tier: ServiceTier): ROIMetrics {
    if (!tier) return {
      currentCost: 0,
      projectedSavings: 0,
      productivityGain: 0,
      qualityImprovement: 0,
      breakEvenMonths: 0
    };

    const monthlyPrice = this.calculateMonthlyPrice(tier);
    
    // Calculate current cost (estimated 30% higher than our price)
    const currentCost = monthlyPrice * 1.3;
    
    // Calculate projected savings
    const annualSavings = (currentCost - monthlyPrice) * 12;
    
    // Estimate productivity gain (10-30% based on tier)
    const productivityMultiplier = tier.name === 'Enterprise' ? 0.3 :
                                 tier.name === 'Professional' || tier.name === 'Growth' || tier.name === 'Advanced' ? 0.2 : 0.1;
    const productivityGain = monthlyPrice * productivityMultiplier;
    
    // Quality improvement (5-20% based on features)
    const qualityFeatures = ['Quality Monitoring', 'Quality Assurance', 'Advanced QA'].filter(
      f => tier.features.some(tf => tf.name.includes(f) && tf.included)
    ).length;
    const qualityImprovement = (qualityFeatures * 5) + 5;
    
    // Break-even calculation
    const totalInvestment = monthlyPrice * 12;
    const totalBenefits = annualSavings + (productivityGain * 12);
    const breakEvenMonths = Math.ceil((totalInvestment / totalBenefits) * 12);

    return {
      currentCost: Math.round(currentCost),
      projectedSavings: Math.round(annualSavings),
      productivityGain: Math.round(productivityGain),
      qualityImprovement: Math.round(qualityImprovement),
      breakEvenMonths: breakEvenMonths
    };
  }

  getROIChartData(metrics: ROIMetrics) {
    return {
      labels: ['Current Cost', 'Our Solution', 'Savings'],
      datasets: [
        {
          data: [
            metrics.currentCost * 12,
            this.calculateMonthlyPrice(this.selectedServiceDetails?.tiers.find(t => t.name === this.selectedTier)!) * 12,
            metrics.projectedSavings
          ],
          backgroundColor: ['#ef4444', '#3b82f6', '#10b981']
        }
      ]
    };
  }

  getProductivityData(metrics: ROIMetrics) {
    return {
      labels: ['Before', 'After'],
      datasets: [
        {
          data: [100, 100 + metrics.qualityImprovement],
          backgroundColor: ['#94a3b8', '#10b981']
        }
      ]
    };
  }

  downloadQuotePDF(): void {
    if (!this.selectedServiceDetails || !this.selectedTier) return;

    const doc = new jsPDF();
    const service = this.selectedServiceDetails;
    const tier = service.tiers.find(t => t.name === this.selectedTier);
    
    // Add logo and header
    doc.setFontSize(20);
    doc.setTextColor(37, 99, 235); // Brand primary color
    doc.text('UnifyNetwork LLC', 20, 20);
    
    doc.setFontSize(16);
    doc.setTextColor(30, 41, 59); // Slate 800
    doc.text('Custom Quote Summary', 20, 30);

    // Service Details
    doc.setFontSize(14);
    doc.text('Service Details', 20, 45);
    doc.setFontSize(12);
    doc.text(`Service: ${service.label}`, 25, 55);
    doc.text(`Tier: ${this.selectedTier}`, 25, 65);
    doc.text(`Agents: ${this.agentCount}`, 25, 75);
    doc.text(`Shift Hours: ${this.shiftHours} hours/day`, 25, 85);

    // Additional Requirements
    doc.setFontSize(14);
    doc.text('Additional Requirements', 20, 100);
    doc.setFontSize(12);
    let yPos = 110;
    if (this.multilingualSupport) {
      doc.text('• Multilingual Support', 25, yPos);
      yPos += 10;
    }
    if (this.dedicatedTeam) {
      doc.text('• Dedicated Team', 25, yPos);
      yPos += 10;
    }
    if (this.customizedTraining) {
      doc.text('• Customized Training', 25, yPos);
      yPos += 10;
    }

    // Included Features
    doc.setFontSize(14);
    doc.text('Included Features', 20, yPos + 10);
    doc.setFontSize(12);
    yPos += 20;
    this.selectedFeatures.forEach(feature => {
      doc.text(`• ${feature}`, 25, yPos);
      yPos += 10;
    });

    // Pricing Summary
    doc.setFontSize(14);
    doc.text('Pricing Summary', 20, yPos + 10);
    doc.setFontSize(12);
    yPos += 20;
    if (tier) {
      const monthlyPrice = this.calculateMonthlyPrice(tier);
      const annualPrice = this.calculateAnnualPrice(tier);
      const savings = this.getSavings(tier);

      doc.text(`Monthly Investment: ${this.formatPrice(monthlyPrice)}`, 25, yPos);
      doc.text(`Annual Investment: ${this.formatPrice(annualPrice)}`, 25, yPos + 10);
      doc.text(`Annual Savings: ${this.formatPrice(savings)}`, 25, yPos + 20);
    }

    // Contact Information
    yPos += 40;
    doc.setFontSize(14);
    doc.text('Contact Us', 20, yPos);
    doc.setFontSize(12);
    doc.text('WhatsApp: +92 303 5851040', 25, yPos + 10);
    doc.text('Email: info@unifynetwork.com', 25, yPos + 20);

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139); // Slate 500
    doc.text('This quote is valid for 30 days from the date of generation.', 20, 280);
    
    // Save the PDF
    doc.save('UnifyNetwork-Quote.pdf');
  }

  calculateMonthlyPrice(tier: ServiceTier): number {
    if (!tier) return 0;

    let price = tier.pricing.basePrice;
    
    // Apply agent multiplier
    price *= (this.agentCount * tier.pricing.agentMultiplier);
    
    // Apply hour multiplier
    price *= (this.shiftHours * tier.pricing.hourMultiplier);

    // Add premium features
    if (this.multilingualSupport) price *= 1.25;
    if (this.dedicatedTeam) price *= 1.2;
    if (this.customizedTraining) price *= 1.15;

    // Apply volume discount if applicable
    if (tier.pricing.volumeDiscount && this.agentCount >= 10) {
      const discount = 1 - tier.pricing.volumeDiscount;
      price *= discount;
    }

    // Calculate monthly cost (22 working days)
    return Math.round(price * 22);
  }

  calculateAnnualPrice(tier: ServiceTier): number {
    const monthlyPrice = this.calculateMonthlyPrice(tier);
    // Apply annual discount (2 months free)
    return monthlyPrice * 10;
  }

  getRecommendedTier(): ServiceTier | undefined {
    if (!this.selectedServiceDetails) return undefined;

    const tiers = this.selectedServiceDetails.tiers;
    
    // Logic to recommend tier based on requirements
    if (this.agentCount >= 20 || this.multilingualSupport || this.dedicatedTeam) {
      return tiers.find(t => t.name === 'Enterprise');
    } else if (this.agentCount >= 10 || this.shiftHours > 16) {
      return tiers.find(t => t.name === 'Professional' || t.name === 'Growth' || t.name === 'Advanced');
    }
    
    return tiers[0]; // Essential/Basic tier
  }

  getSavings(tier: ServiceTier): number {
    const monthlyPrice = this.calculateMonthlyPrice(tier);
    const annualPrice = this.calculateAnnualPrice(tier);
    return (monthlyPrice * 12) - annualPrice;
  }

  formatPrice(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }

  getSelectedTier(): ServiceTier | undefined {
    return this.selectedServiceDetails?.tiers.find(t => t.name === this.selectedTier);
  }

  getCurrentMonthlyPrice(): string {
    const tier = this.getSelectedTier();
    return tier ? this.formatPrice(this.calculateMonthlyPrice(tier)) : '$0';
  }

  getCurrentAnnualPrice(): string {
    const tier = this.getSelectedTier();
    return tier ? this.formatPrice(this.calculateAnnualPrice(tier)) : '$0';
  }

  getCurrentROIMetrics(): ROIMetrics {
    const tier = this.getSelectedTier();
    return tier ? this.calculateROI(tier) : {
      currentCost: 0,
      projectedSavings: 0,
      productivityGain: 0,
      qualityImprovement: 0,
      breakEvenMonths: 0
    };
  }

  getCurrentChartData() {
    return this.getROIChartData(this.getCurrentROIMetrics());
  }

  getProjectedQualityScore(): number {
    return 100 + this.getCurrentROIMetrics().qualityImprovement;
  }
}