import { Component, Input, OnInit } from '@angular/core';
import { Slayer } from '../slayer';

@Component({
  selector: 'app-slayer-detail',
  templateUrl: './slayer-detail.component.html',
  styleUrls: ['./slayer-detail.component.css']
})
export class SlayerDetailComponent implements OnInit {
  @Input() slayer?: Slayer;

  constructor() { }

  ngOnInit(): void {
  }

}
