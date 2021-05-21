export interface Slayer {
  id: number;
  name: string;
  swordColor?: string;
  hashira?: string;
  breathingTechnique?: string;
  slayerSound?: SlayerSound;
  image: string;
}

export interface SlayerSound {
  audio: string;
  buttonText: string;
}