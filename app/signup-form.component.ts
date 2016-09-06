import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators'

@Component({    
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html',
    styleUrls: ['app/validation-form.css']     
})
export class SignupComponent {
    form: ControlGroup;    

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            username: ['', Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace]),
                UsernameValidators.shouldBeUnique
            ],
            password: ['', Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace])
            ]
        })
     }
    // form = new ControlGroup({
    //     username: new Control('',Validators.required),
    //     password: new Control('',Validators.required)
    // });

    signup(){
        console.log(this.form.value);
    }
}