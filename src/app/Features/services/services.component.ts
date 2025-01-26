import { AfterViewInit, Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import styles
@Component({
  selector: 'app-services',
  imports: [CommonModule,MatButtonModule,MatGridListModule,RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements AfterViewInit {
  services = [
    {
      id:1,
      title: 'Customer Support',
      icon: 'support_agent',
      imageUrl:'../../../assets/services/customer-support.jpg',
      description: '24/7 multi-language support to assist your clients with inquiries and issues.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:2,
      title: 'Sales & Lead Generation',
      icon: 'campaign',
      imageUrl:'../../../assets/services/sales-and-lead-generation.jpg',
      description: 'Convert potential leads into loyal customers through our dedicated team.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:3,
      title: 'Technical Support',
      icon: 'build',
      imageUrl:'../../../assets/services/technical-support.jpg',
      description: 'Professional technical assistance for your products, ensuring seamless user experiences.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:4,
      title: 'Software Development',
      icon: 'code',
      imageUrl:'../../../assets/services/software-development.jpg',
      description: 'Custom software solutions tailored to optimize your business processes.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:5,
      title: 'Inbound Call Handling',
      icon: 'call',
      imageUrl:'../../../assets/services/inbound-campaign.jpg',
      description: 'Efficient handling of inbound calls to ensure your customers get prompt responses.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:6,
      title: 'Outbound Campaigns',
      icon: 'ring_volume',
      imageUrl:'../../../assets/services/outbound-campaign.jpg',
      description: 'Boost your sales and reach with professional outbound call campaigns.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:7,
      title: 'Order Processing',
      icon: 'shopping_cart',
      imageUrl:'../../../assets/services/order-processing.jpg',
      description: 'Streamlined order processing and tracking to enhance customer satisfaction.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:8,
      title: 'Survey Management',
      icon: 'poll',
      imageUrl:'../../../assets/services/survey-management.jpg',
      description: 'Collect and analyze customer feedback to improve your services and products.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:9,
      title: 'Live Chat Support',
      icon: 'chat',
      imageUrl:'../../../assets/services/live-chat-support.jpg',
      description: 'Real-time chat support to address customer concerns promptly and effectively.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:10,
      title: 'Help Desk Services',
      icon: 'help_outline',
      imageUrl:'../../../assets/services/help-desk-services.jpg',
      description: 'Comprehensive help desk solutions to address technical and non-technical queries.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:11,
      title: 'Appointment Scheduling',
      icon: 'event',
      imageUrl:'../../../assets/services/appointments.jpg',
      description: 'Efficient scheduling services to manage appointments and bookings seamlessly.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    }
  ];

  ngAfterViewInit() {
      // Ensure AOS is initialized only in the browser
      if (typeof window !== 'undefined') {
        AOS.init({
          duration: 1000,
          once: true, // Trigger the animation only once
        });
      }
    }
}
