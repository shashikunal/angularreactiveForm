import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {

  form = new FormGroup({
    topics : new FormArray([])
  }); //init of formGroup and formArray

  addTopics(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = "";

  } //add Topics

  get topics(){
    return this.form.get('topics') as FormArray;
  } //this getter method


  removeTopic(topic){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index)
  } // remove Topics
  
  constructor() { }

  ngOnInit() {
  }

}
