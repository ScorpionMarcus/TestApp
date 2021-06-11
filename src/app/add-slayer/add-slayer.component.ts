import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SLAYERS } from '../mock-slayers';

@Component({
  selector: 'app-add-slayer',
  templateUrl: './add-slayer.component.html',
  styleUrls: ['./add-slayer.component.css']
})
export class AddSlayerComponent implements OnInit {
  
  constructor() { }

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

  getId() {
    const newId = SLAYERS.length + 1;
    console.log(newId);
    return newId;
  }

  onSubmit() {
    this.newSlayer.patchValue({
      id: this.getId()
    });
    
    SLAYERS.push(this.newSlayer.value);
  }

}