import { Component } from "@angular/core";

@Component({
   selector : "course",
    templateUrl : './courses.component.html'
})
 export class coursesComponent {
    color = "red";
 courses = ["java" , "react" , "ember" , "rajendra" , "siddu" , "parthiv"];   

}
