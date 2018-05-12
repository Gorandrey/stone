var popup=document.body.querySelector('.popup-form-block');
var close=popup.querySelector('.close');
var btnOpen=document.body.querySelectorAll('.btn-open');
var questPlaceholder=document.body.querySelectorAll('.place-holder');
var formInput=document.body.querySelectorAll('form input');
var textArea=document.body.querySelectorAll('.area');
var head=document.body.querySelector('.header-section');
var header=document.body.querySelector('.header');
var menuInput=document.body.querySelectorAll('.cd-accordion-menu .nav-item>input');
	// function bgNone(formElement){
	// 	[].forEach.call(formElement, function(elem) {
	// 		var xsBg=document.body.querySelector('.xs-bg');
	// 		// var head=document.body.querySelector('.header-section');
	// 		elem.onfocus= function(){
	// 			xsBg.classList.add('d-none');
	// 			head.style="margin-top: 0";
	// 		}
	// 		elem.onblur = function(){
	// 			xsBg.classList.remove('d-none');
	// 			head.style="margin-top: 50px";
	// 		}
	// 	})
	// }

	// if(window.innerWidth<=640){
	// 	console.log(1);
	// 	bgNone(formInput);
	// 	bgNone(textArea);
	// }
	// else{
	// 	head.style="margin-top: 0";
	// }


//form controller

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


// header bg	
if(window.innerWidth>=992){
	var counter=0;
	[].forEach.call(menuInput, function(elem) {
		elem.addEventListener('click', function(e){
			
			if(elem.checked==true){
				counter++
				header.style="background: rgba(32,32,32,0.6);"
				
			}
			else{
				counter--
				console.log(counter);
				if(counter==0){
				header.style="background: ;"
				}
			}
		});
	});
}


window.onresize=function(){
	header.style="background: ;"
}


