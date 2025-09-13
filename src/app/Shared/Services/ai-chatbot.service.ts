import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

export interface ServiceRecommendation {
  service: string;
  confidence: number;
  features: string[];
  description: string;
  benefits: string[];
  serviceLink?: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot' | 'service' | 'suggestion' | 'error';
  content: string;
  timestamp: Date;
  serviceLink?: string;
  suggestions?: string[];
  recommendations?: ServiceRecommendation[];
}

export interface ConversationContext {
  lastIntent?: string;
  lastService?: string;
  userPreferences?: {
    industry?: string;
    companySize?: string;
    budget?: string;
    priority?: string;
  };
  conversationStage: 'greeting' | 'understanding' | 'recommendation' | 'details' | 'closing';
}

@Injectable({
  providedIn: 'root'
})
export class AiChatbotService {
  private messages = new BehaviorSubject<ChatMessage[]>([]);
  private context = new BehaviorSubject<ConversationContext>({
    conversationStage: 'greeting'
  });

  private readonly intents = {
    greeting: ['hi', 'hello', 'hey', 'help', 'start'],
    pricing: ['price', 'cost', 'budget', 'expensive', 'cheap'],
    features: ['feature', 'capability', 'can', 'able', 'possible'],
    comparison: ['compare', 'difference', 'better', 'best', 'versus'],
    support: ['support', 'help', 'assist', 'guidance'],
    technical: ['technical', 'integration', 'api', 'setup'],
    demo: ['demo', 'trial', 'test', 'try'],
    contact: ['contact', 'speak', 'talk', 'call', 'email']
  };

  private readonly serviceKeywords = {
    customerSupport: ['customer', 'support', 'help', 'assistance', 'service', 'chat', 'call'],
    sales: ['sales', 'leads', 'revenue', 'growth', 'marketing', 'conversion'],
    technical: ['technical', 'tech', 'it', 'software', 'hardware', 'system'],
    orderProcessing: ['order', 'processing', 'inventory', 'shipping', 'fulfillment', 'delivery'],
    helpDesk: ['help desk', 'ticket', 'issue', 'problem', 'resolution'],
    liveChatSupport: ['live chat', 'instant', 'real-time', 'messaging'],
    appointmentScheduling: ['appointment', 'schedule', 'booking', 'calendar', 'meeting']
  };

  private readonly serviceDetails = {
    customerSupport: {
      service: 'Customer Support',
      features: [
        '24/7 Multilingual Support',
        'Omnichannel Communication',
        'Quality Monitoring',
        'Customer Feedback Analysis',
        'AI-Powered Routing',
        'Sentiment Analysis'
      ],
      description: 'Professional customer service with trained agents available round the clock.',
      benefits: [
        'Improved Customer Satisfaction',
        'Reduced Response Time',
        'Enhanced Brand Loyalty',
        'Scalable Support Operations',
        'Data-Driven Insights'
      ],
      serviceLink: '/services-detail/Customer Support'
    },
    sales: {
      service: 'Sales & Lead Generation',
      features: [
        'Lead Qualification',
        'Appointment Setting',
        'Sales Pipeline Management',
        'Performance Analytics',
        'AI Lead Scoring',
        'Automated Follow-ups'
      ],
      description: 'Result-driven sales campaigns and lead qualification services.',
      benefits: [
        'Increased Revenue',
        'Quality Lead Generation',
        'Higher Conversion Rates',
        'Market Expansion',
        'Predictive Sales Analytics'
      ],
      serviceLink: '/services-detail/Sales & Lead Generation'
    },
    technical: {
      service: 'Technical Support',
      features: [
        'Technical Troubleshooting',
        'Remote Assistance',
        'Knowledge Base Management',
        'SLA Compliance',
        'Proactive Monitoring',
        'Root Cause Analysis'
      ],
      description: 'Expert technical assistance and problem resolution.',
      benefits: [
        'Fast Issue Resolution',
        'Reduced Downtime',
        'Technical Expertise',
        'Proactive Monitoring',
        'System Optimization'
      ],
      serviceLink: '/services-detail/Technical Support'
    },
    orderProcessing: {
      service: 'Order Processing',
      features: [
        'Order Entry',
        'Payment Processing',
        'Inventory Management',
        'Shipping Coordination',
        'Real-time Tracking',
        'Automated Workflows'
      ],
      description: 'Efficient order management and processing solutions.',
      benefits: [
        'Faster Order Processing',
        'Reduced Errors',
        'Inventory Optimization',
        'Customer Satisfaction',
        'Supply Chain Visibility'
      ],
      serviceLink: '/services-detail/Order Processing'
    },
    helpDesk: {
      service: 'Help Desk Services',
      features: [
        'Ticket Management',
        'Priority Routing',
        'SLA Management',
        'Knowledge Base',
        'Self-service Portal',
        'Analytics Dashboard'
      ],
      description: 'Comprehensive help desk solutions for efficient issue resolution.',
      benefits: [
        'Streamlined Support',
        'Faster Resolution',
        'Knowledge Management',
        'Resource Optimization',
        'Service Analytics'
      ],
      serviceLink: '/services-detail/Help Desk Services'
    },
    liveChatSupport: {
      service: 'Live Chat Support',
      features: [
        'Real-time Assistance',
        'Co-browsing',
        'Chat Analytics',
        'Chatbot Integration',
        'Multi-language Support',
        'Custom Branding'
      ],
      description: 'Instant customer support through live chat channels.',
      benefits: [
        'Instant Response',
        'Higher Engagement',
        'Cost Efficiency',
        'Customer Insights',
        'Increased Conversions'
      ],
      serviceLink: '/services-detail/Live Chat Support'
    },
    appointmentScheduling: {
      service: 'Appointment Scheduling',
      features: [
        'Online Booking',
        'Calendar Management',
        'Automated Reminders',
        'Resource Allocation',
        'Integration Options',
        'Analytics & Reporting'
      ],
      description: 'Efficient appointment scheduling and management system.',
      benefits: [
        'Reduced No-shows',
        'Time Savings',
        'Resource Optimization',
        'Customer Convenience',
        'Business Growth'
      ],
      serviceLink: '/services-detail/Appointment Scheduling'
    }
  };

  // Observable streams
  getMessages(): Observable<ChatMessage[]> {
    return this.messages.asObservable();
  }

  getContext(): Observable<ConversationContext> {
    return this.context.asObservable();
  }

  // Message handling
  addMessage(message: Omit<ChatMessage, 'id' | 'timestamp'>): void {
    const newMessage: ChatMessage = {
      ...message,
      id: this.generateId(),
      timestamp: new Date()
    };

    const currentMessages = this.messages.getValue();
    this.messages.next([...currentMessages, newMessage]);

    if (message.type === 'user') {
      this.processUserMessage(message.content);
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  // Intent analysis
  private detectIntent(input: string): string | undefined {
    const words = input.toLowerCase().split(' ');
    let maxMatches = 0;
    let detectedIntent: string | undefined;

    Object.entries(this.intents).forEach(([intent, keywords]) => {
      const matches = words.filter(word => 
        keywords.some(keyword => word.includes(keyword))
      ).length;

      if (matches > maxMatches) {
        maxMatches = matches;
        detectedIntent = intent;
      }
    });

    return detectedIntent;
  }

  // Message processing
  private processUserMessage(input: string): void {
    const intent = this.detectIntent(input);
    const currentContext = this.context.getValue();

    // Update context with new intent
    this.context.next({
      ...currentContext,
      lastIntent: intent,
      conversationStage: this.determineNextStage(currentContext.conversationStage, intent)
    });

    // Generate appropriate response based on intent and context
    this.generateResponse(input, intent, currentContext).pipe(
      tap(response => this.addMessage(response))
    ).subscribe();
  }

  private determineNextStage(currentStage: string, intent?: string): ConversationContext['conversationStage'] {
    switch (currentStage) {
      case 'greeting':
        return 'understanding';
      case 'understanding':
        return intent === 'pricing' || intent === 'features' ? 'recommendation' : 'understanding';
      case 'recommendation':
        return intent === 'demo' || intent === 'contact' ? 'closing' : 'details';
      default:
        return 'understanding';
    }
  }

  // Advanced response generation
  private generateResponse(input: string, intent?: string, context?: ConversationContext): Observable<ChatMessage> {
    switch (intent) {
      case 'greeting':
        return this.handleGreeting();
      case 'pricing':
        return this.handlePricing(input);
      case 'features':
        return this.handleFeatures(input);
      case 'comparison':
        return this.handleComparison(input);
      case 'demo':
        return this.handleDemo();
      case 'contact':
        return this.handleContact();
      default:
        return this.analyzeRequirements(input).pipe(
          map(recommendations => ({
            id: this.generateId(),
            timestamp: new Date(),
            type: 'service',
            content: 'Based on your requirements, here are some recommended services:',
            recommendations
          }))
        );
    }
  }

  private handleGreeting(): Observable<ChatMessage> {
    const responses = [
      "Hello! I'm here to help you find the perfect solution for your business. What type of service are you looking for?",
      "Hi there! I can help you explore our services and find the best fit for your needs. What's your main requirement?",
      "Welcome! I'm your AI assistant. I can provide detailed information about our services and help you make the right choice. What would you like to know?"
    ];

    return of({
      id: this.generateId(),
      timestamp: new Date(),
      type: 'bot',
      content: responses[Math.floor(Math.random() * responses.length)],
      suggestions: ['Tell me about your services', 'I need pricing information', 'Show me features', 'Book a demo']
    });
  }

  private handlePricing(input: string): Observable<ChatMessage> {
    return this.analyzeRequirements(input).pipe(
      map(recommendations => ({
        id: this.generateId(),
        timestamp: new Date(),
        type: 'bot',
        content: "I can help you understand our pricing options. Our pricing is customized based on your specific needs. Here are some relevant services:",
        recommendations,
        suggestions: ['Get custom quote', 'Schedule consultation', 'Compare plans', 'Talk to sales']
      }))
    );
  }

  private handleFeatures(input: string): Observable<ChatMessage> {
    return this.analyzeRequirements(input).pipe(
      map(recommendations => ({
        id: this.generateId(),
        timestamp: new Date(),
        type: 'service',
        content: "Here are the key features of our recommended services:",
        recommendations,
        suggestions: ['Tell me more', 'See demo', 'Compare services', 'Get pricing']
      }))
    );
  }

  private handleComparison(input: string): Observable<ChatMessage> {
    return this.analyzeRequirements(input).pipe(
      map(recommendations => ({
        id: this.generateId(),
        timestamp: new Date(),
        type: 'service',
        content: "Let me help you compare our services:",
        recommendations,
        suggestions: ['Show detailed comparison', 'Get recommendation', 'See pricing', 'Talk to expert']
      }))
    );
  }

  private handleDemo(): Observable<ChatMessage> {
    return of({
      id: this.generateId(),
      timestamp: new Date(),
      type: 'bot',
      content: "I'd be happy to arrange a demo for you. Our demos are personalized to show you exactly how our services can benefit your business.",
      suggestions: ['Schedule demo', 'Watch video tour', 'Talk to sales', 'Get pricing first']
    });
  }

  private handleContact(): Observable<ChatMessage> {
    return of({
      id: this.generateId(),
      timestamp: new Date(),
      type: 'bot',
      content: "I'll help you get in touch with our team. You can reach us through multiple channels:",
      suggestions: ['Call sales team', 'Send email', 'Schedule meeting', 'Chat with expert']
    });
  }

  // Enhanced requirement analysis
  analyzeRequirements(userInput: string): Observable<ServiceRecommendation[]> {
    const recommendations: ServiceRecommendation[] = [];
    const words = userInput.toLowerCase().split(' ');
    const context = this.context.getValue();

    // Calculate confidence scores with context awareness
    Object.entries(this.serviceKeywords).forEach(([service, keywords]) => {
      let matchCount = words.filter(word => 
        keywords.some(keyword => word.includes(keyword))
      ).length;

      // Boost score based on context
      if (context.userPreferences) {
        if (context.userPreferences.industry === 'enterprise' && 
            ['helpDesk', 'technical'].includes(service)) {
          matchCount *= 1.2;
        }
        if (context.userPreferences.priority === 'speed' && 
            ['liveChatSupport', 'customerSupport'].includes(service)) {
          matchCount *= 1.3;
        }
      }

      if (matchCount > 0) {
        const confidence = Math.min(matchCount / words.length, 1);
        const details = this.serviceDetails[service as keyof typeof this.serviceDetails];
        
        recommendations.push({
          ...details,
          confidence
        });
      }
    });

    // Sort by confidence and return top 3 recommendations
    return of(recommendations
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 3)
    ).pipe(delay(500));
  }

  // Context management
  updateUserPreferences(preferences: Partial<ConversationContext['userPreferences']>): void {
    const currentContext = this.context.getValue();
    this.context.next({
      ...currentContext,
      userPreferences: {
        ...currentContext.userPreferences,
        ...preferences
      }
    });
  }
}
