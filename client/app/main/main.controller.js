'use strict';

(function() {

class MainController {

  constructor($http, RedditService) {
    this.$http = $http;
    this.awesomeThings = [];
    this.gifipeUrl = null;
    this.recipeGifs = {};
    this.recipeJpgs = {};

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });

    RedditService.getRecipeGifs().then(data => {
      this.recipeJpgs = data.data.data.children[0].data.preview.images[0].source.url;
      this.recipeGifs = data.data.data.children[0].data.url.slice(0, -1);
      this.gifipeUrl = this.recipeJpgs;
    });
  }

  switchToGif() {
    this.gifipeUrl = this.recipeGifs;
  }

  switchToJpg() {
    this.gifipeUrl = this.recipeJpgs;
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('gifipesApp')
  .controller('MainController', MainController);

})();
