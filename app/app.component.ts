import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    // templateUrl: 'app/app.template.html',
    template: `
        <input type='button' class='btn btn-primary' value='button' (click)='onClick()'/>

        <div *ngIf='visibility'>
            This is vertified content
        </div>

        <div *ngIf="!visibility">
            This is unvertified content
        </div>        
        `   
        
})
export class AppComponent {
    private visibility: Boolean = true;

    onClick(){
        this.visibility = !this.visibility;
    }    
}