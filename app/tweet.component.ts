import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Tweet} from './tweet.model'
import {LikeComponent} from './like.component'

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.template.html',
    directives: [LikeComponent]    
})
export class TweetComponent{
    @Input() tweet;
    @Output() onTweetLike = new EventEmitter();

    onLike(){
        this.tweet.like = !this.tweet.like;
        this.tweet.likesCount += this.tweet.like ? 1 : -1;        
        // this.onTweetLike.emit(this);
    }    
}
