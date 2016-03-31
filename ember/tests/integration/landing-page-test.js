import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Landing Page', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should welcome me to Rainforest Ember', function(assert) {
  visit('/').then(function() {
    assert.equal(find('h2#title').text(), 'Welcome to Rainforest Ember');
  });
});
