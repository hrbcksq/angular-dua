import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';



@Component({
    selector: 'my-app',    
    template: `
            <form [ngFormModel]='form'>
                <input type='text' ngControl='search'>
            </form>
        `    
})
export class AppComponent {
    public form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            search: []
        });

        var search = this.form.find('search');
        search.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(' ','-'))
            .subscribe(x => console.log(x));
    }    
}