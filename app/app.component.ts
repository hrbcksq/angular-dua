import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',    
    template: `                        
            <ul>
                <li>Title: {{ task.title }}</li>
                <li>Assigned to: {{ task.assignee?.name }}</li>
            </ul>
        `,
    pipes: [SummaryPipe],
    directives: [FavoriteComponent]
})
export class AppComponent {    
    task = {
        title: 'Review applications',
        assignee: null
    }
    
}