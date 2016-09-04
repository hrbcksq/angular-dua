import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',    
    template: `
            <ul>
                <li *ngFor='#course of colletion, #i = index'>
                    {{i + 1}} - name: {{course}}
                </li>
            </ul>
        `          
})
export class AppComponent {
    private colletion = ['course 1', 'course 2', 'course 3'];            
}