System.register(['angular2/core', './heart.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, heart_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                    console.log(this.data);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "data", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n    \n    \n        <div class=\"media\">\n            <div class=\"media-left\">\n            <a href=\"#\">\n               <img class=\"media-object\" src=\"{{data.Pic}}\">  \n            </a>        \n            </div>\n            <div class=\"media-body\">\n                <div class=\"row\">\n                <h4 class=\"col-md-2 , usernames\">{{data.Usernames}}</h4>\n                <h4 class=\"col-md-2 , hashtag\">{{data.Hashtag}}</h4>\n            </div>\n            \n            <div class=\"row\">\n                 <h5 class=\"col-md-3 , tweetmessage\">{{data.TweetMessage}}</h5>\n            </div>\n\n            <div class=\"row\">\n                <heart [totalLikes]= \"data.TotalLikes\" [iLike]=\"data.iLike\"></heart>\n            </div>\n</div>\n            \n            \n        \n    \n    \n    ",
                        styles: [
                            " div.media{ \n            border-style: solid;\n            display: block;\n            }\n        .hashtag{\n        display: inline-block;\n    }\n        heart{\n            margin-left: 20px;\n        }\n        "],
                        directives: [heart_component_1.HeartComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map