import {Component} from 'angular2/core';
import {GithubComponent} from './github.component'

@Component({
    selector: 'my-app',
    template: `        	
    	<github-panel></github-panel>
	`,
    directives: [GithubComponent]
})
export class AppComponent { }