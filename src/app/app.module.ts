import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlayersComponent } from './slayers/slayers.component';
import { SoundButtonComponent } from './sound-button/sound-button.component';
import { SlayerDetailComponent } from './slayer-detail/slayer-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AddSlayerComponent } from './add-slayer/add-slayer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SlayersComponent,
    SoundButtonComponent,
    SlayerDetailComponent,
    MessagesComponent,
    AddSlayerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
