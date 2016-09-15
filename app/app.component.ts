import {Component, OnInit} from 'angular2/core';
import {PostService} from './PostService'
import {HTTP_PROVIDERS} from 'angular2/http'

@Component({
    selector: 'my-app',
    template: `
    <ul>
        <li *ngFor='let post of _posts;'>
            {{post | json}}
        </li>
    </ul>`,
    providers: [PostService, HTTP_PROVIDERS]

})
export class AppComponent implements OnInit {        
    private _posts = [];

    constructor(private _postService: PostService) {

    }

    ngOnInit(){
        this._postService.getPosts().subscribe(x => {
            this._posts = x;
            console.log(x);
        });
    }
}