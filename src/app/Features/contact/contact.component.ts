import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
// Removed AOS for better performance
// Removed AOS styles import

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    Textarea,
    SelectModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
})
export class ContactComponent implements AfterViewInit  {
  contactForm: FormGroup;
  
  serviceOptions = [
    { label: 'Customer Support', value: 'customer-support' },
    { label: 'Sales & Lead Generation', value: 'sales-generation' },
    { label: 'Technical Support', value: 'technical-support' },
    { label: 'Live Chat Support', value: 'live-chat' },
    { label: 'Custom Solution', value: 'custom-solution' }
  ];
  
  volumeOptions = [
    { label: 'Under 100 calls/day', value: 'under-100' },
    { label: '100-500 calls/day', value: '100-500' },
    { label: '500-1,000 calls/day', value: '500-1000' },
    { label: '1,000-5,000 calls/day', value: '1000-5000' },
    { label: 'Over 5,000 calls/day', value: 'over-5000' }
  ];

  // Example images for the "Unify Network Details" section
  heroImages = [
    { url: 'assets/images/feedback-speed.jpg', alt: 'Quick Feedback', caption: 'Feedback Within 24 Hours' },
    { url: 'assets/images/our-belief.jpg', alt: 'Our Belief', caption: 'Transparency & Trust' },
    { url: 'assets/images/global-reach.jpg', alt: 'Global Reach', caption: 'Connecting Globally' },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  /**
   * Submit the contact form
   */
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);

      // Example: Displaying a success message
      alert('Thank you for reaching out! We will get back to you shortly.');
      this.contactForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
  ngAfterViewInit() {
    // Removed AOS initialization for better performance
  }
}
