import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Slayer } from '../slayer';
import { SlayerService } from '../slayer.service';

@Component({
  selector: 'app-slayer-detail',
  templateUrl: './slayer-detail.component.html',
  styleUrls: ['./slayer-detail.component.css']
})
export class SlayerDetailComponent implements OnInit {
  @Input() slayer?: Slayer;

  constructor(
    private route: ActivatedRoute,
    private slayerService: SlayerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSlayer();
  }

  getSlayer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.slayerService.getSlayer(id)
      .subscribe(slayer => this.slayer = slayer);
  }

  goBack(): void {
    this.location.back();
  }

}
