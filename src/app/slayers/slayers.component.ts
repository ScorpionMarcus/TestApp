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

  slayers: Slayer[] = [];
  
  constructor(private slayerService: SlayerService) { }
  
  ngOnInit(): void {
    this.getSlayers();
  }

  getSlayers(): void {
    this.slayerService.getSlayers()
      .subscribe(slayers => this.slayers = slayers);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.slayerService.addSlayer({ name } as Slayer)
      .subscribe(slayer => {
        this.slayers.push(slayer);
      });
  }

  delete(slayer: Slayer): void {
    this.slayers = this.slayers.filter(h => h !== slayer);
    this.slayerService.deleteSlayer(slayer.id).subscribe();
  }

}
