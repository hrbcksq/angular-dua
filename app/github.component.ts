import {Component} from 'angular2/core';
import {GitUser} from './github.user';
import {GithubService} from './github.service';
import {GithubUserComponent} from './github.user.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'github-panel',
	templateUrl: 'app/github.component.html',
	styleUrls: ['app/github.component.css'],
	providers: [GithubService, HTTP_PROVIDERS],
	directives: [GithubUserComponent]
})
export class GithubComponent{
	private username = 'octocat';
	private current: GitUser;
	private followers = GitUser[0];

	constructor(private _githubService: GithubService){
		_githubService.getUser(this.username).subscribe((data) => {
			this.current = data;			
		});
		_githubService.getFollowers(this.username).subscribe((data) => {
			this.followers = data;
		});

	}
}