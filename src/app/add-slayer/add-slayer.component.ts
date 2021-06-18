import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { SLAYERS } from '../mock-slayers';

@Component({
  selector: 'app-add-slayer',
  templateUrl: './add-slayer.component.html',
  styleUrls: ['./add-slayer.component.css']
})
export class AddSlayerComponent implements OnInit {

  showform: boolean = false;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  newSlayer = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    swordColor: new FormControl(),
    hashira: new FormControl(),
    breathingTechnique: new FormControl(),
    slayerSound: new FormGroup({
      audio: new FormControl(),
      buttonText: new FormControl()
    }), 
    image: new FormControl()
  })

  toggle() {
    this.showform ? this.showform = false : this.showform = true;
  }

  onSubmit() {
    this.toggle();

    this.newSlayer.patchValue({
      id: SLAYERS.length + 1
    });

    if (this.newSlayer.controls.name.value !== null) {
      SLAYERS.push(this.newSlayer.value);
      this.messageService.add(`Slayer added: ${this.newSlayer.controls.name.value}`)
    }

    this.newSlayer.reset();
  }

}