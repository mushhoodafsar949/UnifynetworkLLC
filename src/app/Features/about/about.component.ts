import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GoogleMapsModule } from '@angular/google-maps';
// Removed AOS for better performance

export interface TeamMember {
  name: string;
  designation: string;
  imageUrl: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule, ButtonModule, CardModule, GoogleMapsModule],
  standalone: true,
})
export class AboutComponent implements OnInit {
  currentYear = new Date().getFullYear();
  teamMembers: TeamMember[] = [];
  private currentPage = 0;
  private itemsPerPage = 3;
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

  constructor() {}

  // Navigation methods
  nextTeamMembers() {
    const maxPages = Math.ceil(this.allTeamMembers.length / this.itemsPerPage) - 1;
    this.currentPage = Math.min(this.currentPage + 1, maxPages);
    this.updateVisibleTeamMembers();
  }

  previousTeamMembers() {
    this.currentPage = Math.max(this.currentPage - 1, 0);
    this.updateVisibleTeamMembers();
  }

  private updateVisibleTeamMembers() {
    const start = this.currentPage * this.itemsPerPage;
    this.teamMembers = this.allTeamMembers.slice(start, start + this.itemsPerPage);
  }

  private allTeamMembers: TeamMember[] = [
    { name: 'Muhammad Fahad', designation: 'Director HR', imageUrl: 'assets/carousel-aboutscreen/img1.jpg' },
    { name: 'Jane Smith', designation: 'Marketing Manager', imageUrl: 'assets/carousel-aboutscreen/img2.jpg' },
    { name: 'Michael Brown', designation: 'Software Developer', imageUrl: 'assets/carousel-aboutscreen/img3.jpg' },
    { name: 'David Lee', designation: 'Sales Manager', imageUrl: 'assets/carousel-aboutscreen/img4.jpg' },
    { name: 'Sarah Jones', designation: 'HR Manager', imageUrl: 'assets/carousel-aboutscreen/img5.jpg' },
    { name: 'John Doe', designation: 'Project Manager', imageUrl: 'assets/carousel-aboutscreen/img6.jpg' },
    { name: 'Emily Davis', designation: 'UI/UX Designer', imageUrl: 'assets/carousel-aboutscreen/img7.jpg' },
    { name: 'Daniel Wilson', designation: 'Software Engineer', imageUrl: 'assets/carousel-aboutscreen/img8.jpg' },
    { name: 'Amanda Garcia', designation: 'Marketing Specialist', imageUrl: 'assets/carousel-aboutscreen/img10.jpg' }
  ];

  ngOnInit(): void {
    this.updateVisibleTeamMembers();
  }
}
