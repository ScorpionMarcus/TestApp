import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Slayer } from './slayer';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const slayers = [
      { 
        id: 1, 
        name: 'Tanjiro', 
        swordColor: 'Black', 
        breathingTechnique: "Water",
        slayerSound: {
          audio: '../../../assets/audio/tanjiro.mp3',
          buttonText: "i'm sorry!"
        },
        image: '../../../assets/images/tanjiro.png'
      },
      { 
        id: 2, 
        name: 'Inosuke', 
        swordColor: 'Metal', 
        breathingTechnique: "Beast",
        slayerSound: {
          audio: '../../../assets/audio/inosuke.mp3',
          buttonText: "coming through!"
        },
        image: '../../../assets/images/inosuke.png'
      },
      { 
        id: 3, 
        name: 'Zenitsu', 
        swordColor: 'Yellow', 
        breathingTechnique: "Lightning",
        slayerSound: {
          audio: '../../../assets/audio/zenitsu.mp3',
          buttonText: "nezuko chan!"
        },
        image: '../../../assets/images/zenitsu.png'
      },
      { 
        id: 4, 
        name: 'Rengoku', 
        hashira: 'Flame', 
        swordColor: 'Red',
        breathingTechnique: "Flame",
        slayerSound: {
          audio: '../../../assets/audio/rengoku.mp3',
          buttonText: "umai"
        },
        image: '../../../assets/images/rengoku.png'
       },
       { 
        id: 5, 
        name: 'Nezuko',
        image: '../../../assets/images/nezuko.png'
       }
    ];
    return {slayers};
  }

  // Overrides the genId method to ensure that a slayer always has an id.
  // If the slayers array is empty,
  // the method below returns the initial number (11).
  // if the slayers array is not empty, the method below returns the highest
  // slayer id + 1.
  genId(slayers: Slayer[]): number {
    return slayers.length > 0 ? Math.max(...slayers.map(slayer => slayer.id)) + 1 : 11;
  }
}