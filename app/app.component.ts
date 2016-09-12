import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'my-app',
    template: ``
})
export class AppComponent {
    public form: ControlGroup;

    constructor(fb: FormBuilder) {
        // Observable.empty()
        // Observable.range(1, 5)
        // Observable.fromArray([1, 2, 3])
        Observable.of([1, 2, 3])
            .subscribe(x => console.log(x));
    }
}