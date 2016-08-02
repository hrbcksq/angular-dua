import {Component} from 'angular2/core'
import {TweetService} from './tweet.service'
import {Tweet} from './tweet.model'

@Component({
    selector: 'storyboard',
    templateUrl: 'app/storyboard.template.html',
    providers: [TweetService]
})
export class StoryboardComponent{
    tweets:Tweet[]

    constructor(){
        tweets = new Tweet[0];
        // private tweetService: TweetService
        // this.tweets = tweetService.getTweets(10);
    }

    onLike(sender:Tweet){
          
    }
}
