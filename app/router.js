import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('speakers', {path:"Speakers"}, function(){
    this.route('detail', {path: "/:id"});
    this.route('create');
    this.route('edit', {path: "/:id/edit"})
  });
  this.route('not-found', { path: "/*path" });
  this.route('books', {path: "books"}, function() {
    this.route('create');
  });
});

export default Router;
