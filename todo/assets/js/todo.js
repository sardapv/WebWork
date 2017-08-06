//check off todos by clicking
$('ul').on("click","li",function(){
	$(this).toggleClass("completed");
});

$('ul').on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});	
});

$('input').on("keypress",function(event){
	var todoText = $(this).val();
	if(event.which === 13){
		$(this).val("");
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
});
$('.fa-pencil').click(function(){
	$('input').fadeToggle(500);
});
