import { Component, AfterViewInit, model, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { GalleriaModule } from 'primeng/galleria';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import styles

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,GalleriaModule, MatCardModule,MatTabsModule, MatIconModule, MatGridListModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  images: any[] = [];
  showHeroContent: boolean = true;
  activeIndex: number = 0; // Track the current active index


  constructor() { }
    ngOnInit() {

      this.images = [
        { type: 'gif', previewImageSrc: '../../assets/galleria-homescreen-herosection/unifynetwork.gif', alt: 'Unify network logo', title: 'Unify network logo' },
        { type: 'image', previewImageSrc: '../../assets/galleria-homescreen-herosection/CoFOUNDER2.png', alt: 'Co Founder', title: 'Co founder Unify Network LLC!' },
        { type: 'image', previewImageSrc: '../../assets/galleria-homescreen-herosection/img1.jpg', alt: 'office', title: 'Get together' },
        { type: 'image', previewImageSrc: '../../assets/galleria-homescreen-herosection/img2.jpg', alt: 'office', title: 'workstations' },
        { type: 'image', previewImageSrc: '../../assets/galleria-homescreen-herosection/img3.jpg', alt: 'Door', title: 'Everyday is a new begining!' },
      ];

    }
    ngDoCheck() {
      // Update the hero content visibility dynamically
      this.showHeroContent = !(this.activeIndex === 0 || this.activeIndex === 1);
    }
  services = [
    {
      id:1,
      title: 'Customer Support',
      icon: 'support_agent',
      description: '24/7 multi-language support to assist your clients with inquiries and issues.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:2,
      title: 'Sales & Lead Generation',
      icon: 'campaign',
      description: 'Convert potential leads into loyal customers through our dedicated team.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:3,
      title: 'Technical Support',
      icon: 'build',
      description: 'Professional technical assistance for your products, ensuring seamless user experiences.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:4,
      title: 'Software Development',
      icon: 'code',
      description: 'Custom software solutions tailored to optimize your business processes.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:5,
      title: 'Inbound Call Handling',
      icon: 'call',
      description: 'Efficient handling of inbound calls to ensure your customers get prompt responses.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:6,
      title: 'Outbound Campaigns',
      icon: 'ring_volume',
      description: 'Boost your sales and reach with professional outbound call campaigns.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:7,
      title: 'Order Processing',
      icon: 'shopping_cart',
      description: 'Streamlined order processing and tracking to enhance customer satisfaction.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:8,
      title: 'Survey Management',
      icon: 'poll',
      description: 'Collect and analyze customer feedback to improve your services and products.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:9,
      title: 'Live Chat Support',
      icon: 'chat',
      description: 'Real-time chat support to address customer concerns promptly and effectively.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:10,
      title: 'Help Desk Services',
      icon: 'help_outline',
      description: 'Comprehensive help desk solutions to address technical and non-technical queries.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    },
    {
      id:11,
      title: 'Appointment Scheduling',
      icon: 'event',
      description: 'Efficient scheduling services to manage appointments and bookings seamlessly.',
      details: 'We provide comprehensive customer support through trained agents equipped to handle diverse customer needs in multiple languages.'
    }
  ];


  statistics = {
    callsHandled: '5,320,000+',
    clientsServed: '10,000+',
    teams: '150+'
  };



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
