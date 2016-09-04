import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',    
    template: `
            <ul>
                // <li *ngFor='#course of colletion, #i = index'>
                //     {{i + 1}} - name: {{course}}
                // </li>

                <template ngFor [ngForOf]='courses' #course #i=index>
                    <li>
                        {{i + 1}} - name: {{course}}
                    </li>
                </template>
            </ul>
        `          
})
export class AppComponent {
    private colletion = ['course 1', 'course 2', 'course 3'];            
}