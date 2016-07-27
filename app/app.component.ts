import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `
    <div (click)='onDivClick()'>
        <button class='btn btn-primary' (click)="onClick($event)">Submit</button>
    </div>
    `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    onDivClick($event){
        console.log('Handled by div');
    }

    onClick($event){
        $event.stopPropagation();
        console.log('Clicked', $event);
    }    
 }