import { Component, Input, OnInit } from '@angular/core';
import { SlayerSound } from '../slayer';

@Component({
  selector: 'app-sound-button',
  templateUrl: './sound-button.component.html',
  styleUrls: ['./sound-button.component.css']
})
export class SoundButtonComponent implements OnInit {
  @Input() sound: SlayerSound;
  
  constructor() { }

  ngOnInit(): void {
  }

  playAudio(source: string) {
    const audio = new Audio();
    audio.src = source;
    audio.load();
    audio.play();
  }

}
