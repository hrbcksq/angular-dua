import { Component } from 'angular2/core';

@Component({    
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html',
    styleUrls: ['app/contact-form.component.css']        
})
export class ContactFormComponent {
    onSubmit(value){
        console.log(value);
    } 
}