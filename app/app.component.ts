import {Component} from 'angular2/core';
import {SignupComponent} from './signup-form.component'

@Component({
    selector: 'my-app',    
    template: `                        
            <signup-form></signup-form>
        `,    
    directives: [SignupComponent]
})
export class AppComponent {
    
}