import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe'

@Component({
    selector: 'my-app',    
    template: `                        
            {{course.title | uppercase}}
            <br>
            {{course.body | summary:100}}
        `,
    pipes: [SummaryPipe]
})
export class AppComponent {
    private course = {
        title: "Angular 2 for Beginners",
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`    
    }
}