import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'my-app',
    template: ``
})
export class AppComponent {    

    constructor() {
        var userStream = Observable.of({
            userId: 1, 
            username: 'hrbcksq'
        }).delay(2000);

        var tweetStream = Observable.of([1, 2, 3]).delay(1500);

        Observable
            .forkJoin(userStream, tweetStream)
            .map(joined => {
                return {user: joined[0], tweets: joined[1]};
            })
            .subscribe(x => console.log(x), 
                error => console.error(error));
    }
}