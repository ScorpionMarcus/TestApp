import { Slayer } from './slayer';

export const SLAYERS: Slayer[] = [
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