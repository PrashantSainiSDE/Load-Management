import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatbotRoutingModule } from './chatbot-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';
import { ChatbotComponent } from './chatbot/chatbot.component';


@NgModule({
  declarations: [
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    SharedComponentModule,
  ]
})
export class ChatbotModule { }
