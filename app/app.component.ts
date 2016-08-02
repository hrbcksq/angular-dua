import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {StoryboardComponent} from './storyboard.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    styleUrls:['app/app.style.css'],
    directives: [FavoriteComponent, LikeComponent, VoterComponent, StoryboardComponent]

})
export class AppComponent {
    title = "Angular"    
    post = {
        title: "Title",
        isFavorite: true,
        isLiked: true,
        likesCount: 10,
        vote: 0,
        votesCount: 24
    }

    onFavorite(){
        this.post.isFavorite = !this.post.isFavorite;        
    }

    onLike(){
        var post = this.post;
        post.isLiked = !post.isLiked;
        post.likesCount += post.isLiked ? 1 : -1;         
    }
    
    onVote(arg){
        this.post.vote += arg.step;
        this.post.votesCount += arg.step;        
    }
}