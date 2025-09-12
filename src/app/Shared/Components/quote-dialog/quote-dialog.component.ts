import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { QuoteService, QuoteRequest } from '../../Services/quote.service';

@Component({
  selector: 'app-quote-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    RadioButtonModule,
    RippleModule
  ],
  templateUrl: './quote-dialog.component.html',
  styleUrl: './quote-dialog.component.css'
})
export class QuoteDialogComponent {
  @Input() set visible(value: boolean) {
    this._visible = value;
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  get visible(): boolean {
    return this._visible;
  }
  private _visible = false;

  @Input() showCloseButton = true;
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

  show() {
    this.visible = true;
    this.submitted = false;
    this.success = false;
    this.error = '';
    this.quoteForm.reset({
      preferredContact: 'phone'
    });
  }

  hide() {
    this.visible = false;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.quoteForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';

    const quoteRequest: QuoteRequest = this.quoteForm.value;

    this.quoteService.submitQuoteRequest(quoteRequest)
      .subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          setTimeout(() => {
            this.hide();
          }, 2000);
        },
        error: (error) => {
          this.error = 'Failed to submit quote request. Please try again.';
          this.loading = false;
          console.error('Quote submission error:', error);
        }
      });
  }
}
