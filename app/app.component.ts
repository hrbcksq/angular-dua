import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'my-app',
    template: ``
})
export class AppComponent {    

    constructor() {
        var observable = Observable.of([1, 2, 3]).delay(500);
        //With this, the observable times out after 1 second and you'll get the error message in the console.
        observable
            .timeout(1000)
            .subscribe(
                x => console.log(x),
                error => console.error(error));
        
    }
}