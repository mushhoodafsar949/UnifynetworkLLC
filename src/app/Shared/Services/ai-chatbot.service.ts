import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ServiceRecommendation {
  service: string;
  confidence: number;
  features: string[];
  description: string;
  benefits: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AiChatbotService {
  private readonly serviceKeywords = {
    customerSupport: ['customer', 'support', 'help', 'assistance', 'service'],
    sales: ['sales', 'leads', 'revenue', 'growth', 'marketing'],
    technical: ['technical', 'tech', 'it', 'software', 'hardware'],
    orderProcessing: ['order', 'processing', 'inventory', 'shipping', 'fulfillment']
  };

  private readonly serviceDetails = {
    customerSupport: {
      service: 'Customer Support',
      features: [
        '24/7 Multilingual Support',
        'Omnichannel Communication',
        'Quality Monitoring',
        'Customer Feedback Analysis'
      ],
      description: 'Professional customer service with trained agents available round the clock.',
      benefits: [
        'Improved Customer Satisfaction',
        'Reduced Response Time',
        'Enhanced Brand Loyalty',
        'Scalable Support Operations'
      ]
    },
    sales: {
      service: 'Sales & Lead Generation',
      features: [
        'Lead Qualification',
        'Appointment Setting',
        'Sales Pipeline Management',
        'Performance Analytics'
      ],
      description: 'Result-driven sales campaigns and lead qualification services.',
      benefits: [
        'Increased Revenue',
        'Quality Lead Generation',
        'Higher Conversion Rates',
        'Market Expansion'
      ]
    },
    technical: {
      service: 'Technical Support',
      features: [
        'Technical Troubleshooting',
        'Remote Assistance',
        'Knowledge Base Management',
        'SLA Compliance'
      ],
      description: 'Expert technical assistance and problem resolution.',
      benefits: [
        'Fast Issue Resolution',
        'Reduced Downtime',
        'Technical Expertise',
        'Proactive Monitoring'
      ]
    },
    orderProcessing: {
      service: 'Order Processing',
      features: [
        'Order Entry',
        'Payment Processing',
        'Inventory Management',
        'Shipping Coordination'
      ],
      description: 'Efficient order management and processing solutions.',
      benefits: [
        'Faster Order Processing',
        'Reduced Errors',
        'Inventory Optimization',
        'Customer Satisfaction'
      ]
    }
  };

  analyzeRequirements(userInput: string): Observable<ServiceRecommendation[]> {
    const recommendations: ServiceRecommendation[] = [];
    const words = userInput.toLowerCase().split(' ');

    // Calculate confidence scores for each service
    Object.entries(this.serviceKeywords).forEach(([service, keywords]) => {
      const matchCount = words.filter(word => 
        keywords.some(keyword => word.includes(keyword))
      ).length;

      if (matchCount > 0) {
        const confidence = matchCount / words.length;
        const details = this.serviceDetails[service as keyof typeof this.serviceDetails];
        
        recommendations.push({
          ...details,
          confidence
        });
      }
    });

    // Sort by confidence and return top 2 recommendations
    return of(recommendations
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 2)
    ).pipe(delay(1000)); // Simulate API delay
  }

  generateResponse(userInput: string): Observable<string> {
    const responses = [
      'I understand you\'re interested in our services. Would you like to know more about specific features?',
      'Based on your requirements, I can recommend some solutions. Shall we explore them?',
      'Let me help you find the perfect solution for your needs. What\'s your primary goal?',
      'I can provide detailed information about our services. What aspects are most important to you?'
    ];

    return of(responses[Math.floor(Math.random() * responses.length)])
      .pipe(delay(1000));
  }

  suggestNextSteps(service: string): Observable<string[]> {
    const suggestions = {
      customerSupport: [
        'View detailed features',
        'Calculate potential ROI',
        'Schedule a demo',
        'Get custom quote'
      ],
      sales: [
        'See success stories',
        'Learn about our approach',
        'Book a consultation',
        'Request pricing'
      ],
      technical: [
        'Explore technical capabilities',
        'View support tiers',
        'Talk to an expert',
        'Start free trial'
      ],
      orderProcessing: [
        'See integration options',
        'View pricing plans',
        'Request demo',
        'Talk to sales'
      ]
    };

    return of(suggestions[service as keyof typeof suggestions] || suggestions.customerSupport)
      .pipe(delay(500));
  }
}
