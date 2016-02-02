if (Meteor.isClient){

	Template.header.events({
    	"click #menu": function(e){
      		//var text = event.target.text.value;
      		e.preventDefault();
      		$("#nav").toggleClass("menuToggle");
      		return false;
    	}
  	});
}
