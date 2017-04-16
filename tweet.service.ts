
export class TweetService{
    getTweets()  {      
                        
        return  [ 
                { Pic:"http://lorempixel.com/100/100/people?1", 
                  Usernames: "AngularGuy", 
                  Hashtag: "#NGGUY", 
                  TweetMessage: "Leraning more Anuglar2 Today.", 
                  TotalLikes: 10
                },
                         
                { Pic:"http://lorempixel.com/100/100/people?2",
                  Usernames: "AngularNinja", Hashtag: "#NGNinja", 
                  TweetMessage:"perseverance is better than defeat.", 
                  TotalLikes: 100
                },
                { Pic:"http://lorempixel.com/100/100/people?3",
                  Usernames: "AngularBoss", 
                  Hashtag:"#TheAngularMan", 
                  TweetMessage: "Ask me anything about Angular?", 
                  TotalLikes: 2
                }];
                
      }

}
