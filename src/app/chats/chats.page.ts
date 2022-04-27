import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChatService } from '../services/chat.service';
import { Chat } from '../models/chats.model';
import { ChatViewComponent } from '../components/chat-view/chat-view.component';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss']
})
export class ChatsPage implements OnInit{

  chats$: Observable<Chat[]>;

  constructor(private chatService: ChatService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
    ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Loading...'});
    loading.present();

    this.chats$ = this.chatService.getChats().pipe(
      tap(chats => {
        loading.dismiss();
        return chats;
      })
    );
  }

  async sendMessage() {
  }

  async openViewModal(chat: Chat) {
    const modal = await this.modalCtrl.create({
      component: ChatViewComponent,
      componentProps: { chat },
    });

    await modal.present();
  }
}
