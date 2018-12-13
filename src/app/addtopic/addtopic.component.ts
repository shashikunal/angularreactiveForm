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
});

getTopics(topic:HTMLInputElement){
  this.topics.push(new FormControl(topic.value));
}

get topics(){
  return this.form.get('topics')as FormArray;
}

  // form = new FormGroup({
  //   topics : new FormArray([])
  // });

  // addTopics(topic:HTMLInputElement){
  //   this.topics.push(new FormControl(topic.value));
  //   topic.value = "";

  // }


  // get topics(){
  //   return this.form.get('topics') as FormArray;
  // }
  // removeTopic(topic){
  //   let index = this.topics.controls.indexOf(topic);
  //   this.topics.removeAt(index)
  // }
  
  constructor() { }

  ngOnInit() {
  }

}
