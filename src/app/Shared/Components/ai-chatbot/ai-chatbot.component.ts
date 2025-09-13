import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { OverlayPanelModule } from 'primeng/overlaypanel';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'suggestion' | 'service' | 'link';
  suggestions?: string[];
  serviceLink?: string;
}

@Component({
  selector: 'app-ai-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    AvatarModule,
    TooltipModule,
    OverlayPanelModule
  ],
  template: `
    <div class="chatbot-container" [class.expanded]="isExpanded">
      <!-- Chat Header -->
      <div class="chat-header" (click)="toggleChat()">
        <div class="header-content">
          <i class="pi pi-comments"></i>
          <span>AI Assistant</span>
        </div>
        <i class="pi" [class.pi-chevron-up]="isExpanded" [class.pi-chevron-down]="!isExpanded"></i>
      </div>

      <!-- Chat Messages -->
      <div class="chat-messages" *ngIf="isExpanded">
        <div class="message-container" *ngFor="let message of messages">
          <div class="message" [class.user-message]="message.isUser">
            <p-avatar [icon]="message.isUser ? 'pi pi-user' : 'pi pi-android'" 
                     [class]="message.isUser ? 'user-avatar' : 'bot-avatar'">
            </p-avatar>
            <div class="message-content">
              <div class="message-text">{{message.text}}</div>
              
              <!-- Suggestions -->
              <div class="suggestions" *ngIf="message.type === 'suggestion' && message.suggestions">
                <button pButton *ngFor="let suggestion of message.suggestions"
                        class="p-button-outlined p-button-sm"
                        (click)="handleSuggestion(suggestion)">
                  {{suggestion}}
                </button>
              </div>

              <!-- Service Link -->
              <a *ngIf="message.type === 'service' && message.serviceLink"
                 [routerLink]="message.serviceLink"
                 class="service-link">
                <i class="pi pi-external-link"></i>
                Learn More
              </a>

              <span class="message-time">
                {{message.timestamp | date:'shortTime'}}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Input -->
      <div class="chat-input" *ngIf="isExpanded">
        <input type="text" pInputText [(ngModel)]="currentMessage" 
               placeholder="Type your message..."
               (keyup.enter)="sendMessage()">
        <button pButton icon="pi pi-send" 
                (click)="sendMessage()"
                [disabled]="!currentMessage.trim()">
        </button>
      </div>
    </div>
  `,
  styles: [`
    .chatbot-container {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 360px;
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      z-index: 1000;
      transition: all 0.3s ease;
      max-height: 600px;
    }

    .chat-header {
      padding: 1rem;
      background: var(--brand-primary);
      color: white;
      border-radius: 1rem 1rem 0 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .chat-messages {
      padding: 1rem;
      overflow-y: auto;
      max-height: 400px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .message-container {
      display: flex;
      flex-direction: column;
    }

    .message {
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
      max-width: 80%;
    }

    .message.user-message {
      margin-left: auto;
      flex-direction: row-reverse;
    }

    .message-content {
      background: #f1f5f9;
      padding: 0.75rem;
      border-radius: 1rem;
      position: relative;
    }

    .user-message .message-content {
      background: var(--brand-primary);
      color: white;
    }

    .message-text {
      margin-bottom: 0.5rem;
    }

    .message-time {
      font-size: 0.75rem;
      color: #64748b;
      position: absolute;
      bottom: -1.25rem;
      right: 0;
    }

    .user-message .message-time {
      color: #94a3b8;
    }

    .suggestions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.75rem;
    }

    .service-link {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      color: var(--brand-primary);
      text-decoration: none;
      margin-top: 0.5rem;
    }

    .chat-input {
      padding: 1rem;
      border-top: 1px solid #e2e8f0;
      display: flex;
      gap: 0.5rem;
    }

    .chat-input input {
      flex: 1;
    }

    :host-context([data-theme="dark"]) {
      .chatbot-container {
        background: #1e293b;
      }

      .message-content {
        background: #334155;
        color: #e2e8f0;
      }

      .user-message .message-content {
        background: var(--brand-secondary);
      }

      .message-time {
        color: #94a3b8;
      }

      .chat-input {
        border-top-color: #334155;
      }
    }
  `]
})
export class AiChatbotComponent implements OnInit {
  isExpanded = false;
  messages: ChatMessage[] = [];
  currentMessage = '';

  // Initial greeting message
  ngOnInit() {
    this.addBotMessage(
      'Hello! I\'m your AI assistant. How can I help you today?',
      'suggestion',
      ['Tell me about your services', 'I need a quote', 'Book a consultation']
    );
  }

  toggleChat() {
    this.isExpanded = !this.isExpanded;
  }

  sendMessage() {
    if (!this.currentMessage.trim()) return;

    // Add user message
    this.addUserMessage(this.currentMessage);
    const userQuery = this.currentMessage;
    this.currentMessage = '';

    // Process user message and generate response
    this.processUserMessage(userQuery);
  }

  handleSuggestion(suggestion: string) {
    this.addUserMessage(suggestion);
    this.processUserMessage(suggestion);
  }

  private addUserMessage(text: string) {
    this.messages.push({
      text,
      isUser: true,
      timestamp: new Date()
    });
  }

  private addBotMessage(text: string, type: 'text' | 'suggestion' | 'service' = 'text', suggestions?: string[], serviceLink?: string) {
    this.messages.push({
      text,
      isUser: false,
      timestamp: new Date(),
      type,
      suggestions,
      serviceLink
    });
  }

  private processUserMessage(message: string) {
    // Simulate AI processing delay
    setTimeout(() => {
      const lowerMessage = message.toLowerCase();

      if (lowerMessage.includes('service')) {
        this.addBotMessage(
          'We offer a range of professional call center services. Here are our main offerings:',
          'suggestion',
          ['Customer Support', 'Sales & Lead Generation', 'Technical Support']
        );
      } else if (lowerMessage.includes('quote')) {
        this.addBotMessage(
          'I can help you get a customized quote. Would you like to:',
          'suggestion',
          ['Calculate ROI', 'See pricing', 'Talk to an expert']
        );
      } else if (lowerMessage.includes('consultation') || lowerMessage.includes('book')) {
        this.addBotMessage(
          'Great! Let me help you schedule a consultation.',
          'service',
          undefined,
          '/contact'
        );
      } else if (lowerMessage.includes('customer support')) {
        this.addBotMessage(
          'Our customer support service provides 24/7 assistance across multiple channels. Would you like to:',
          'suggestion',
          ['See features', 'Get pricing', 'Book demo']
        );
      } else if (lowerMessage.includes('pricing')) {
        this.addBotMessage(
          'I can help you understand our pricing structure. What type of service are you interested in?',
          'suggestion',
          ['Basic package', 'Professional package', 'Enterprise solution']
        );
      } else {
        this.addBotMessage(
          'I\'m here to help! What would you like to know more about?',
          'suggestion',
          ['Our Services', 'Pricing', 'Book a Call']
        );
      }
    }, 1000);
  }
}
