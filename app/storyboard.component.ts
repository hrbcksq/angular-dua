import {Component} from 'angular2/core'
import {TweetService} from './tweet.service'
import {Tweet} from './tweet.model'
import {TweetComponent} from './tweet.component'

@Component({
    selector: 'storyboard',
    templateUrl: 'app/storyboard.template.html',
    styleUrls: ['app/storyboard.style.css'],    
    providers: [TweetService],
    directives: [TweetComponent]
})
export class StoryboardComponent{
    tweets:Tweet[]

    constructor(private tweetService: TweetService){        
        // private tweetService: TweetService
        this.tweets = tweetService.getTweets(10);
    }

    onLike(sender:Tweet){
          
    }
}
