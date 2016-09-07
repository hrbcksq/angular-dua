import {Component} from 'angular2/core';
import {PasswordComponent} from './password-form.component'

@Component({
    selector: 'my-app',    
    template: `                        
            <password-form></password-form>
        `,    
    directives: [PasswordComponent]
})
export class AppComponent {
    
}