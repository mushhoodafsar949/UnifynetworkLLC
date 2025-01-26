import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Check platform type
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'primeng/carousel';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { GoogleMapsModule } from '@angular/google-maps';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export interface TeamMember {
  name: string;
  designation: string;
  imageUrl: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [MatCardModule, CarouselModule, MatButtonModule, GoogleMapsModule, MatStepperModule],
  standalone: true,
})
export class AboutComponent implements OnInit, AfterViewInit {
  teamMembers: TeamMember[] = [];
  slidesToShow = 3;
  scrollStep = 3;
  responsiveOptions: any[] = [];
  milestones = [
    { year: 2010, description: 'Founded with a mission to connect businesses globally.' },
    { year: 2015, description: 'Reached 1,000+ global clients.' },
    { year: 2020, description: 'Expanded into 50+ countries worldwide.' },
  ];
  ceoMessage = {
    name: 'Hashir Afsar Yousafzai',
    message: 'At Unify Network, we believe that technology should simplify life, not complicate it. Our dedication to excellence and passion for innovation drives us to continually push the boundaries of what’s possible.',
  };

  // Coordinates for Google Maps
  center: google.maps.LatLngLiteral = { lat: 48.188884593985634, lng: -114.30972958233136 };
  zoom: number = 18;
  businessName = 'Unify Network LLC';

  // Platform check for browser environment
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId); // Determine if running on browser
  }

  ngOnInit(): void {
    // Team members data
    this.teamMembers = [
      { name: 'Muhammad Fahad', designation: 'Director HR', imageUrl: '../../assets/carousel-aboutscreen/img1.jpg' },
      { name: 'Jane Smith', designation: 'Marketing Manager', imageUrl: '../../assets/carousel-aboutscreen/img2.jpg' },
      { name: 'Michael Brown', designation: 'Software Developer', imageUrl: '../../assets/carousel-aboutscreen/img3.jpg' },
      { name: 'David Lee', designation: 'Sales Manager', imageUrl: '../../assets/carousel-aboutscreen/img4.jpg' },
      { name: 'Sarah Jones', designation: 'HR Manager', imageUrl: '../../assets/carousel-aboutscreen/img5.jpg' },
      { name: 'John Doe', designation: 'Project Manager', imageUrl: '../../assets/carousel-aboutscreen/img6.jpg' },
      { name: 'Emily Davis', designation: 'UI/UX Designer', imageUrl: '../../assets/carousel-aboutscreen/img7.jpg' },
      { name: 'Daniel Wilson', designation: 'Software Engineer', imageUrl: '../../assets/carousel-aboutscreen/img8.jpg' },
      { name: 'Amanda Garcia', designation: 'Marketing Specialist', imageUrl: '../../assets/carousel-aboutscreen/img10.jpg' },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '576px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

  }

  ngAfterViewInit(): void {
    // Initialize AOS only if it's running in the browser
    if (this.isBrowser) {
      AOS.init({
        duration: 1000,
        once: true, // Trigger animations only once
      });
    }
  }
}
