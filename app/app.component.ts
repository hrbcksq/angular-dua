import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <h1 [textContent]='title'></h1>       

        <img [src]='source'/>
        <img src='{{source}}'/>`,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    private title: string = 'Angular 2 logo';
    private source: string = 'http://code-maven.com/img/angularjs.png';
 }