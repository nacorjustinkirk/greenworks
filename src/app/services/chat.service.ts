import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../models/chats.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

    apiUrl = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {}
    getChats(): Observable<Chat[]> {
        return this.http.get<Chat[]>(`${this.apiUrl}/chats`);
    }
}
