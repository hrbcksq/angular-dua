import {Component} from 'angular2/core';
import {PasswordComponent} from './password-form.component'
import * as _ from 'underscore';

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
    directives: [PasswordComponent]
})
export class AppComponent {
    public tracks = [];

    constructor(){        
        SC.initialize({
          client_id: 'fb928276e4be25bd006a313e6f246c97'
        });

    }

    debouncedSearch = _.debounce((value) => {
                SC.get('/tracks', { 
                    q: value,
                    license: 'cc-by-sa'
                }).then((tracks) => {
                  this.tracks = _.filter(tracks, (item) => {return item;});
                });
            }, 500);

    ngAfterViewInit() {
        $('#search').keyup((event) => {
            var value = event.target.value;
            if (value.length > 3){
                this.debouncedSearch(value);    
            }            

            
        });

    }

}