import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
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
  
  constructor(private slayerService: SlayerService, private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.getSlayers();
  }

  onSelect(slayer: Slayer): void {
    this.selectedSlayer = slayer;
    this.messageService.add(`SlayersComponent: Selected slayer id=${slayer.id}`)
  }

  getSlayers(): void {
    this.slayerService.getSlayers()
      .subscribe(slayers => this.slayers = slayers);
  }

}
