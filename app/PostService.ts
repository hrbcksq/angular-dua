import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Post} from './Post'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs'

@Injectable()
export class PostService{
	private urlsPost = 'https://jsonplaceholder.typicode.com/posts';

	constructor(private _http: Http){ }	

	getPosts(): Observable<Post[]> {
		return this._http.get(this.urlsPost).map(x => x.json());
	}

	postPost(post: Post){
		return this._http.post(this.urlsPost, JSON.stringify(post)).map(x => x.status);
	}
}