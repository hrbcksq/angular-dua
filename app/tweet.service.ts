import {Tweet} from './tweet.model'

export class TweetSevice{
    getTweets(count: number): Tweet[]{
        var imgrep = 'http://lorempixel.com/100/100/';
        var array = new Tweet[count];
        for (var index = 0; index < array.length; index++) {
            var tweet = new Tweet();
            tweet.image = imgrep + index.toString();
            tweet.author = "author" + index.toString();
            tweet.handle = 'lorempost';
            tweet.content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod';
            tweet.likesCount = 10;
            tweet.like = index % 2;
            array[index] = tweet;
        }
        return array;
    }
}