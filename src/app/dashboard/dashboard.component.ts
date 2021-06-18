import { Component, OnInit } from '@angular/core';
import { Slayer } from '../slayer';
import { SlayerService } from '../slayer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  slayers: Slayer[] = [];

  constructor(private slayerService: SlayerService) { }

  ngOnInit(): void {
    this.getSlayers();
  }

  getSlayers(): void {
    this.slayerService.getSlayers()
      .subscribe(slayers => this.slayers = slayers.slice(1, 5));
  }
}
