import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `
        <button class='btn btn-primary' (click)="onClick($event)">Submit</button>
    `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    onClick($event){
        console.log('Clicked', $event);
    }    
 }