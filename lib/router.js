Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

	//home page route
	this.route('home',{
		path: '/',
		template: 'home',
		onBeforeAction: function() {
      		$('body').addClass('landing');
      		this.next();
    	},
    	onStop: function() {
      		$('body').addClass('landing');
    	},
    	onAfterAction: function() {
      		$('body').addClass('landing');
      		this.next();
    	}

	});

	// About Route
	this.route('about',{
		path: '/about',
		template: 'about',
		onStop: function() {
      		$('body').removeClass('landing');
    	}
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



