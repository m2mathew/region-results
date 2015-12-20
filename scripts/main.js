'use strict';
let React = require('react');
let ReactDOM = require('react-dom');
let Backbone = require('backbone');
let Parse = require('./keys');
let injectTapEventPlugin = require('react-tap-event-plugin');

window.$ = require('jquery');
window.jQuery = $;

let HomeComponent = require('./components/HomeComponent');
let NavigationComponent = require('./components/NavigationComponent');
let HistoryComponent = require('./components/HistoryComponent');
let SchoolsComponent = require('./components/SchoolsComponent');

let app = document.getElementById('app');
let nav = document.getElementById('nav');

let Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'history': 'history',
		'schools': 'schools'
	},
	home: () => {
		ReactDOM.render(
			<HomeComponent />, app
		);
	},
	history: () => {
		ReactDOM.render(
			<HistoryComponent />, app
		);
	},
	schools: () => {
		ReactDOM.render(
			<SchoolsComponent />, app
		);
	}
});

let r = new Router;
Backbone.history.start();

ReactDOM.render(
	<NavigationComponent router={r} />, nav
);
