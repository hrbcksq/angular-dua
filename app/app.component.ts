import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'my-app',
    template: ``
})
export class AppComponent {    

    constructor() {
        // var remoteDataStream = Observable.throw(new Error("Something failed."));
        var remoteDataStream = Observable.of([4, 5, 6]);

        remoteDataStream
            .catch(err => {
                var localDataStream = Observable.of([1, 2, 3]);
                return localDataStream;
            })
            .subscribe(x => console.log(x));      
        
    }
}