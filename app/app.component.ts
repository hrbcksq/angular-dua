import {Component} from 'angular2/core';
import {PasswordComponent} from './password-form.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/fromEvent';
import {SoundCloudService} from './SoundCloudService';


@Component({
    selector: 'my-app',    
    template: `
            <input type='text' class='form-control' id='search' placeholder='Search text...'>

            <ul>
                <li *ngFor='let track of tracks'>
                    <h4>{{track?.title}}</h4>
                    <span>{{track?.gender}}</span>
                </li>                
            <ul>
            <span>{{tracks?.length}}</span>
        `,    
    directives: [PasswordComponent],
    providers: [SoundCloudService]
})
export class AppComponent {
    public tracks = [];

    constructor(private _scService: SoundCloudService){        
          console.log(new Observable());
    }    

    ngAfterViewInit() {

        let keyups = Observable.fromEvent($('#search'), 'keyup')
            .map((event) => event.target.value)
            .filter((value) => {return value && value.length > 3;})
            .distinctUntilChanged()
            .debounceTime(400)
            .flatMap(search => {
                return Observable.fromPromise(this._scService.search(search));
            });


        var subscription = keyups.subscribe((value) => {            
            this.tracks = value as Array<Object>;
        });        
    }

}