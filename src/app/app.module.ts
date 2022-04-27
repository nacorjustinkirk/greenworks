import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntiqueDetailComponent } from './components/antique-detail/antique-detail.component';
import { AntiqueViewComponent } from './components/antique-view/antique-view.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';


@NgModule({
  declarations: [AppComponent, AntiqueDetailComponent, AntiqueViewComponent, ChatViewComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

