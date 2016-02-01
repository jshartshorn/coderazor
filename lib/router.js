Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

	//home page route
	this.route('home',{
		path: '/',
		template: 'home'
	});

	// About Route
	this.route('about',{
		path: '/about',
		template: 'about'
	});

	// blog Route
	this.route('blog',{
		path: '/blog',
		template: 'blog'
	});

	// music Route
	this.route('music',{
		path: '/music',
		template: 'music'
	});

	// learning Route
	this.route('learning',{
		path: '/learning',
		template: 'learning'
	});


});


