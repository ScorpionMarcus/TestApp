import { Injectable } from '@angular/core';
import {Slayer} from './slayer';
import {SLAYERS} from './mock-slayers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SlayerService {

  constructor(private messageService: MessageService) { }

  getSlayers(): Observable<Slayer[]> {
    const slayers = of(SLAYERS);
    this.messageService.add('SlayerService: fetched slayers');
    return slayers;
  }
}
