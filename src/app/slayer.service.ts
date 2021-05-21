import { Injectable } from '@angular/core';
import {Slayer} from './slayer';
import {SLAYERS} from './mock-slayers';

@Injectable({
  providedIn: 'root'
})
export class SlayerService {

  constructor() { }

  getSlayers(): Slayer[] {
    return SLAYERS;
  }
}
