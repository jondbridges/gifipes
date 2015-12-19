'use strict';

(function () {

  angular.module('gifipesApp.reddit')
    .factory('RedditService', RedditService);

  function RedditService($http) {

    const REDDIT_BASE_URL = 'http://www.reddit.com';
    const RECIPE_GIF_SUBREDDIT = '/r/GifRecipes.json';
    const JSONP_CALLBACK = '?jsonp=JSON_CALLBACK';

    return {
      getRecipeGifs() {
        return $http.jsonp(REDDIT_BASE_URL + RECIPE_GIF_SUBREDDIT + JSONP_CALLBACK)
          .then(function (data) {
            return data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    };
  }
})();
