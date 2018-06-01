var popup=document.body.querySelector('.popup-form-block');
var close=popup.querySelector('.close');
var btnOpen=document.body.querySelectorAll('.btn-open');
var questPlaceholder=document.body.querySelectorAll('.place-holder');
var formInput=document.body.querySelectorAll('form input');
var textArea=document.body.querySelectorAll('.area');
var head=document.body.querySelector('.header-section');
var header=document.body.querySelector('.header');
var menu=document.body.querySelectorAll('.cd-accordion-menu');
var menuInput=document.body.querySelectorAll('.cd-accordion-menu .nav-item>input');
var counter=1;
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


// header
function unchecked(){
[].forEach.call(menuInput, function(elem) {
			elem.checked=false;
	});

console.log(counter);
}	
if(window.innerWidth>=992){
	[].forEach.call(menuInput, function(elem) {
		

		elem.addEventListener('click', function(e){
			if(elem.checked==true){
				unchecked();
				elem.checked=true;
			}
			// counter++
			// console.log(counter);
			// if(counter%2==0){
			// 	unchecked();
			// }
			// else{
			// 	unchecked();
			// 	elem.checked=true;
			// }
			
		});
	});
}


// window.onresize=function(){
// 	header.style="background: ;"
// 	counter=0;
// }


