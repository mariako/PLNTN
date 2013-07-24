$(document).ready(function(){


	$('.harmonika_link').each(function(){
		$(this).click(function(event){
			event.preventDefault();
			var eId = $(event.target).attr("id");
			$('#'+ eId + '_content').slideToggle("slow");
		});
	});
});