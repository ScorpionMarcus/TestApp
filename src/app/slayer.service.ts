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

  getSlayer(id: number): Observable<Slayer> {
    // For now, assume that a slayer with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const slayer = SLAYERS.find(h => h.id === id)!;
    this.messageService.add(`SlayerService: fetched slayer id=${id}`);
    return of(slayer);
  }
}
