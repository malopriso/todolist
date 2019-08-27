$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo

$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing to do text from input
		var todoText = $(this).val();
		
		console.log($(this).val());
		
		$(this).val("");
		//create new li and add to ul
		$("ul").append('<li><span><i class="fa fa-trash"></i></span>' + todoText + '</li>');
		
	}
});

$("#plus, h1").click(function(){
	
	var podatki = $(this);
	var tagName = podatki[0].tagName;
	
	$("input[type='text']").fadeToggle();
	
	if (tagName == 'I') {
	
		$(this).toggleClass('fa fa-chevron-circle-up');
		$(this).toggleClass('fa fa-chevron-circle-down');
		
	} else if (tagName == 'H1') {
		
		$('#plus').toggleClass('fa fa-chevron-circle-up');
		$('#plus').toggleClass('fa fa-chevron-circle-down');
		
	}

});