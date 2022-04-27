import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Chat } from 'src/app/models/chats.model';
import { ChatService } from 'src/app/services/chat.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent implements OnInit {
  @Input() chat: Chat;
  constructor(private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private chatService: ChatService) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss(this.chat);
  }

  async sendMessage() {
  }

}
