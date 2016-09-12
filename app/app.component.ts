import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'my-app',
    template: ``
})
export class AppComponent {    

    constructor() {
        var counter = 0;

        var observable = Observable.of('url')
            .flatMap(() => {
                if (++counter < 2) {
                    return Observable.throw(new Error('Request faliled.'));
                }
                else {
                    return Observable.of([1, 2, 3]);
                }                                
            });

         observable
             .retry(4)             
             .subscribe(
                 x => {
                     console.log(x)
                 },
                 error => {
                     console.error(error)
                 });
        
    }
}