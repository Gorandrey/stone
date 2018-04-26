var popup=document.body.querySelector('.popup-form-block');
	var close=popup.querySelector('.close');
	var btnOpen=document.body.querySelectorAll('.btn-open');
	var questPlaceholder=document.body.querySelectorAll('.place-holder');
	var formInput=document.body.querySelectorAll('form input');
	var textArea=document.body.querySelectorAll('.area');

	function bgNone(formElement){
		[].forEach.call(formElement, function(elem) {
			var xsBg=document.body.querySelector('.xs-bg');
			var head=document.body.querySelector('header');
			elem.onfocus= function(){
				xsBg.classList.add('d-none');
				head.style="margin-top: 0";
			}
			elem.onblur = function(){
				xsBg.classList.remove('d-none');
				head.style="margin-top: 50px";
			}
		})
	}

	if(window.innerWidth<=640){
		bgNone(formInput);
		bgNone(textArea);
	}


	for(var i=0; i<btnOpen.length; i++){
		btnOpen[i].addEventListener('click', function(e){
		e.preventDefault();
		popup.classList.remove('d-none');

	});
	}
	[].forEach.call(questPlaceholder, function(elem) {
		var input=elem.parentNode.querySelector('input');

		input.addEventListener('keydown', function(e){
    		elem.classList.add('d-none');
    	});
    	input.addEventListener('keyup', function(e){
    		if(input.value==""){
    		elem.classList.remove('d-none');
    	}
    	}
		);
	});
	
	close.addEventListener('click', function(e){
		e.preventDefault();
		popup.classList.add('d-none');

	});