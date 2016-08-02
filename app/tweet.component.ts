import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Tweet} from './tweet.model'

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.template.html'    
})
export class TweetComponent{
    @Input() tweet;
    @Output() onTweetLike = new EventEmitter();

    onLike(){
        this.like = !this.like;
        this.likesCount += this.like ? -1 : 1;        
        this.onTweetLike.emit(this);
    }    
}
