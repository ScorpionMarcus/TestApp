import { Component, OnInit } from '@angular/core';
import { Slayer } from '../slayer';
import { SlayerService } from '../slayer.service';

@Component({
  selector: 'app-slayers',
  templateUrl: './slayers.component.html',
  styleUrls: ['./slayers.component.css']
})
export class SlayersComponent implements OnInit {

  selectedSlayer?: Slayer;
  slayers: Slayer[] = [];
  
  constructor(private slayerService: SlayerService) { }
  
  ngOnInit(): void {
    this.getSlayers();
  }

  getSlayers(): void {
    this.slayers = this.slayerService.getSlayers();
  }

  onSelect(slayer: Slayer): void {
    this.selectedSlayer = slayer;
  }

}
