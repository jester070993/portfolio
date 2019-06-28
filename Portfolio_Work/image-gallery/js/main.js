baguetteBox.run(".gallery", {
	  noScrollbars: true,
	  animation: false,
});

$(document).ready(function(){
	$("#search").hideseek({
		list: ".default_list",
		attribute: "title",
	});
});

