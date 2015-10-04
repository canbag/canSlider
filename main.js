
$(document).ready(function(){
	$(".canSlider").canSlider();
});



(function($) {
  "use strict";
 $.fn.canSlider = function(options) {
	 
		var i;
		var imagesIndex = [];
		var loadingCounter = 0;
		var parentim=this;
		var listEnd = 0;
		
		var options = $.extend({
            directions:['center-top','left-top','right-top','center-middle','center-top','center-bottom'],
			effectTime:2000,
			zaman:5,
			imageLine:"order",
			safeLoop:10,
            backgroundColor: "white"
        }, options );

		options.milisaniye = options.milisaniye*1000; 

		
		
		
 
			var oldImg = 0;
			var ranimg = 0;
			var artim = 0;
			var genFark,yukFark,i,tmpx,yuk1,yuk2,yukFarkReal,genFarkReal,nextDirection,yon,yonY,milisaniyeForCSS;
			
			this.bganimation = function(){
				

				// $('title').html(artim%directions.length)
				
				
				
				// IMAGE LINE
				if(options.imageLine == "order"){
					ranimg =  Math.ceil(artim%$(parentim).size());
					oldImg = ranimg;					
				}else{
					do {
						ranimg = Math.floor((Math.random() * $(parentim).size()));
					} while (ranimg == oldImg);
					oldImg = ranimg;
				}
					
				tmpx = 0;
				do {
					tmpx++;
					yuk1 = Math.abs($(parentim).find("img").eq(ranimg).height());
					yuk2 = Math.abs($(parentim).height());
					yukFarkReal =Math.abs((yuk1-yuk2));
				} while (yuk1 < 100 || yuk2 < 100 & tmpx < options.safeLoop);
					
				$('title').html(yuk2);
				tmpx = 0;
				do {
					tmpx++;
					yuk1 = Math.abs($(parentim).find("img").eq(ranimg).width());
					yuk2 = Math.abs($(parentim).width());
					genFarkReal =Math.abs((yuk1-yuk2));
				} while (yuk1 < 100 || yuk2 < 100 & tmpx < options.safeLoop);
				
				
				
				
				
				nextDirection = options.directions[artim%options.directions.length];
				
				switch(nextDirection){
					case 'left-top':
						genFark = 1;
						yukFark = 1;
						break;
					case 'left-middle':
						genFark = 1;
						yukFark = yukFarkReal/2;
						break;	
					case 'left-bottom':
						genFark = 1;
						yukFark = yukFarkReal;
						break;
					case 'right-top':
						genFark = genFarkReal;
						yukFark = 1;
						break;
					case 'right-middle':
						genFark = genFarkReal;
						yukFark = yukFarkReal/2;
						break;	
					case 'right-bottom':
						genFark = genFarkReal;
						yukFark = yukFarkReal;
						break;
					case 'center-top':
						genFark = genFarkReal/2;
						yukFark = 1;
						break;
					case 'center-middle':
						genFark = genFarkReal/2;
						yukFark = yukFarkReal/2;
						break;	
					case 'center-bottom':
						genFark = genFarkReal/2;
						yukFark = yukFarkReal;
						break;						
					default:
						genFark = genFarkReal/2;
						yukFark = yukFarkReal/2;				
						break;

				}	
							
					
					yon = "-"+Math.abs(Math.ceil(genFark)).toString()+'px';
					yonY = "-"+Math.abs(Math.ceil(yukFark)).toString()+'px';

					
					milisaniyeForCSS = (options.milisaniye+0) +"ms";
					
					$(parentim).find("img").css('-webkit-transition','-webkit-transform '+milisaniyeForCSS+' linear');
					$(parentim).find("img").css('-moz-transition','-moz-transform '+milisaniyeForCSS+' linear');
					$(parentim).find("img").css('-ms-transition','-ms-transform '+milisaniyeForCSS+' linear');
					$(parentim).find("img").css('-o-transition','-o-transform '+milisaniyeForCSS+' linear');
					$(parentim).find("img").css('transition','transform '+milisaniyeForCSS+' linear');
	
					
					$(parentim).find("img").css('-webkit-transform','translate('+yon+','+yonY+')');
					$(parentim).find("img").css('-moz-transform','translate('+yon+','+yonY+') rotate(0.12deg);');
					$(parentim).find("img").css('-ms-transform','translate('+yon+','+yonY+')');
					$(parentim).find("img").css('-o-transform','translate('+yon+','+yonY+')');
					$(parentim).find("img").css('transform','translate('+yon+','+yonY+')');
					
					
					$(parentim).find("img").eq(ranimg).fadeTo(options.effectTime, 1);
					$(parentim).find("img").not(ranimg).fadeTo(options.effectTime, 0);
					
					artim++;
				}
				
				
				
				
	parentim.css('width','100%').css('height','420px').css('overflow','hidden').css('position','relative');
	parentim.find('img').css('position','absolute').css('top','0px').css('left','0px');
				
	
	$(parentim).find("img").fadeTo(0, 0);
	listEnd = $(parentim).find("img").length;
	// $('title').html(listEnd);
	for(i=0;i<listEnd;i++){
		imagesIndex[i] = true;
	}
	// $('title').html(imagesIndex);
	
	var imageLoadingLoop = setInterval(function(){
		$.each(imagesIndex,function(i){
			if(!imagesIndex[i]){
				return;
			}
			
			if($(parentim).find("img").get(i).complete){
				loadingCounter = loadingCounter + 1;
				imagesIndex[i] = false;
			}
			
			
		});
		if(loadingCounter == $(parentim).find('img').size()){
				// alert("tüm resimler yüklendi");
				/*$(parentim).each(function(){
					$(this).attr("width",($(this).width()/100*110));					
				});*/
				// $.fn.canSlider.bganimation();
				parentim.bganimation();
		}
	}, 100);
				
				
				
				
				
				
				
				
				
			}	
					
})(jQuery);
					
					
					
					

				





