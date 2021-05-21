import { Component, OnInit } from '@angular/core';
import { Slayer } from '../slayer';
import { SLAYERS } from '../mock-slayers';

@Component({
  selector: 'app-slayers',
  templateUrl: './slayers.component.html',
  styleUrls: ['./slayers.component.css']
})
export class SlayersComponent implements OnInit {

  selectedSlayer?: Slayer;
  slayers = SLAYERS;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onSelect(slayer: Slayer): void {
    this.selectedSlayer = slayer;
  }

}
