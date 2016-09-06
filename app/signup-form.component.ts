import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';

@Component({    
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html',
    styleUrls: ['app/validation-form.css']     
})
export class SignupComponent {
    form: ControlGroup;

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
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