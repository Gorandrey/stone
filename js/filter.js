$(document).ready(function() {
				
	$('.filter-menu a').click(function() {
					
		$('.filter-menu a').removeClass('selected');
		$(this).parent('a').addClass('selected');
		
		
		thisItem 	= $(this).attr('rel');
		
		if(thisItem != "all") {
		
			$('.stone-view a[rel='+thisItem+']').removeClass('hidden').show();
																
			$('.stone-view a[rel!='+thisItem+']').addClass('hidden').hide(600);
		} else {
			
			$('.stone-view a').removeClass('hidden').show();
		}
		return false;
	});
});
				