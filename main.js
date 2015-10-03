$(document).ready(function (){
	
		

					var timeout;
					var effectTimeMS = 400;
					var milisaniye = 2*1000;
					var loadingCounter = 0;
					$(".slider img").fadeTo(0, 0);
					$('.slider img').load(function(){
						loadingCounter = loadingCounter + 1;
						if(loadingCounter == $('.slider img').size()){
							$('.slider img').each(function(){
								$(this).attr("width",($('.slider').width()/100*110));					
							});
							timeout = setInterval(bganimation,milisaniye);
							bganimation();
						}
					});
					
					
					/*imagesLoaded( '.slider img', function() {
						timeout = setInterval(bganimation,milisaniye);
						bganimation();								
					});*/
					
					
					/*
					$('.slider img').each(function() {
						
							while($(this).height() > 0){
								
							}
							
							loadingCounter = loadingCounter + 1;
							alert("sonuncu"+loadingCounter);*/
								
								/*
							if ($(this).height() > 0){
								
								alert("sonuncu"+loadingCounter);
							}else {
								$(this).load(function() {
										//alert("ikincisi");
								});
							}
							
							if(loadingCounter == $('.slider img').size()){
								alert("bitti");
								$('.slider img').each(function(){
									$(this).attr("width",($('.slider').width()/100*110));					
								});
								timeout = setInterval(bganimation,milisaniye);
								bganimation();
							}*/
					/*});*/


				/*	$('.slider img').load(function(){
						loadingCounter = loadingCounter + 1;
						
					});
					
					*/
					
					
			//		ss selam can
			
			
			function imgPositioner(i){				
				
			}	

			var artim = 0;
			var yonelim = 1;
			var genFark,yukFark;
			var oldImg = 0;
			var ranimg = 0;
			
			function bganimation(){
				clearInterval(timeout);
				do {
					ranimg = Math.floor((Math.random() * 2));
				} while (ranimg == oldImg);
				oldImg = ranimg;
					
					
				
				do {
						yuk1 = $('.slider img:eq('+ranimg+')').height();
						yuk2 = $('.slider').height();
					 yukFarkReal =Math.abs((yuk1-yuk2));
				} while (yuk1 < 100 || yuk2 < 100);
								
				do {
						yuk1 = Math.abs($('.slider img:eq('+ranimg+')').width());
						yuk2 = Math.abs($('.slider').width());
					 genFarkReal =Math.abs((yuk1-yuk2));
				} while (yuk1 < 100 || yuk2 < 100);
				
				
				if(artim > 4){
					artim = 0;
					genFark = genFarkReal;
					yukFark = yukFarkReal;
				}else{				
						if(artim == 4){
							artim++;
							genFark = 1;
							yukFark = 1;
						}
						
							if(artim == 3){
							artim++;
							genFark = 10;
							yukFark = yukFarkReal;
						}
														
						
										
						if(artim == 2){
							artim++;
							genFark = genFarkReal;
							yukFark = yukFarkReal;
						}
								
								
									
						if(artim == 1){
							artim++;
							genFark = genFarkReal/2;
							yukFark = yukFarkReal/3;
						}
								
						if(artim == 0){
							artim++;
							genFark = genFarkReal;
							yukFark = yukFarkReal;
						}
				}	
			
							
					
					yon = "-"+Math.abs(Math.ceil(genFark)).toString()+'px';
					yonY = "-"+Math.abs(Math.ceil(yukFark)).toString()+'px';

					
					milisaniyeForCSS = (milisaniye+0) +"ms";
					
					$(".slider img").css('-webkit-transition','-webkit-transform '+milisaniyeForCSS+' linear');
					$(".slider img").css('-moz-transition','-moz-transform '+milisaniyeForCSS+' linear');
					$(".slider img").css('-ms-transition','-ms-transform '+milisaniyeForCSS+' linear');
					$(".slider img").css('-o-transition','-o-transform '+milisaniyeForCSS+' linear');
					$(".slider img").css('transition','transform '+milisaniyeForCSS+' linear');
	
					
					$(".slider img").css('-webkit-transform','translate('+yon+','+yonY+')');
					$(".slider img").css('-moz-transform','translate('+yon+','+yonY+') rotate(0.12deg);');
					$(".slider img").css('-ms-transform','translate('+yon+','+yonY+')');
					$(".slider img").css('-o-transform','translate('+yon+','+yonY+')');
					$(".slider img").css('transform','translate('+yon+','+yonY+')');
					
					
					$('.slider img:eq('+ranimg+')').fadeTo(effectTimeMS, 1);
					$(".slider img").not('.slider img:eq('+ranimg+')').fadeTo(effectTimeMS, 0);
					
					timeout = setInterval(bganimation,milisaniye);
				}
					
					
					
					
					
					
					
					
					
					
			
	});
	
	
	
	
	
	
	
	
	
	





