import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `
        <button class='btn btn-primary' [style.backgroundColor]="isActive ? 'blue' : 'gray'">Submit</button>    
    `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    private isActive: boolean = false;    
 }