import 'rxjs/add/operator/map';
import {Http} from 'angular2/http';
import {GitUser} from './github.user';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';

@Injectable()
export class GithubService {

	private url = 'https://api.github.com'

	constructor(private _http: Http){

	}	

	getUser(username: string): Observable<GitUser> {
		//https://api.github.com/users/octocat
		let url = this.url + '/users/' +  username;
		return this._http.get(url).map(x => {return x.json();});
	}

	getFollowers(username: string): Observable<GitUser[]> {
		//https://api.github.com/users/octocat/followers
		let url = this.url + '/users/'+ username +'/followers';
		return this._http.get(url).map(x => {return x.json();});
	}
}