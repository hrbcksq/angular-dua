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
        var observable = Observable.interval(1000);
        observable.map(x => {
            console.log("calling the server to get the latest news");
        })
        .subscribe(news => console.log(news));
    }
}