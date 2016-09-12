import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromArray';

@Component({
    selector: 'my-app',
    template: ``
})
export class AppComponent {
    public form: ControlGroup;

    constructor(fb: FormBuilder) {
        var dates = [1, 2, 3];
        

        var startDates = [];
        var startDate = new Date();

        for (var day = -2; day <= 2; day++) {
            var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDay() + day)
            startDates.push(date);
        }

        Observable.fromArray(startDates)
            .map(date => {
                console.log('Getting deals for date ' + date)
                return [1,2,3];
            })
            .subscribe(x => console.log(x));
    }
}