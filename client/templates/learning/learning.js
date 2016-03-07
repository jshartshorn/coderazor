//******** here is the insert scripts
//db.books.insert({ name: "The Pragmatic Programmer", description: "Great book for keeping the engineer focused on the important things.", url: "http://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X/ref=sr_1_1?ie=UTF8&qid=1457022070&sr=8-1&keywords=pragmatic+programmer", createdAt: new Date() });
// db.books.insert({ name: "Clean Code", description: "The title says it all. The \"uncle\" Bob Martin series is awesome; well worth the purchase and the read(s).", url: "http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?ie=UTF8&qid=1457022158&sr=8-1&keywords=clean+code", createdAt: new Date() });
// db.books.insert({ name: "Clean Coder", description: "The title says it all. The \"uncle\" Bob Martin series is awesome; well worth the purchase and the read(s).", url: "http://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073/ref=sr_1_2?ie=UTF8&qid=1457022158&sr=8-2&keywords=clean+code", createdAt: new Date() });
// db.books.insert({ name: "Refactoring: Improving the Design of Existing Code", description: "Any seasoned engineer faces the challenge of updating someone else's code. This book is a great read for that.", url: "http://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0201485672/ref=pd_sim_14_5?ie=UTF8&dpID=512-aYxS4ML&dpSrc=sims&preST=_AC_UL160_SR127%2C160_&refRID=1JMMZT44X58AF26CS7NQ", createdAt: new Date() });
// db.books.insert({ name: "Working Effectively with Legacy Code", description: "Another great book on refactoring legacy software.", url: "http://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052/ref=sr_1_1?s=books&ie=UTF8&qid=1457325839&sr=1-1&keywords=working+effective+with+legacy+code", createdAt: new Date() });
// db.books.insert({ name: "Design Patterns", description: "Any good list includes this one from the GOF.", url: "http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=pd_sim_14_3?ie=UTF8&dpID=51szD9HC9pL&dpSrc=sims&preST=_AC_UL160_SR127%2C160_&refRID=0VN8FQ850P8P602DRCBE", createdAt: new Date() });
// db.books.insert({ name: "Patterns of Enterprise Application Architecture", description: "Martin Fowler is a must read.", url: "http://www.amazon.com/Patterns-Enterprise-Application-Architecture-Martin/dp/0321127420/ref=sr_1_1?s=books&ie=UTF8&qid=1457022560&sr=1-1&keywords=patterns+of+enterprise+application+architecture", createdAt: new Date() });
// db.books.insert({ name: "Art of Innovation", description: "One of the books responsible for inspiring many of us to challenge norms and think out of the box.", url: "http://www.amazon.com/Art-Innovation-Lessons-Creativity-Americas/dp/0385499841/ref=sr_1_1?s=books&ie=UTF8&qid=1457022619&sr=1-1&keywords=art+of+innovation", createdAt: new Date() });
// db.books.insert({ name: "The Art of Programming", description: "Foundational series for any serious software engineer. Any complete list has to mention Knuth IMHO.", url: "http://www.amazon.com/Computer-Programming-Volumes-1-4A-Boxed/dp/0321751043/ref=sr_1_1?s=books&ie=UTF8&qid=1457022671&sr=1-1&keywords=art+of+computer+programming", createdAt: new Date() });

//sites
//db.sites.insert({ name: "InfoQ", description: "I really enjoy the content on this site. I always seem to find something useful.", url: "http://www.infoq.com", createdAt: new Date() });
//db.sites.insert({ name: "StackOverflow", description: "An industry standard for collaboration and problem solving.", url: "http://www.stackoverflow.com", createdAt: new Date() });
//db.sites.insert({ name: "Thoughtworks", description: "This group has done amazing things and is associated with Martin Fowler.", url: "http://www.thoughtworks.com", createdAt: new Date() });

if (Meteor.isClient) {

	Template.learning.helpers({
	     tasks: function () {
	      	return Tasks.find({});
	     }
 	});

	Template.learning.helpers({
	     books: function () {
	      	return Books.find({});
	     }
 	});

 	Template.learning.helpers({
	     sites: function () {
	      	return Sites.find({});
	     }
 	});

}
