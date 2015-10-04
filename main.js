var loadingCounter = 0;
$(".slider img").fadeTo(0, 0);





$(document).ready(function(){


	start();
	
});


$('.slider img').each(function(){
				$(this).attr('onload','imagesLoaded(this)');					
});
var imagesIndex = [];




function start(){
	listEnd = $('.slider img').size();
	for(i=0;i<listEnd;i++){
		imagesIndex[i] = true;
	}
	imagesLoadTest();
}
function imagesLoadTest(){
	var imageLoadingLoop = setInterval(function(){
		$.each(imagesIndex,function(i){
			if(!imagesIndex[i]){
				return;
			}
			$('title').html(i)
			status = $('.slider img').get(i).complete;
			if($('.slider img').get(i).complete){
				loadingCounter = loadingCounter + 1;
				imagesIndex[i] = false;
			}
			if(loadingCounter == $('.slider img').size()){
				// alert("tüm resimler yüklendi");
				$('.slider img').each(function(){
					$(this).attr("width",($('.slider').width()/100*110));					
				});
				timeout = setInterval(bganimation,milisaniye);
				bganimation();
			}
			
		});
	}, 100);
}
 
					

					var timeout;
					var effectTimeMS = 100;
					var milisaniye = 0.25*1000;
					
					

			var artim = 0;
			var yonelim = 1;
			var genFark,yukFark;
			var oldImg = 0;
			var ranimg = 0;
			
			function bganimation(){
				clearInterval(timeout);
				do {
					ranimg = Math.floor((Math.random() * $('.slider img').size()));
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
					
					
					
					
					
					
					
				





