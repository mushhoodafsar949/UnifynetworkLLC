import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  company?: string;
  serviceType: string;
  agentCount?: number;
  message: string;
  preferredContact: 'phone' | 'email';
  bestTimeToCall?: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  // You can use a free service like FormSpree or your own backend
  private readonly API_URL = 'https://formspree.io/f/YOUR_FORM_ID';

  constructor(private http: HttpClient) {}

  submitQuoteRequest(quote: QuoteRequest): Observable<any> {
    return this.http.post(this.API_URL, quote);
  }

  // Validate Pakistani phone number
  validatePakistanPhone(phone: string): boolean {
    const pakPhoneRegex = /^(\+92|0)(3\d{2}|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{7}$/;
    return pakPhoneRegex.test(phone);
  }
}
