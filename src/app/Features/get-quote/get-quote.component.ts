import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { QuoteService } from '../../Shared/Services/quote.service';

@Component({
  selector: 'app-get-quote',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    DropdownModule,
    RadioButtonModule
  ],
  templateUrl: './get-quote.component.html',
  styleUrl: './get-quote.component.css'
})
export class GetQuoteComponent {
  quoteForm: FormGroup;
  loading = false;
  submitted = false;
  success = false;
  error = '';

  serviceTypes = [
    { label: 'Customer Support', value: 'customer_support' },
    { label: 'Sales & Lead Generation', value: 'sales' },
    { label: 'Technical Support', value: 'tech_support' },
    { label: 'Order Processing', value: 'order_processing' },
    { label: 'Appointment Scheduling', value: 'appointments' }
  ];

  constructor(
    private fb: FormBuilder,
    private quoteService: QuoteService
  ) {
    this.quoteForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, this.pakistanPhoneValidator.bind(this)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      serviceType: ['', Validators.required],
      agentCount: [''],
      message: ['', Validators.required],
      preferredContact: ['phone', Validators.required],
      bestTimeToCall: ['']
    });
  }

  pakistanPhoneValidator(control: any) {
    if (!control.value) return null;
    return this.quoteService.validatePakistanPhone(control.value) 
      ? null 
      : { invalidPhone: true };
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.quoteForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';

    this.quoteService.submitQuoteRequest(this.quoteForm.value)
      .subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to submit quote request. Please try again.';
          this.loading = false;
          console.error('Quote submission error:', error);
        }
      });
  }
}