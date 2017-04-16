import {Component, Input} from 'angular2/core';
import {HeartComponent} from './heart.component';
import {TweetService} from './tweet.service';

@Component({
    selector: 'tweet',
    template:`
    
    
        <div class="media">
            <div class="media-left">
            <a href="#">
               <img class="media-object" src="{{data.Pic}}">  
            </a>        
            </div>
            <div class="media-body">
                <div class="row">
                <h4 class="col-md-2 , usernames">{{data.Usernames}}</h4>
                <h4 class="col-md-2 , hashtag">{{data.Hashtag}}</h4>
            </div>
            
            <div class="row">
                 <h5 class="col-md-3 , tweetmessage">{{data.TweetMessage}}</h5>
            </div>

            <div class="row">
                <heart [totalLikes]= "data.TotalLikes" [iLike]="data.iLike"></heart>
            </div>
</div>
            
            
        
    
    
    `,
    styles:[
        ` div.media{ 
            border-style: solid;
            display: block;
            }
        .hashtag{
        display: inline-block;
    }
        heart{
            margin-left: 20px;
        }
        `],
        directives:[HeartComponent]
})

export class TweetComponent{
 constructor(){
     console.log(this.data);
 }  

@Input() data;
}