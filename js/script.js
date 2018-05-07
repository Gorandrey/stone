(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v3.0&appId=237917006944847&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));





let to_top_btn = document.getElementById('back_to_top');


to_top_btn.addEventListener('click', back_to_top);

function back_to_top(){

	let current_scroll = document.documentElement.scrollTop;
	if(current_scroll){
		window.scroll({top:0, left: 0, behavior: 'smooth'});	
	}
}



document.onscroll = function(){
	let current_scroll = document.documentElement.scrollTop;
	let window_height =  document.documentElement.clientHeight;
	let top_offset = document.getElementsByTagName('footer')[0].getBoundingClientRect().top;
	let bottom_line = (top_offset - window_height) * -1; 


	if(current_scroll > 0){
		to_top_btn.classList.add('active');
			if(bottom_line > 0){
			to_top_btn.style.bottom = bottom_line + 'px';
		}
		else {
			to_top_btn.style.bottom = 1 + '%';
		}		
	}
	else{
		to_top_btn.classList.remove('active');
	}	
}