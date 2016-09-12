import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'my-app',
    template: ``
})
export class AppComponent {    

    constructor() {
        // var observable = Observable.of([1, 2, 3]).delay(500);
        // var observable = Observable.fromArray([1, 2, 3]);
        var observable = Observable.throw(new Error('error'));
        
                
        //Observables can go in the 'completed' state, which means they will no longer push data interm in the future.
        //onCompleted An Observable calls this method after it has called onNext for the final time, if it has not encountered any errors.
        observable.subscribe(
            x => console.log(x), 
            error => console.log(error),
            () => console.log("completed"));
        
    }
}