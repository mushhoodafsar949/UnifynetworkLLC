import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import styles

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
})
export class ContactComponent implements AfterViewInit  {
  contactForm: FormGroup;

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
    // Ensure AOS is initialized only in the browser
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true, // Trigger the animation only once
      });
    }
  }
}
