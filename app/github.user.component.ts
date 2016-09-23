import {Component, Input} from 'angular2/core';

@Component({
	selector: 'github-template',
	template: `
		<div class="media">			
	        <div class="media-left">
	            <a href="">
	            	<img src="{{avatarUrl}}" alt="" class="media-object avatar">
	        	</a>
	        </div>
	        <div class="media-body" *ngIf='login'>
	            <h4 class="media-heading">@{{login}}</h4>
	        </div>    
		</div>
	`,
	styleUrls: ['app/github.user.component.css']
})
export class GithubUserComponent{
	@Input() avatarUrl: string;
	@Input() login: string;
}