import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-service-detail',
  imports: [CommonModule, ButtonModule, CardModule, RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
  standalone: true,
})
export class ServiceDetailComponent implements OnInit, OnDestroy {
  service: any;
  private scrollPosition: [number, number] = [0, 0];
  services = [
    {
      id: 1,
      title: 'Customer Support',
      icon: 'support_agent',
      image: 'customer-support.jpg',
      description: 'Provide unparalleled customer satisfaction with 24/7 support tailored to your clients’ needs.',
      overview: 'Unify Network delivers top-notch customer support services designed to cater to global audiences. Our team ensures swift resolutions, enhancing customer loyalty and satisfaction.',
      features: ['24/7 Availability', 'Multi-language Assistance', 'Cross-platform Support'],
      benefits: 'Boost customer retention and brand loyalty by addressing client concerns promptly and professionally.',
      useCases: ['E-commerce platforms handling global customers', 'Tech companies offering troubleshooting', 'Businesses with multilingual audiences']
    },
    {
      id: 2,
      title: 'Sales & Lead Generation',
      icon: 'campaign',
      image: 'sales-and-lead-generation.jpg',
      description: 'Turn potential leads into loyal customers with our tailored sales strategies.',
      overview: 'At Unify Network, we specialize in creating customized sales campaigns to nurture leads and drive conversions. Our expertise ensures your sales pipeline stays full and productive.',
      features: ['Targeted Campaigns', 'Lead Qualification', 'Dedicated Sales Teams'],
      benefits: 'Enhance your sales revenue without investing in in-house teams by leveraging our proven methodologies.',
      useCases: ['Businesses launching new products', 'Organizations aiming to improve lead conversion rates', 'Startups targeting niche markets']
    },
    {
      id: 3,
      title: 'Technical Support',
      icon: 'build',
      image: 'technical-support.jpg',
      description: 'Deliver seamless user experiences with expert technical assistance for your products.',
      overview: 'Our technical support services provide your customers with professional guidance, ensuring your products operate smoothly and effectively.',
      features: ['Real-time Troubleshooting', 'Advanced Diagnostics', 'Expert Problem Resolution'],
      benefits: 'Minimize downtime and enhance user satisfaction with reliable support from skilled professionals.',
      useCases: ['Software companies with SaaS solutions', 'Electronics manufacturers needing post-sale support', 'Enterprises providing IT services']
    },
    {
      id: 4,
      title: 'Software Development',
      icon: 'code',
      image: 'software-development.jpg',
      description: 'Custom software solutions tailored to transform your business operations.',
      overview: 'Unify Network develops cutting-edge software to meet your business’s unique challenges. From ideation to deployment, we bring your vision to life.',
      features: ['Custom Application Development', 'Scalable Solutions', 'End-to-End Implementation'],
      benefits: 'Drive efficiency and innovation with software designed to align with your goals.',
      useCases: ['Developing mobile apps for better user engagement', 'Automating workflows in enterprises', 'Building CRM systems for customer management']
    },
    {
      id: 5,
      title: 'Inbound Call Handling',
      icon: 'call',
      image: 'inbound-campaign.jpg',
      description: 'Provide professional support to your customers with our inbound call handling services.',
      overview: 'Our inbound call handling service ensures your customers receive prompt and courteous assistance, enhancing your brand’s reputation.',
      features: ['Quick Response Times', 'Trained Customer Service Agents', 'CRM Integration for Personalized Service'],
      benefits: 'Foster trust and reliability by delivering exceptional support with each call.',
      useCases: ['Managing high call volumes during promotions', 'Providing customer assistance for services', 'Handling inquiries for subscription-based models']
    },
    {
      id: 6,
      title: 'Outbound Campaigns',
      icon: 'ring_volume',
      image: 'outbound-campaign.jpg',
      description: 'Expand your market reach with impactful outbound call campaigns.',
      overview: 'Unify Network creates and executes results-driven outbound campaigns, helping you connect with prospects and achieve your sales goals.',
      features: ['Scripted Outreach', 'Real-time Analytics', 'Highly Trained Representatives'],
      benefits: 'Increase brand awareness and sales conversion rates with targeted campaigns tailored to your objectives.',
      useCases: ['Launching new products to target audiences', 'Re-engaging inactive customers', 'Conducting surveys or feedback campaigns']
    },
    {
      id: 7,
      title: 'Order Processing',
      icon: 'shopping_cart',
      image: 'order-processing.jpg',
      description: 'Streamline order management and tracking with our expert solutions.',
      overview: 'Our order processing services ensure every customer purchase is managed efficiently, enhancing satisfaction and loyalty.',
      features: ['Accurate Order Entry', 'Real-time Tracking Updates', 'Efficient Workflow Management'],
      benefits: 'Boost operational efficiency while providing a seamless experience to your customers.',
      useCases: ['E-commerce platforms with high order volumes', 'Retailers managing multi-channel sales', 'Subscription services handling recurring orders']
    },
    {
      id: 8,
      title: 'Survey Management',
      icon: 'poll',
      image: 'survey-management.jpg',
      description: 'Gather actionable insights through effective survey management.',
      overview: 'Unify Network helps you design and execute surveys that yield valuable feedback for your business decisions.',
      features: ['Customizable Survey Design', 'Detailed Data Analysis', 'Actionable Reporting'],
      benefits: 'Improve your offerings by understanding customer preferences and market trends.',
      useCases: ['Evaluating customer satisfaction', 'Conducting market research', 'Measuring service quality across regions']
    },
    {
      id: 9,
      title: 'Live Chat Support',
      icon: 'chat',
      image: 'live-chat-support.jpg',
      description: 'Address customer queries instantly with real-time chat support.',
      overview: 'Our live chat support ensures quick and effective resolutions, improving customer engagement and satisfaction.',
      features: ['Proactive Chat Prompts', 'Multi-chat Handling', 'Seamless CRM Integration'],
      benefits: 'Enhance your accessibility and reduce response times, leading to happier customers.',
      useCases: ['E-commerce sites providing shopping guidance', 'Service providers addressing account issues', 'Tech firms offering troubleshooting']
    },
    {
      id: 10,
      title: 'Help Desk Services',
      icon: 'help_outline',
      image: 'help-desk-services.jpg',
      description: 'Comprehensive help desk solutions for all your support needs.',
      overview: 'Our help desk services provide centralized solutions for resolving technical and non-technical issues.',
      features: ['Tiered Support Models', 'Centralized Ticketing', 'Skilled Issue Resolution'],
      benefits: 'Ensure efficient problem resolution and build customer trust with responsive support.',
      useCases: ['IT firms offering technical services', 'Organizations managing diverse clients', 'Service providers addressing detailed customer queries']
    },
    {
      id: 11,
      title: 'Appointment Scheduling',
      icon: 'event',
      image: 'appointments.jpg',
      description: 'Manage appointments seamlessly with our scheduling solutions.',
      overview: 'Unify Network’s appointment scheduling service ensures efficient and hassle-free bookings for clients and businesses alike.',
      features: ['Automated Scheduling Tools', 'Notifications and Reminders', 'Flexible Rescheduling Options'],
      benefits: 'Reduce no-shows and enhance customer satisfaction with organized scheduling.',
      useCases: ['Healthcare providers managing patient appointments', 'Educational institutions arranging meetings', 'Professional services coordinating client schedules']
    }
  ];



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    const serviceTitle = this.route.snapshot.paramMap.get('id');
    this.service = this.services.find((s) => s.title === serviceTitle);

    if (!this.service) {
      this.router.navigate(['/']); // Redirect if service not found
    } else {
      // Scroll to top of the page on navigation
      this.viewportScroller.scrollToPosition([0, 0]);
    }
  }

  ngOnDestroy(): void {
    // Save scroll position before leaving
    this.scrollPosition = this.viewportScroller.getScrollPosition();
  }

  navigateBack(): void {
    this.router.navigate(['/']).then(() => {
      // Restore scroll position
      setTimeout(() => {
        this.viewportScroller.scrollToPosition(this.scrollPosition);
      }, 0);
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
    // Scroll to top of the page on back navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getCategoryName(serviceTitle: string): string {
    const categoryMap: { [key: string]: string } = {
      'Customer Support': 'Support Services',
      'Sales & Lead Generation': 'Sales Services',
      'Technical Support': 'Technical Services',
      'Live Chat Support': 'Digital Services',
      'Order Processing': 'Business Services',
      'Inbound Campaign': 'Campaign Services',
      'Outbound Campaign': 'Campaign Services',
      'Help Desk Services': 'Support Services',
      'Survey Management': 'Analytics Services',
      'Appointment Scheduling': 'Business Services'
    };
    return categoryMap[serviceTitle] || 'Professional Services';
  }

  getServiceHighlights(): string[] {
    return [
      'Industry-leading expertise',
      'Proven track record',
      'Scalable solutions',
      'Cost-effective approach'
    ];
  }



  getFeatureDescription(feature: string): string {
    const descriptions: { [key: string]: string } = {
      '24/7 Availability': 'Round-the-clock support ensuring your customers are never left waiting',
      'Multi-language Assistance': 'Professional support in multiple languages to serve global customers',
      'Cross-platform Support': 'Seamless assistance across all your communication channels',
      'Targeted Campaigns': 'Data-driven campaigns designed to reach your ideal customers',
      'Lead Qualification': 'Expert screening to identify high-quality prospects',
      'Dedicated Sales Teams': 'Specialized teams focused on your specific industry and goals',
      'Real-time Troubleshooting': 'Immediate problem resolution to minimize downtime',
      'Advanced Diagnostics': 'Sophisticated tools and techniques for accurate problem identification',
      'Expert Problem Resolution': 'Experienced technicians with deep product knowledge'
    };
    return descriptions[feature] || 'Professional service delivery with attention to detail';
  }

  getBenefitsList(): string[] {
    return [
      'Increased customer satisfaction',
      'Reduced operational costs',
      'Improved efficiency',
      'Enhanced brand reputation',
      '24/7 professional support'
    ];
  }

  getUseCaseTitle(useCase: string): string {
    if (useCase.includes('E-commerce')) return 'E-commerce Excellence';
    if (useCase.includes('Tech')) return 'Technology Solutions';
    if (useCase.includes('Businesses')) return 'Business Growth';
    if (useCase.includes('Software')) return 'Software Support';
    if (useCase.includes('Electronics')) return 'Product Support';
    return 'Professional Services';
  }

  getServiceIconClass(icon: string): string {
    const iconMap: {[key: string]: string} = {
      'support_agent': 'pi-headphones',
      'campaign': 'pi-chart-line',
      'build': 'pi-cog',
      'chat': 'pi-comments',
      'call': 'pi-phone',
      'ring_volume': 'pi-send',
      'shopping_cart': 'pi-shopping-cart',
      'poll': 'pi-chart-bar',
      'help_outline': 'pi-question-circle',
      'event': 'pi-calendar'
    };
    return iconMap[icon] || 'pi-briefcase';
  }

  getFeatureIcon(index: number): string {
    const icons = [
      'pi-star',
      'pi-shield',
      'pi-users',
      'pi-clock',
      'pi-globe',
      'pi-cog',
      'pi-chart-line',
      'pi-headphones'
    ];
    return icons[index % icons.length];
  }

}
