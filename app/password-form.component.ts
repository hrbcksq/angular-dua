import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Form, Validators} from 'angular2/common';
import {PasswordValidators} from './passwordValidators';
import {PasswordSevice} from './passwordService'


@Component({
    selector: 'password-form',
    templateUrl: 'app/password-form.component.html',
    styleUrls: ['app/validation-form.css'],
    providers: [PasswordSevice]
})
export class PasswordComponent {
    private controlGroup: ControlGroup;    

    constructor(formBuilder: FormBuilder, private passwordSevice: PasswordSevice){
        var fieldValidators = Validators.compose([Validators.required, Validators.minLength(5)]);       
        this.controlGroup = formBuilder.group({
            'oldPassword':['', fieldValidators],
            'newPassword':['', fieldValidators],
            'confirmPassword':['', fieldValidators]
        },{validator: PasswordValidators.matchPassword});
    }

    onChangePassword(){
        var result = this.passwordSevice.changePassword(this.controlGroup.value);
        if (!result) {
            this.controlGroup.find('oldPassword').setErrors({
                'invalid' : true
            });
        }
        else{
            alert("Password successfully changed")
        }

    }
}